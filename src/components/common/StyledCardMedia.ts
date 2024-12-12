import { styled } from "@mui/system";
import { CardMedia } from "@mui/material";

export const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
  position: "relative",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.1) rotate(1deg)",
  },
});
