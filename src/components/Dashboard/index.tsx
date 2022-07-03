import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard(){
    return (
        <Container>
            <Summary title="Entradas" image="income" />
            <TransactionTable />
        </Container>
    )
}