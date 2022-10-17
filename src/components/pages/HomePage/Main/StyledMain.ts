import styled from "styled-components";

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

  .dec-box {
    margin-bottom: 18.8rem;
  }

  .get-started {
    margin-bottom: 18.3rem;
  }
`;
