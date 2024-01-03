import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Home from "./home";
const Root = () => {
  const { isHome } = useSelector((store) => store.navigation);
  return (
    <Box sx={{ padding: "0 5rem" }}>
      <AppHeader />
      {isHome ? <Home /> : <Outlet />}
    </Box>
  );
};

export default Root;
