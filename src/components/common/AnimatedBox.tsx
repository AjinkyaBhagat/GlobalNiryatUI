import React from "react";
import { Box } from "@mui/material";
import { fadeIn } from "../../utils/animations";

interface AnimatedBoxProps {
  children: React.ReactNode;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => (
  <Box
    sx={{
      animation: `${fadeIn} 1.5s ease-out`,
      color: "#21abf3",
      marginBottom: 3,
    }}
  >
    {children}
  </Box>
);

export default AnimatedBox;
