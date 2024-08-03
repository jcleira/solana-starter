import base58 from "bs58";
import dotenv from "dotenv";

// Load environment variables from .env file
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

export const fetchWallet = (): Uint8Array => {
    const walletSecret = process.env.WALLET;

    if (!walletSecret) {
        throw new Error("WALLET is not defined");
    }

    return base58.decode(walletSecret);
};
