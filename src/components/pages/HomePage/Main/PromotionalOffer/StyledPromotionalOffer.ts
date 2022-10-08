import styled from "styled-components";

export default styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18.8rem;

  .title {
    font-weight: 500;
    font-size: 3rem;
    line-height: 4.5rem;
    text-align: center;
    color: #ffffff;
    margin-bottom: 3rem;
  }

  .wrapper-btns {
    button {
      border-radius: 1.5rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;
      width: 28rem;
      padding: 1.8rem 0;

      &.primary {
        margin-right: 2.6rem;
      }
    }
  }

  .startBtn {
    border: none;
    margin-right: 2.6rem;
    color: white;
    background: #326cf9;
  }

  .demoBtn {
    background: none;
    border: 1px solid #707070;
    color: #707070;
  }

  .subtitle {
    font-weight: 400;
    font-size: 2rem;
    line-height: 3rem;
    color: #707070;
    display: flex;
    align-items: center;

    div {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      border: 0.5rem solid #0c17048c;
      background: #0fc65c;
      border-radius: 50%;
    }

    span {
      font-weight: 700;
      color: #ffffff;
      margin: 0 0.5rem;
    }
  }
`;
