import styled from "styled-components";

export const StyledSimilarProducts = styled.section`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 55px;

  h3 {
    font-size: var(--sz-title-3);
  }

  ul {
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 10px;
    margin-top: 20px;

    li {
      flex-shrink: 0;
    }
  }
`;
