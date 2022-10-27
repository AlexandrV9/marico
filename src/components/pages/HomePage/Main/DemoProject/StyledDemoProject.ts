import styled from "styled-components";

export default styled.section`
  margin: 0 auto 13rem;
  display: flex;

  .subtitle {
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 8rem;
  }

  h3 {
    font-weight: 600;
    font-size: 7.5rem;
    line-height: 10rem;
    margin-bottom: 2.9rem;

    span {
      color: #3c82f4;
    }
  }

  ul {
    margin-bottom: 6.6rem;

    li {
      font-weight: 400;
      font-size: 23px;
      line-height: 34px;
      display: flex;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      div {
        width: 3.3rem;
        height: 3.3rem;
        display: grid;
        place-items: center;
        font-weight: 500;
        font-size: 18px;
        background-color: #2D2D2D;
        border-radius: 50%;
        margin-right: 1.2rem;
      }
    }
  }

  .box-img-decor {
    width: 82rem;
    height: 59.1rem;
    position: relative;
    right: -14rem;


    img {
      width: 100%;
      flex-shrink: 0;
      
    }

    div {
      z-index: -1;
      bottom: -7rem;
      left: 30rem;
      position: absolute;
      content: "";
      width: 30.9rem;
      height: 27.6rem;
      background-color: #8B8B8B;
    }
  }

  .primary {
    margin-right: 2rem;
  }
`;
