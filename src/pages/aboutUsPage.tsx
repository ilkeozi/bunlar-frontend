import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function MainPage() {
  return (
    <Container>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="h6">
              Demokratik bir toplumu inşa etmek ve daha iyi bir gelecek için
              insanların bir araya gelmesini teşvik eden bir uygulama.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
