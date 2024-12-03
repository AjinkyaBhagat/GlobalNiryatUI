import { createTheme } from "@mui/material/styles";
import palette from "./palette";
//import typography from "./typography";
import components from "./components";
import spacing from "./spacing";

const theme = createTheme({
  palette,
  //typography,
  components,
  spacing,
});

export default theme;