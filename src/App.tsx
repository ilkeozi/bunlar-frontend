import "./assets/App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/defaultTheme";

import DefaultLayout from "./layouts/defaultLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
