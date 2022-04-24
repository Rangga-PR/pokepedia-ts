import styled from "@emotion/styled";

type ImgProps = {
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  f?: string;
  c?: string;
};

export default styled.img<ImgProps>`
  display: block;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  filter: ${({ f }) => f};
  cursor: ${({ c }) => c};
`;
