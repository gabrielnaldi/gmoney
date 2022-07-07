import Modal from "react-modal";
import { Container, NewTransactionTypeContent, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, FormEventHandler, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeActive, setTypeActive] = useState("income");
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState('');

  function handleSubmitNewTransaction(event: FormEvent){
    event.preventDefault();
    
    const data = {
      type: typeActive,
      value: value,
      category: category,
      title: title
    }

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmitNewTransaction}>
        <button className="react-close-modal" onClick={onRequestClose}>
          <img src={closeImg} alt="Close modal" />
        </button>
        <h2>Cadastrar transação</h2>
        <input
          name="titulo"
          placeholder="Titulo"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Valor"
          value={value}
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />

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
        <input name="categoria" placeholder="Categoria" value={category} onChange={(event)=> setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}