import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import bunlarlogo from "../../assets/bunlar-logo-50h.png";
import Button from "@mui/material/Button";

export default function NavigationBar() {
  const pages = ["Anasayfa", "Hakkımızda", "İletişim"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <img style={{ maxHeight: 50 }} src={bunlarlogo} alt="bunlar.org" />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
