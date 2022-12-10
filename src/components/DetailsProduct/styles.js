import styled from "styled-components";

export const StyledImgInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.div`
  width: 100%;
  max-width: 350px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2 {
    font-size: var(--sz-title-2);
    text-align: center;
    line-height: 1.4;
  }

  p {
    font-size: var(--sz-title-2);
    font-weight: var(--font-weg-2);
    color: var(--color-secondary);
  }

  @media screen and (min-width: 850px) {
    max-width: 545px;

    h2 {
      font-size: var(--sz-title-1);
    }
  }
`;

export const StyledDescription = styled.div`
  margin-top: 72px;

  h3 {
    font-size: var(--sz-title-2);
  }

  p {
    margin-top: 28px;
    line-height: 1.3;
  }
`;
