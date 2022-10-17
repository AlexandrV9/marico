import styled from "styled-components";

export default styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 11.2rem;
    margin-bottom: 1.7rem;
  }
  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    color: #7f7f7f;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      a {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        margin-right: 0.76rem;
        text-decoration: none;
      }
    }
  }
`;
