import styled from "styled-components";
import { transparentize, darken} from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    padding: 1.5rem;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    width: 100%;
    height: 4rem;
    color: var(--shape);
    font-weight: 600;
    line-height: 1.5rem;
    padding: 0 1.5rem;
    border: 0;
    margin-top: 1.5rem;
    border-radius: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const NewTransactionTypeContent = styled.div`
  display: grid;
  grid-template-columns: [DEPOSIT] 1fr [OUTCOME] 1fr;
  gap: 0.5rem;
  margin: 1rem 0;

  button {
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 1rem;
  }
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: "#33CC95",
    red: "#E62E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive
  ? transparentize(0.9, colors[props.activeColor]) : "transparent" };

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border-color: ${darken(0.2, "#d7d7d7")};
  }
`;
