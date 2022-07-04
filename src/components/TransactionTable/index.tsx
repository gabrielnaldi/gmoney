import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amout: number;
  category: string;
  date: Date;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions([...transactions, response.data]));
    console.log(transactions);
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
        <tr>
          <td>Hamburgue</td>
          <td className="deposit">R$ 1200,00</td>
          <td>Comida</td>
          <td>20/04/20221</td>
        </tr>
        <tr>
          <td>Hamburgue</td>
          <td className="withdraw">- R$ 1200,00</td>
          <td>Comida</td>
          <td>20/04/20221</td>
        </tr>
        </tbody>
      </table>
    </Container>
  );
}
