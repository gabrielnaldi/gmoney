import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    margin-top: 2rem;
    border-spacing: 0 0.7rem;

    th {
      text-align: left;
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      color: var(--text-body);


      &:first-child{
        color: var(--text-title);
      }

      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }
    }

  }
`;
