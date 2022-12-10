import styled from "styled-components";

export const StyledCard = styled.li`
  border: 2px solid white;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 466px) {
    flex-direction: row;
    height: 150px;
  }
`;

export const StyledImg = styled.div`
  height: 150px;
  width: 100%;
  min-width: 140px;
  background-color: white;

  @media screen and (min-width: 466px) {
    max-width: 200px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    line-height: 1.4;
    text-align: center;
    margin: 16px 0;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price-button__container {
    p {
      color: var(--color-primary);
      font-size: var(--sz-text-1);
      font-weight: var(--font-weg-2);
    }
  }

  .control-add-rmv__container {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 466px) {
    h2 {
      margin-top: unset;
      text-align: unset;
    }
  }
`;
