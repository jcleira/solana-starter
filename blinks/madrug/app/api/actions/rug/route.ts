import { ActionGetResponse, ActionPostRequest, ACTIONS_CORS_HEADERS, createPostResponse } from "@solana/actions";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { uploadRandomImage } from "./imageUploader";
import { uploadImageMetadata } from "./metadataUploader";
import { createNFTTransaction } from "./createNFTTransaction";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const GET = (req: Request) => {
    const payload: ActionGetResponse = {
        icon: new URL("/assets/rug0.png", new URL(req.url).origin).toString(),
        label: "Send me MadRug",
        title: "Get your MadRug",
        description: "Rug is a decentralized rug protocol that provides you Rugs!",
    };

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}

export const OPTIONS = GET;

export const POST = async (req: Request) => {
    try {
        const body: ActionPostRequest = await req.json();

        if (!body || !body.account) {
            return Response.json('Non valid payload provided', {
                 status: 400,
                 headers: ACTIONS_CORS_HEADERS,
                 });
        }

        let account: PublicKey;
        try {
            account = new PublicKey(body.account);
        }catch (error) {
            return Response.json('Invalid "account" provided' , {
                 status: 400,
                 headers: ACTIONS_CORS_HEADERS,
                });
        }

        const imageUri = await uploadRandomImage();
        const metadata = await uploadImageMetadata(imageUri);
        const tx = await createNFTTransaction(account, metadata);

        const payload = await createPostResponse({
            fields: {
                transaction: tx,
                message: "You got your MadRug!",
            },
        })

        return Response.json(payload, {
            headers: ACTIONS_CORS_HEADERS,
        });
    }catch (error) {
        console.error(error);
        return Response.json(
            "InternalServerError" + error,
            { status: 500 }
        );
    }
}

