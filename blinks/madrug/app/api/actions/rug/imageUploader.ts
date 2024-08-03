import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { s3, BUCKET_NAME, BUCKET_PREFIX } from './aws';
import { fetchWallet } from "./wallet";

const wallet = fetchWallet();
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

// Function to upload a random image from the specified S3 bucket
export const uploadRandomImage = async (): Promise<string> => {
    try {
        const listParams = {
            Bucket: BUCKET_NAME,
            Prefix: BUCKET_PREFIX,
        };
        const listedObjects = await s3.listObjectsV2(listParams).promise();

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            throw new Error("No files found in the S3 bucket");
        }

        const pngFiles = listedObjects.Contents.filter(file => file.Key && file.Key.toLowerCase().endsWith(".png"));

        if (pngFiles.length === 0) {
            throw new Error("No PNG files found in the S3 bucket");
        }

        const randomFile = pngFiles[Math.floor(Math.random() * pngFiles.length)];

        if (!randomFile.Key) {
            throw new Error("Selected file does not have a valid key");
        }

        const getObjectParams = {
            Bucket: BUCKET_NAME,
            Key: randomFile.Key,
        };

        // Fetch the image from S3
        const s3Object = await s3.getObject(getObjectParams).promise();

        if (!s3Object.Body) {
            throw new Error("Failed to read the image from S3");
        }

        const imageBuffer = s3Object.Body as Buffer;

        const generic = await createGenericFile(imageBuffer, "rug", {
            contentType: "image/png",
        });

        const [myUri] = await umi.uploader.upload([generic]);

        return myUri;
    } catch (error) {
        console.log("Error uploading image:", error);
        throw error;
    }
};
