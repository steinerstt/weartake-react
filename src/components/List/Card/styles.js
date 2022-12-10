import styled from "styled-components";

export const StyledCard = styled.li`
  width: 296px;
  border: 2px solid var(--color-gray-3);
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    border-color: var(--color-primary);
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 154px;
  background-color: var(--color-gray-3);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledContent = styled.div`
  padding: 20px 15px;
  height: 243px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTitleDescription = styled.div`
  h2 {
    font-size: var(--sz-title-4);
    font-weight: var(--font-weg-1);
    line-height: 1.4;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #242424;
    line-height: 1.3;
    font-size: var(--sz-text-2);
    font-weight: var(--font-weg-4);

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-top: 15px;
  }
`;

export const StyledPriceButton = styled.div`
  p {
    font-weight: var(--font-weg-2);
    color: var(--color-primary);
  }
`;
