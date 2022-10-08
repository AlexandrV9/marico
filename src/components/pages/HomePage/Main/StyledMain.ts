import styled from "styled-components";

import path from "../../../../images/background.svg";

export default styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 8rem;
    line-height: 9rem;
    white-space: pre;
    margin: 12.8rem 0 13.6rem;
    span {
      background: linear-gradient(90deg, #FE6783 1.9%, #FFBF84 97.1%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    } 
  }

  .decor-box {
    background: no-repeat center/100% url(${path});
    height: 80rem;
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 18.8rem;
    p {
      max-width: 149rem;
      font-weight: 600;
      font-size: 7rem;
      line-height: 10.5rem;
      margin: 0 auto;
      text-align: center;
      color: #ffffff;
    }
  }

  .getStarted {
    margin-bottom: 18.3rem;
  }
`;
