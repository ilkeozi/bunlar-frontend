import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import anayasa from "../assets/anayasa.md";
import ReactMarkdown from "react-markdown";

export default function MainPage() {
  const [constitutionText, setConstitutionText] = useState("");

  useEffect(() => {
    fetch(anayasa)
      .then((res) => res.text())
      .then((text) => setConstitutionText(text));
  });
  return (
    <Container>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12}>
          <ReactMarkdown children={constitutionText}></ReactMarkdown>
        </Grid>
      </Grid>
    </Container>
  );
}
