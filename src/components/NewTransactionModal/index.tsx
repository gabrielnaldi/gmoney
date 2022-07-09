import Modal from "react-modal";
import { Container, NewTransactionTypeContent, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeActive, setTypeActive] = useState("deposit");
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState('');

  const {createNewTransaction} = useTransactions();

  function clearForm(){
    setTitle('');
    setValue(0);
    setCategory('');
    setTypeActive('deposit')
  }

  async function handleSubmitNewTransaction(event: FormEvent){
    event.preventDefault();
    
    const data = {
      type: typeActive,
      amount: value,
      category: category,
      title: title
    }

    await createNewTransaction(data);
    clearForm();
    onRequestClose();
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
            isActive={typeActive === "deposit"}
            onClick={() => setTypeActive("deposit")}
            activeColor="green"
          >
            <img src={incomeImg} alt="Deposit" />
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
