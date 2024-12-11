import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  height: "100%",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const IconWrapper = styled(Box)({
  fontSize: "3rem",
  marginBottom: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  color,
}) => (
  <StyledCard>
    <CardContent sx={{ textAlign: "center", height: "100%" }}>
      <IconWrapper>
        <Box sx={{ color }}>{icon}</Box>
      </IconWrapper>
      <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default SkillCard;
