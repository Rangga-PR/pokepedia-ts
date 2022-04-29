import React from "react";
import PropTypes from "prop-types";
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

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
};

export default ProgressBar;
