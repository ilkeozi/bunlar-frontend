import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import bunlarlogo from "../../assets/bunlar-logo-50h.png";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={bunlarlogo} alt="bunlar.org" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
