import { Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserInfo = ({ title, value, noCap }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          textTransform: noCap ? "unset" : "capitalize",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{value}</Typography>
      </Box>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default UserInfo;
