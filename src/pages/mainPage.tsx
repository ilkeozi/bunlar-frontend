import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import data from "./data.json";

export default function MainPage() {
  return (
    <Container>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12}>
          <ReactMarkdown children={data.data}></ReactMarkdown>
        </Grid>
      </Grid>
    </Container>
  );
}
