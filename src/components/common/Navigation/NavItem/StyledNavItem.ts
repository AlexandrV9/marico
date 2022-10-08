import styled from "styled-components";

export default styled.li`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #707070;
  position: relative;

  & > a {
    color: #707070;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-right: 3.9rem;
  }

  a {
    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 2px;
      background-color: #326cf9;
      bottom: -2px;
      left: 0;
      transition: all 0.4s linear;
    }

    &:hover {
      cursor: pointer;
      &::after {
        width: 100%;
      }
    }

    &.active {
      &::after {
        width: 0;
      }
      color: #306ef7;
    }
  }

`;
