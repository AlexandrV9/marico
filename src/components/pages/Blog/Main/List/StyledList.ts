import styled from "styled-components";

export default styled.ul`
  margin: 0 auto;
  max-width: 125.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.3rem;
  grid-auto-rows: minmax(30rem, max-content)
`;