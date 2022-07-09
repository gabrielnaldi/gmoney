import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext, TransactionsProvider } from "../../TransactionsContext";

interface SummaryProps {
  title: string;
  image: string;
}

export function Summary(props: SummaryProps) {
  const { image, title } = props;

  const {transactions} = useContext(TransactionsContext);
  
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {deposits: 0, withdraws: 0, total: 0})

  return (
    <Container>
      <div>
        <header>
          <span>Entrada</span>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={incomeImg} alt="income" />
        </header>
      <strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="income" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(summary.total)}</strong>
      </div>
    </Container>
  );
}
