import styled from "styled-components";

export default styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 10rem;
    line-height: 15rem;
  }
  p {
    font-weight: 400;
    font-size: 4.3rem;
    line-height: 6.4rem;
    margin-bottom: 1.4rem;
  }

  button {
    &.primary {
      margin-bottom: 2.6rem;
    }
  }

  p.getStartedSubtitle {
    font-weight: 400;
    font-size: 3.8rem;
    line-height: 5.7rem;
    color: #707070;
    display: flex;
    align-items: center;
    margin-bottom: 0;

    div {
      width: 3rem;
      height: 3rem;
    }

    span {
      margin: 0 1.1rem;
    }
  }

`;