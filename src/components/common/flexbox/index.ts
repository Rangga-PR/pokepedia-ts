import styled from "@emotion/styled";

type FlexBoxProps = {
  dir?: string;
  jc?: string;
  ai?: string;
  fg?: string;
  fb?: string;
  fs?: string;
  fw?: string;
  m?: string;
  p?: string;
  w?: string;
  h?: string;
  maxW?: string;
  maxH?: string;
  minW?: string;
  minH?: string;
  b?: string;
  br?: string;
  bs?: string;
  bg?: string;
};

export default styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-grow: ${({ fg }) => fg};
  flex-basis: ${({ fb }) => fb};
  flex-shrink: ${({ fs }) => fs};
  flex-wrap: ${({ fw }) => fw};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  max-width: ${({ maxW }) => maxW};
  max-height: ${({ maxH }) => maxH};
  min-width: ${({ minW }) => minW};
  min-height: ${({ minH }) => minH};
  border: ${({ b }) => b};
  border-radius: ${({ br }) => br};
  box-shadow: ${({ bs }) => bs};
  background: ${({ bg }) => bg};
`;
