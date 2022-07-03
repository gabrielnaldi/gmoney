import { Container } from "./styles";

export function TransactionTable(){
    return (
        <Container>
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
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
            </table>
        </Container>
    )
}