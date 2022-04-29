import styled from "@emotion/styled";

type InputProps = {
  m?: string;
  w?: string;
};

export default styled.input<InputProps>`
  font-size: 16px;
  margin: ${({ m }) => m};
  width: ${({ w }) => w};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  outline: none;
`;
