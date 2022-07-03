import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import totalImg from '../../assets/total.svg'

interface SummaryProps {
  title: string;
  image: string;
}

export function Summary(props: SummaryProps) {
  const { image, title } = props;

  return (
    <Container>
      <div>
        <header>
          <span>Entrada</span>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1.500.00</strong>
      </div>
      <div>
        <header>
          <span>Entrada</span>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1.500.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Entrada</span>
          <img src={totalImg} alt="income" />
        </header>
        <strong>R$ 1.500.00</strong>
      </div>
    </Container>
  );
}
