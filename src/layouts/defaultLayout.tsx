import Grid from "@mui/material/Grid";
import NavigationBar from "../components/navigationBar/navigationBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const defaultLayout = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <NavigationBar />

      <Container>
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Demokratik bir toplumu inşa etmek ve daha iyi bir gelecek için
              insanların bir araya gelmesini teşvik eden bir uygulama.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} disableGutters></Container>
    </Container>
  );
};

export default defaultLayout;
