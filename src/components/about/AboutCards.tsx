import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSpring, animated } from "@react-spring/web";
import { FaGlobeAmericas } from "react-icons/fa";
import AboutusImage from "../../assets/aboutus-image.jpg"; // Correct import statement

const StyledCard = styled(Card)(() => ({
  width: "100%",
  minHeight: "400px",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    // boxShadow: theme.shadows[10] // Removed usage of theme, as it was not needed
  },
}));

const ImageContainer = styled(Box)({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

const ContentContainer = styled(Box)({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "#ffffff",
});

const IconContainer = styled(Box)({
  fontSize: "120px",
  color: "#21abf3",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
});

const AboutUsCard: React.FC = () => {
  const imageAnimation = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const contentAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
    config: { duration: 800 },
  });

  return (
    <StyledCard>
      <Grid container>
        <Grid item xs={12} md={6}>
          <animated.div style={imageAnimation}>
            <ImageContainer>
              <img
                src={AboutusImage} // Correct usage of the imported image
                alt="Export Import Products"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  (e.target as HTMLImageElement).src = AboutusImage; // Fallback image
                }}
              />
            </ImageContainer>
          </animated.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentContainer>
            <animated.div style={contentAnimation}>
              <IconContainer>
                <FaGlobeAmericas />
              </IconContainer>
            </animated.div>
            <animated.div style={textAnimation}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Global Trade Excellence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  marginBottom: "20px",
                  lineHeight: 1.8,
                  textAlign: "center",
                }}
              >
                With over two decades of experience in international trade, we
                specialize in connecting businesses worldwide through reliable
                export-import solutions. Our commitment to quality and
                efficiency has made us a trusted partner in global commerce.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ff8c00",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Bridging Markets, Building Trust
              </Typography>
            </animated.div>
          </ContentContainer>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default AboutUsCard;
