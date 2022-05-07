import styled from "@emotion/styled";

type CardContainerProps = {
  m?: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 142px;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  padding: 8px 16px;
  margin: ${({ m }) => m};
`;

type CardNumberContainerProps = {
  bg?: string;
};

export const CardNumberContainer = styled.div<CardNumberContainerProps>`
  position: absolute;
  left: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg, theme }) => bg || theme.color.red};
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  height: 28px;
  width: 28px;
  border-radius: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-right: 16px;
`;
