import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { styled } from "@mui/system";
import { socialConfig } from "../../config/config";

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

// Contact card data
const contactCards = [
  {
    icon: <FaPhone size={24} />,
    title: "Phone Support",
    description: "Reach us directly for immediate assistance",
    action: "Call Now",
    contactAction: () => {
      // Phone number to call (from config.ts)
      window.location.href = `tel:${socialConfig.phoneNumber}`;
    },
  },
  {
    icon: <FaEnvelope size={24} />,
    title: "Email Support",
    description: "Write to us for detailed inquiries",
    action: "Send Email",
    contactAction: () => {
      // Redirect to Gmail with pre-filled subject and body
      const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${
        socialConfig.email
      }&su=${encodeURIComponent(
        socialConfig.emailSubject
      )}&body=${encodeURIComponent(socialConfig.emailBody)}`;
      window.open(emailLink, "_blank");
    },
  },
];

const ContactCards: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 4,
        mb: 8,
      }}
    >
      {contactCards.map((card, index) => (
        <StyledCard key={index}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                color: "primary.main",
              }}
            >
              {card.icon}
            </Box>
            <Typography
              variant="h5"
              component="div"
              align="center"
              gutterBottom
            >
              {card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2, textTransform: "none", px: 4 }}
              onClick={card.contactAction} // Trigger the contact action on click
            >
              {card.action}
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </Box>
  );
};

export default ContactCards;
