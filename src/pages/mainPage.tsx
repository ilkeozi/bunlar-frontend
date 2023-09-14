import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import data from "./data.json";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function MainPage() {
  return (
    <Container>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Türkiye Cumhuriyeti Anayasası"
              subheader="Kabul Tarihi: 18/10/1982"
            />
            <CardContent>
              <Typography align="justify">
                <ReactMarkdown children={data.data} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
