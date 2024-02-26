import algosdk from "algosdk";
import { APPLICATION_ADDRESS, APP_ID, algodClient } from "./env";

const PRICE_PER_BOX = 2500
const BOX_MULTIPLIER = 400
const calculateBoxCost = (key_length:number, value_length: number): number => {
     return PRICE_PER_BOX + (BOX_MULTIPLIER * (key_length + value_length))
}

export const createAun = async (name: string,  account: algosdk.Account) => {
    let index = APP_ID;
    let sender = account.addr;
    
    let args:Uint8Array[] = [];
    let create_aun = "create_aun";
    let box_key = "freddys wallet 2";
    let boxes = [{ appIndex: index, name: new Uint8Array(Buffer.from(box_key)) }];
    
    args.push(new Uint8Array(Buffer.from(create_aun)));
    args.push(new Uint8Array(Buffer.from(box_key)));
    
    const atc = new algosdk.AtomicTransactionComposer();
      try {
        let params = await algodClient.getTransactionParams().do();
        // create a transaction to add
        console.log("Trying to create name");
        let myAccountSigner = algosdk.makeBasicAccountTransactionSigner(account);
        let payment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: sender,
          suggestedParams: params,
          to: APPLICATION_ADDRESS,
          amount: calculateBoxCost(box_key.length, sender.length),
        });
        let application_call = algosdk.makeApplicationNoOpTxnFromObject({
          from: sender,
          suggestedParams: params,
          appIndex: index,
          appArgs: args,
          boxes: boxes,
        });
        atc.addTransaction({ txn: payment, signer: myAccountSigner });
        atc.addTransaction({ txn: application_call, signer: myAccountSigner });
    
        await atc.execute(algodClient, 2);
    
        console.log("Successfully created name " + box_key + "beloning to: " + sender);
      } catch (err) {
        console.error("Tests failed!", err);
        process.exit(1);
      }
    }