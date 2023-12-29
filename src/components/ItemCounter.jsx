import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { grey } from "@mui/material/colors";

const ItemCounter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: grey[100],
        borderRadius: 1,
      }}
    >
      <IconButton aria-label="increase">
        <RemoveIcon sx={{ height: 26, width: 26 }} color="primary" />
      </IconButton>
      <Typography
        variant="h6"
        color={grey[600]}
        component="div"
        fontFamily={"monospace"}
      >
        1
      </Typography>
      <IconButton aria-label="decrease">
        <AddIcon sx={{ height: 26, width: 26 }} color="primary" />
      </IconButton>
    </Box>
  );
};

export default ItemCounter;
