import styled from "styled-components";

import path from "../../../images/background.svg";

export default styled.section`
  background: no-repeat center/100% url(${path});
  height: 80rem;
  width: 100%;
  display: grid;
  place-items: center;
  p {
    max-width: 149rem;
    font-weight: 600;
    font-size: 7rem;
    line-height: 10.5rem;
    margin: 0 auto;
    text-align: center;
    color: #ffffff;
  }
`;
