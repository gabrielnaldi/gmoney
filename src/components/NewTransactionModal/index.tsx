import Modal from "react-modal";
import { Container, NewTransactionTypeContent, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeActive, setTypeActive] = useState("income");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button className="react-close-modal" onClick={onRequestClose}>
          <img src={closeImg} alt="Close modal" />
        </button>
        <h2>Cadastrar transação</h2>
        <input name="titulo" placeholder="Titulo" />
        <input type="number" name="price" placeholder="Valor" />

        <NewTransactionTypeContent>
          <RadioBox
            type="button"
            isActive={typeActive === "income"}
            onClick={() => setTypeActive("income")}
            activeColor="green"
          >
            <img src={incomeImg} alt="outcome" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={typeActive === "withdraw"}
            onClick={() => setTypeActive("withdraw")}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Saída</span>
          </RadioBox>
        </NewTransactionTypeContent>
        <input name="categoria" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
