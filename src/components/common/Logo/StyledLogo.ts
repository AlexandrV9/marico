import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: default;
    color: white;
    margin-left: 1.7rem;
    font-weight: 800;
    font-size: 3rem;
    transition: all 0.4s linear;
    text-decoration: none;

    &.active:hover {
      cursor: pointer;
      color: #326cf9;
    }
  }

`;