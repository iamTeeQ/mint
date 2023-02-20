export const candyMachineAddress = "0xbdd0ba06730befae48b4667dbb5d1942b5e9d75050cbb8c495c3e83b4ae1e201";

export const collectionName = "The Coonies "; // Case sensitive!
export const MaxMint = 3
export const COLLECTION_SIZE = 6 

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "http://thecoonies.com/wp-content/uploads/2023/02/Coon-gif.gif";
export const collectionBackgroundUrl = "http://thecoonies.com/wp-content/uploads/2023/02/Website-Background-II.png";

export const mode = "test"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
