import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";
import Modal from 'react-modal';

import { useState } from "react";

interface HeaderProps {
  onHandleOpenNewTransactionModal: () => void;
}

export function Header({onHandleOpenNewTransactionModal}: HeaderProps) {
 

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="g-money" />
          <button type="button" onClick={onHandleOpenNewTransactionModal}>Nova transação</button>
        </Content>
      </Container>
    </>
  );
}
