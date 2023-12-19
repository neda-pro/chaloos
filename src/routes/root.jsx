import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container } from "@mui/material";

const Root = () => {
  return (
    <Container maxWidth="xl">
      <AppHeader />
      <Outlet />
      <AppFooter />
    </Container>
  );
};

export default Root;
