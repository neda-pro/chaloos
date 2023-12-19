import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Box>Test</Box>
      <Outlet />
    </>
  );
};

export default Root;
