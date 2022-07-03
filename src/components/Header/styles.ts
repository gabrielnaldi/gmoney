import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

    

  button{
    border: 0;
    color: var(--white);
    padding: 0 2rem;
    background-color: var(--blue-light);
    border-radius: 0.2rem;
    height: 2rem;

    transition: filter 0.2s;
    &:hover {
    filter: brightness(0.9)
    }
  }
`;
