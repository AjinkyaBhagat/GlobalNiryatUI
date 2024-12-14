import { styled } from "@mui/system";
import { animated } from "@react-spring/web";
import { Card } from "@mui/material";

export const AnimatedCard = styled(animated(Card))({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.05) translateZ(0)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  borderRadius: "16px",
  overflow: "hidden",
  background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
});
