import algosdk from "algosdk";
import { APP_ID, algodClient } from "./env";


export const deleteAun = async (name: string,  account: algosdk.Account) => {
  const atc = new algosdk.AtomicTransactionComposer();
  const sender = account.addr

  let args = [];
  let delete_aun = "delete_aun";
  let box_key = name;
  let boxes = [{ appIndex: APP_ID, name: new Uint8Array(Buffer.from(box_key)) }];

  args.push(new Uint8Array(Buffer.from(delete_aun)));
  args.push(new Uint8Array(Buffer.from(box_key)));

  try {
    let params = await algodClient.getTransactionParams().do();
    // create a transaction to add
    console.log("Deleting name");
    let myaccountSigner = algosdk.makeBasicAccountTransactionSigner(account);
    let application_call = algosdk.makeApplicationNoOpTxnFromObject({
      from: sender,
      suggestedParams: params,
      appIndex: APP_ID,
      appArgs: args,
      boxes: boxes,
    });
    atc.addTransaction({ txn: application_call, signer: myaccountSigner });

    await atc.execute(algodClient, 2);

    console.log("Successfully deleted name " + box_key + "belonging to: " + sender);
  } catch (err) {
    console.error("Name deletion failed!", err);
  }
}