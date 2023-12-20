import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Box, Container } from "@mui/material";

const Root = () => {
  return (
    <Box sx={{ padding: "0 5rem" }}>
      <AppHeader />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <AppFooter />
    </Box>
  );
};

export default Root;
