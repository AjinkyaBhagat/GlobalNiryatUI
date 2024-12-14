import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ContactCards from "../components/contact/ContactCards";

const Contact: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We Are Here for You. Contact Us Anytime
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 6 }}
        >
          Our dedicated team is ready to assist you with any questions or
          concerns you may have. Choose your preferred way to reach us.
        </Typography>

        <ContactCards />
      </Container>
    </Box>
  );
};

export default Contact;
