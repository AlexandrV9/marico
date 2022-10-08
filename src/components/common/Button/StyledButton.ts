import styled from "styled-components";

export default styled.button`

  &.primary,
  &.secondary {
    border-radius: 1.5rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    width: 28rem;
    padding: 1.8rem 0;
  }

  &.primary {
    border: none;
    color: white;
    background: #326cf9;
  }

  &.secondary {
    background: none;
    border: 1px solid #707070;
    color: #707070;
  }

  &.avaliable {
    margin-top: 2rem;
  }

  &.third,
  &.fourth {
    border-radius: 2.5rem;
    background: none;
    font-weight: 500;
    font-size: 27px;
    color: #FFFFFF;
    border: 3.5px solid #4681E7;
    padding: 35px 0;
    width: 100%;
  }

  &.fourth {
    background-color: #FFFFFF;
    color: #3C82F4;
  }
`;
