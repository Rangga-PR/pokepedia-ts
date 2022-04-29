import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 6px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.gray};
`;

type BarProps = {
  color?: string;
  progress?: string | number;
};

export const Bar = styled.div<BarProps>`
  background-color: ${({ color }) => color || "hsl(200, 20%, 90%)"};
  height: 100%;
  border-radius: 6px;
  width: ${({ progress }) => `${progress}%`};
  transition: 0.2s ease-in-out;
`;
