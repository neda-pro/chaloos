import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import ItemCounter from "./ItemCounter";

const ProductModal = ({ open, onClose, product }) => {
  if (!open) return null;
  const { title, price, description, image, rating } = product;
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
              ${price}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <ItemCounter />
            <Button
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon />}
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
