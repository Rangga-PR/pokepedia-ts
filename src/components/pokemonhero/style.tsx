import styled from "@emotion/styled";

type ContainerProps = {
  p?: string;
  bg?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ p }) => p || "0 16px"};
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: ${({ bg }) => bg};
  background-image: url("/assets/svg/pokeball_fill.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
