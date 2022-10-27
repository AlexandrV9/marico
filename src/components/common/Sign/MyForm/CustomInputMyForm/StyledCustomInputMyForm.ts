import styled from "styled-components";

export default styled.div`
  position: relative;
  padding-bottom: 1.6rem;
  margin-bottom: 8.2rem;

  &:last-child {
    margin-bottom: 6.2rem;
  }

  input {
    border: none;
    width: 100%;
    background: none;
    border: none;
    padding-right: 5rem;
    font-weight: 400;
    font-size: 23px;
    line-height: 34px;
    color: #ffffff;
    outline: none;
  }







  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
    bottom: -2px;
    left: 0;
  }


`;
