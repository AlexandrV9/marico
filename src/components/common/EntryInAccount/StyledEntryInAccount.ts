import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;

  button {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    border: none;

    &.signIn {
      color: #707070;
      margin-right: 2.4rem;
      background: none;
    }
    &.signUp {
      padding: 1.2rem 2.1rem;
      color: #ffffff;
      background: #306ef7;
      border-radius: 1rem;
    }
  }
`;
