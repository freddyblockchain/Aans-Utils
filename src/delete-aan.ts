/*import algosdk, { assignGroupID } from "algosdk";
import { APP_ID, algodClient } from "./env";


export const deleteaanTransaction = async (name: string,  signingAddress: string) => {
  const atc = new algosdk.AtomicTransactionComposer();
  const sender = signingAddress

  let args = [];
  let delete_aan = "delete_aan";
  let box_key = name;
  let boxes = [{ appIndex: APP_ID, name: new Uint8Array(Buffer.from(box_key)) }];

  args.push(new Uint8Array(Buffer.from(delete_aan)));
  args.push(new Uint8Array(Buffer.from(box_key)));

  try {
    let params = await algodClient.getTransactionParams().do();
    let application_call = algosdk.makeApplicationNoOpTxnFromObject({
      from: sender,
      suggestedParams: params,
      appIndex: APP_ID,
      appArgs: args,
      boxes: boxes,
    });
    assignGroupID([application_call])
    const transactions = [{txn: application_call, signers: [signingAddress]}]
    return transactions
  } catch (err) {
    console.error("Creation of delete aan failed", err);
  }
}*/