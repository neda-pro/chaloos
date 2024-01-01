import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCounter from "./ItemCounter";

const ProductItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const { count, image, price, title } = item;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <IconButton aria-label="delete" onClick={onRemove}>
          <DeleteIcon sx={{ color: "tomato" }} />
        </IconButton>
        <img src={image} height={80} />
        <Box>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="h6">${(count * price).toFixed(2)}</Typography>
        </Box>
      </Box>
      <ItemCounter
        sx={{ height: 35 }}
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </Box>
  );
};

export default ProductItem;
