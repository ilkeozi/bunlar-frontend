import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import ButtonAppBar from "../components/buttonAppBar/buttonAppBar";
import ConstitutionCard from "../components/constitution/constitutionCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const defaultLayout = () => {
  return (
    <Box>
      <ButtonAppBar />

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <ConstitutionCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default defaultLayout;
