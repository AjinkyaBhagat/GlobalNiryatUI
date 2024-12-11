import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AnimatedBox from "../components/common/AnimatedBox";
import SkillCard from "../components/about/SkillCard";
import { skills } from "../components/about/SkillsData";
import AboutCards from "../components/about/AboutCards"; // Import AboutCards

const About: React.FC = () => (
  <Box
    sx={{
      padding: 4,
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <AnimatedBox>
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
        About Us
      </Typography>
    </AnimatedBox>

    <AnimatedBox>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: 1.8,
          color: "#555555",
        }}
      >
        Welcome to our export-import company! We specialize in selling
        high-quality onion powder to customers worldwide. Our expertise extends
        across various aspects of the international trade and logistics
        industry, ensuring timely delivery and satisfaction for all our clients.
        We are committed to maintaining the highest standards of quality and
        customer service.
      </Typography>
    </AnimatedBox>

    {/* Insert AboutCards here */}
    <AboutCards />

    <Grid container spacing={3} padding={3}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SkillCard {...skill} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default About;
