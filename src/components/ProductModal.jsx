import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import ItemCounter from "./ItemCounter";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decreaseIteCount,
  increaseIteCount,
} from "../features/products/productsSlice";
import { setClose } from "../features/modal/modalSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductModal = ({ open, onClose, product, favoriteClick, favorite }) => {
  if (!open) return null;
  const { title, price, description, image, rating, count } = product;
  const dispatch = useDispatch();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={{
          display: "flex",
          gap: 2,
          maxWidth: 900,
          p: 4,
          mt: 30,
          ml: "auto",
          mr: "auto",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "40%", objectFit: "contain" }}
          image={image}
          alt={title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: "1 0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography component="legend" color="primary">
                  Voted by {rating.count} people
                </Typography>
                <Rating
                  name="read-only"
                  value={rating.rate}
                  precision={0.1}
                  readOnly
                />
              </Box>
              <Tooltip title="Add to wish list">
                <IconButton onClick={favoriteClick} sx={{ ml: 2, mr: 2 }}>
                  <FavoriteIcon
                    sx={{ color: favorite ? "tomato" : grey[400] }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h5" color={grey[900]} component="div">
              {title}
            </Typography>
            <Typography variant="body1" color={grey[600]} component="div">
              {description}
            </Typography>
            <Typography
              variant="h3"
              fontWeight={700}
              fontFamily={"monospace"}
              color={grey[900]}
              component="div"
            >
              ${(count * price).toFixed(2)}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <ItemCounter
              count={count}
              onIncrease={() => dispatch(increaseIteCount())}
              onDecrease={() => dispatch(decreaseIteCount())}
            />
            <Button
              disabled={count === 0}
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon />}
              onClick={() => {
                dispatch(addItemToCart(product));
                dispatch(setClose());
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default ProductModal;
