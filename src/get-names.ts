import algosdk, { encodeAddress } from "algosdk";
import { APPLICATION_ADDRESS, APP_ID, algodClient } from "./env";

function uint8ArrayToBase64(bytes: Uint8Array) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    if (typeof window !== "undefined" && window.btoa) {
      // For browsers
      return window.btoa(binary);
    } else {
      // For Node.js
      return Buffer.from(binary, 'binary').toString('base64');
    }
  }

function decodeUint8(bytes: Uint8Array){
    return Buffer.from(uint8ArrayToBase64(bytes), "base64")
}

export const getAunNames = async (): Promise<string[] | undefined> => {
    try{
        const boxesRequest = algodClient.getApplicationBoxes(APP_ID)
        const boxes = (await boxesRequest.do()).boxes

        return boxes.map(element => {
           return decodeUint8(element.name).toString()
        });
      } catch (err) {
        console.log("names not found");
        return undefined
      }
    }

export const getAunAccountAddress = async (aunName: string): Promise<string | undefined> => {
    try{
        const boxesRequest = algodClient.getApplicationBoxByName(APP_ID, Buffer.from(aunName))
        const boxes = (await boxesRequest.do())
        return encodeAddress(boxes.value)
      } catch (err) {
        console.log("No account found paired with that name")
        return undefined
      }
}