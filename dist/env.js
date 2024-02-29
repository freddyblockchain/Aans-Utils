"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLICATION_ADDRESS = exports.APP_ID = exports.algodClient = void 0;
var algosdk_1 = __importDefault(require("algosdk"));
var server = "https://testnet-api.algonode.cloud"; // AlgoNode TestNet API server
var token = ""; // No token required for AlgoNode
var port = ""; // Port not needed for this URL
exports.algodClient = new algosdk_1.default.Algodv2(token, server, port);
exports.APP_ID = 599817180;
exports.APPLICATION_ADDRESS = "QSQSFVQ7RKIOXNTABFF3E7I6COT5NGTTH7ANSRN6UIYM4RSTBD6RYNT2G4";
