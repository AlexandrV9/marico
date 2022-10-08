import styled from "styled-components";

export default styled.section`
  margin: 0 auto 13rem;
  display: flex;
  max-width: 173.1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18.9rem;

  h3 {
    font-weight: 600;
    font-size: 80px;
    line-height: 10rem;
    color: #919191;

    span {
      color: #ffffff;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 68rem;
    width: 100%;
    column-gap: 2.3rem;
    margin-bottom: 4.4rem;

    p {
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
        color: #0fc65c;
        margin-bottom: 2.4rem;
      }

    li {
      padding: 3.3rem 4.5rem;
      background-color: #0d0d0d;
      position: relative;
      width: 100%;

      &:first-child {
        p {
          margin-bottom: 2.4rem;
        }
        img {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      &:last-child {
        p {
          margin-bottom: 9.6rem;
        }
      }
    }
  }
`;
