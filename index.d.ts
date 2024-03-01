import { Transaction } from "algosdk";

export interface SignerTransaction {
    txn: Transaction;
    signers?: string[];
}

export function createAunTransaction(name: string, signingAddress: string): Promise<SignerTransaction[]>;

export function deleteAunTransaction(name: string, signingAddress: string): Promise<SignerTransaction[]>;

export function getAunAccountAddress(aunName: string): Promise<string | undefined>;

export function getAunNames(): Promise<string[] | undefined>;