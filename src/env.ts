
import algosdk from "algosdk";
const server = "https://testnet-api.algonode.cloud"; // AlgoNode TestNet API server
const token = ""; // No token required for AlgoNode
const port = ""; // Port not needed for this URL

export const algodClient = new algosdk.Algodv2(token, server, port);
export const APP_ID = 614314262
export const APPLICATION_ADDRESS="TY2TEAT3F35D4QN3BL5NCDF42AFJIDQ7GEFFIZ7OIGTZ3ICTSS35OBZE5E"