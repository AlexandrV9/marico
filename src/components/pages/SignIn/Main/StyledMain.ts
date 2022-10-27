import styled from "styled-components";

export default styled.main`

  h1 {
    font-weight: 600;
    font-size: 75px;
    line-height: 112px;
    margin-top: 7.9rem;
    text-align: center;
  } 

  .text-one,
  .text-two {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }

  .text-one {
    margin-bottom: 7.5rem;
  }

  .text-two {
    margin-bottom: 4.6rem;
  }

  .or {
    font-weight: 600;
    font-size: 54px;
    line-height: 81px;
    margin-top: 6.7rem;
    text-align: center;
  }

  .box-buttons {
    margin: 0 auto;
    max-width: 151.9rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 7.8rem;
    margin-bottom: 6.9rem;
  }

  .conclusion {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 7.4rem;
  }
`;
