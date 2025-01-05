import React from "react";
import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Typography with animation
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  textAlign: "center",
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  fontSize: "2rem", // Default font size
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem", // Font size for sm breakpoint and above
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem", // Font size for md breakpoint and above
  },
  animation: `${fadeIn} 1.5s ease-out`, // Apply the fade-in animation
}));

const WhyChooseSection: React.FC = () => {
  return (
    <StyledTypography
      variant="h1"
      as="h1" // Replace component with as
      aria-label="Why Choose Air Sea Exim?"
    >
      Why Choose Air Sea Exim?
    </StyledTypography>
  );
};

export default WhyChooseSection;
