import {
    TransactionInstruction,
    PublicKey,
    TransactionMessage,
    VersionedMessage,
    VersionedTransaction
} from "@solana/web3.js";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
    createNoopSigner,
    generateSigner,
    Instruction,
    percentAmount,
    publicKey,
    signerIdentity,
    TransactionBuilder
} from "@metaplex-foundation/umi";
import { mplCore } from "@metaplex-foundation/mpl-core";
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { toWeb3JsInstruction, toWeb3JsKeypair } from "@metaplex-foundation/umi-web3js-adapters"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

const umi = createUmi("https://api.devnet.solana.com")
            .use(mplCore())
            .use(mplTokenMetadata())
            .use(irysUploader())

export const createNFTTransaction = async (account: PublicKey, metadataUri: string): Promise<VersionedTransaction> => {
    try {
        const signer = createNoopSigner(publicKey(account))
        const mint = generateSigner(umi)
        umi.use(signerIdentity(signer))

        const blockhash = (await umi.rpc.getLatestBlockhash()).blockhash

        let nftTX: TransactionBuilder = createNft(umi, {
            mint,
            name: "MadRugX",
            symbol: "MADR",
            uri: metadataUri,
            sellerFeeBasisPoints: percentAmount(7),
        });

        const ntfInstuctions: Instruction[] = nftTX.getInstructions()
        const solInstructions: TransactionInstruction[] = ntfInstuctions.map(ix => toWeb3JsInstruction(ix))
        const v0message: VersionedMessage = new TransactionMessage({
            payerKey: account,
            recentBlockhash: blockhash,
            instructions: solInstructions
        }).compileToV0Message()

        const tx = new VersionedTransaction(v0message)
        const mintKeypair = toWeb3JsKeypair(mint)
        tx.sign([mintKeypair])

        return tx;
    } catch (error) {
        throw error;
    }
};
