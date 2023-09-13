import NavigationBar from "../components/navigationBar/navigationBar";
import Container from "@mui/material/Container";
import DefaultFooter from "../components/footer/defaultFooter";
import MainPage from "../pages/mainPage";

const defaultLayout = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <NavigationBar />
      <MainPage />

      <DefaultFooter />
    </Container>
  );
};

export default defaultLayout;
