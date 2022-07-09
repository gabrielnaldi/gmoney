import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | "createdAt">;

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));
    }, [])

    async function createNewTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', {...transactionInput, createdAt: new Date()});
        const { transaction } = response.data;
        setTransactions([...transactions, transaction]);
    }

    return <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
        {children}
    </TransactionsContext.Provider>
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}