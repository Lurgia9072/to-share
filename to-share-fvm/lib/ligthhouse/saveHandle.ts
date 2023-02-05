import { getAuthMessage, saveShards, generate } from "@lighthouse-web3/kavach";
import { ethers } from "ethers";

async function main() {
  const signer = new ethers.Wallet(
    "0x425857e495da73ceace770213b90b47adf0df8be4a79d00a2573daa522d3911f"
  );

  const { masterKey, keyShards } = await generate();

  const authMessage = await getAuthMessage(signer.address);
  const signedMessage = await signer.signMessage(authMessage.message);

  const { error, isSuccess } = await saveShards(
    signer.address,
    "0x88190dDcbD83e9de537C95a8442C73cD9aF7460D",
    signedMessage,
    keyShards
  );

  console.log(error === null); // true;
  console.log(isSuccess === true); //true;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });