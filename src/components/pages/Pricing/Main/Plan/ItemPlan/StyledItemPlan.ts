import styled from "styled-components";

export default styled.li`
  background-color: #131313;
  border: 1px solid #707070;
  border-radius: 1.5rem;
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1fr 1fr 105px;
  row-gap: 4rem;

  &.active {
    background-color: #3C82F4;
    .subtitle,
    .price p,
    .secondary,
    .priceSubtitleTwo {
    color: white;
    }

  }

  .title {
    font-weight: 600;
    font-size: 50px;
    line-height: 75px;
    margin-bottom: 0.1rem;
  }

  .subtitle {
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #b4b1b1;
    margin-bottom: 1.4rem;
  }

  .price {
    display: flex;
    margin-bottom: 1rem;

    &.with-installment-plan {
      margin-bottom: 8.8rem;
    }

    h3 {
      font-weight: 700;
      font-size: 69px;
      line-height: 9rem;
    }
    p {
      align-self: flex-end;
      font-weight: 400;
      font-size: 26px;
      line-height: 39px;
      color: #b4b1b1;
      margin-left: 0.4rem;
    }
  }

  .primary {
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin-bottom: 2.8rem;
  }

  .secondary {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #b4b1b1;
    margin-bottom: 0;
  }

  .priceSubtitleTwo {
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    text-decoration-line: underline;
    color: #b4b1b1;
  }

  .mainText {
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;


    .primary {
      margin-bottom: 0.8rem;
    }
    .secondary {
      margin: 4.5rem 0 5.4rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 2.4rem;
      }
      svg {
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
      }
      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        margin-left: 1rem;
      }
    }
  }
`;
