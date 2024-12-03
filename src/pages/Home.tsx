import React from "react";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is a responsive app with MUI and React Router.
      </Typography>
    </Container>
  );
};

export default Home;
