import React from "react";
import { Box, Container, Grid, CardContent, Typography } from "@mui/material";
import { cardData } from "../common/AnimatedCardData";
import { AnimatedCard } from "../common/StyledCard";
import { StyledCardMedia } from "../common/StyledCardMedia";

// Handle fallback for missing images
const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = "https://via.placeholder.com/200x300"; // Fallback image
};

const AnimatedCards: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={card.id}
            className="animated-card"
            id={card.id.toString()}
          >
            <AnimatedCard
              elevation={8}
              sx={{ willChange: "transform, opacity" }}
            >
              <StyledCardMedia
                image={card.image}
                title={card.title}
                onError={handleImageError} // Fallback image if error occurs
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    textAlign: "center",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimatedCards;
