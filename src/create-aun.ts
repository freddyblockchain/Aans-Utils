import algosdk, { assignGroupID } from "algosdk";
import { APPLICATION_ADDRESS, APP_ID, algodClient } from "./env";
import { getAunNames } from "./get-names";

const PRICE_PER_BOX = 2500
const BOX_MULTIPLIER = 400
const calculateBoxCost = (key_length:number, value_length: number): number => {
     return PRICE_PER_BOX + (BOX_MULTIPLIER * (key_length + value_length))
}

export const createAunTransaction = async (name: string,  signingAddress: string) => {
    let currentNames = await getAunNames()
    if(currentNames && currentNames.includes(name)){
      throw new Error("Name already belongs to someone");
    }

    let index = APP_ID;
    let sender = signingAddress;
    
    let args:Uint8Array[] = [];
    let create_aun = "create_aun";
    let box_key = name;
    let boxes = [{ appIndex: index, name: new Uint8Array(Buffer.from(box_key)) }];
    
    args.push(new Uint8Array(Buffer.from(create_aun)));
    args.push(new Uint8Array(Buffer.from(box_key)));
    
    const atc = new algosdk.AtomicTransactionComposer();
      try {
        let params = await algodClient.getTransactionParams().do();
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
        assignGroupID([payment,application_call])
        const transactions = [{txn: payment, signers: [signingAddress]}, {txn: application_call, signers: [signingAddress]}]
        return transactions
    
      } catch (err) {
        console.error("Creation of create aun failed", err);
      }
    }