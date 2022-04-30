import React from "react";
import { Container, Bar } from "./style";

interface ProgressBarProps {
  progress?: string | number;
  color?: string;
}

const ProgressBar = ({ progress, color, ...props }: ProgressBarProps) => {
  return (
    <Container {...props}>
      <Bar progress={progress} color={color} />
    </Container>
  );
};

export default ProgressBar;
