import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { fetchWallet } from "./wallet";

const wallet = fetchWallet();
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

const getRandomBeauty = (): string => `${Math.floor(Math.random() * 10) + 1}/10`;
const getRandomRarity = (): string => {
    const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
    return rarities[Math.floor(Math.random() * rarities.length)];
};

interface Metadata {
    name: string;
    symbol: string;
    description: string;
    image: string;
    attributes: Array<{ trait_type: string; value: string }>;
    properties: {
        files: Array<{ type: string; uri: string }>;
    };
    creators: Array<any>;
}

export const uploadImageMetadata = async (imageUri: string): Promise<string> => {
    try {
        const metadata: Metadata = {
            name: "MadRugs",
            symbol: "MADRUGS",
            description: "MadRugs are rugs that are mad",
            image: imageUri,
            attributes: [
                { trait_type: 'beauty', value: getRandomBeauty() },
                { trait_type: 'rarity', value: getRandomRarity() },
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: imageUri
                    },
                ]
            },
            creators: []
        };

        return await umi.uploader.uploadJson(metadata);
    } catch (error) {
        throw error;
    }
};
