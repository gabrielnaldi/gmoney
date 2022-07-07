import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  date: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                  style: "currency",
                  currency: "BRL"}).format(transaction.amount)}</td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
