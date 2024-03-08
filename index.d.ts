import { Transaction } from "algosdk";

export interface SignerTransaction {
    txn: Transaction;
    signers?: string[];
}

export function createAanTransaction(name: string, signingAddress: string): Promise<SignerTransaction[]>;

export function getAanAccountAddress(aanName: string): Promise<string | undefined>;

export function getAanNames(): Promise<string[] | undefined>;