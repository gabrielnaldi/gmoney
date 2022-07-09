import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsProviderData {
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
export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderData) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));
    }, [])
    return <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
}