import React from "react";
import { Typography, Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframe animations for Home page
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomeText = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontWeight: 700,
  textAlign: "center",
  animation: `${fadeInUp} 1.5s ease-out`,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const CompanyText = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontWeight: 900,
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));

const HomePageText: React.FC = () => {
  return (
    <>
      <WelcomeText variant="h4">Welcome to</WelcomeText>
      <CompanyText variant="h1">AIR SEA EXIM</CompanyText>
    </>
  );
};

export default HomePageText;
