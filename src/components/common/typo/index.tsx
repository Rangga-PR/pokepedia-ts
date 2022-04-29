import styled from "@emotion/styled";

type TypoProps = {
  ff?: string;
  fs?: string;
  fw?: string;
  lh?: string;
  ls?: string;
  c?: string;
  ta?: string;
  m?: string;
  p?: string;
};

export default styled.p<TypoProps>`
  font-family: ${({ ff }) => ff};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  letter-spacing: ${({ ls }) => ls};
  color: ${({ c }) => c};
  text-align: ${({ ta }) => ta};
  margin: ${({ m }) => m || "0"};
  padding: ${({ p }) => p};
`;
