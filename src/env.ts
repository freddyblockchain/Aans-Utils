
import algosdk from "algosdk";
const server = "https://testnet-api.algonode.cloud"; // AlgoNode TestNet API server
const token = ""; // No token required for AlgoNode
const port = ""; // Port not needed for this URL

export const algodClient = new algosdk.Algodv2(token, server, port);
export const APP_ID = 599817180
export const APPLICATION_ADDRESS="QSQSFVQ7RKIOXNTABFF3E7I6COT5NGTTH7ANSRN6UIYM4RSTBD6RYNT2G4"