import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const ProductsGrid = ({ products, category, onProductClick }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: grey[700],
          fontFamily: "monospace",
          fontWeight: 500,
          letterSpacing: 2,
          mb: 5,
        }}
      >
        {category}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ maxWidth: { xs: "unset", md: 1500 }, mr: "auto", ml: "auto" }}
      >
        {products.map((product) => {
          const { id, title, description, price, category, image, rating } =
            product;
          return (
            <Grid key={id} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => onProductClick(product)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        overflow: "hidden",
                        height: 60,
                        color: grey[900],
                        mt: 1.5,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        height: 40,
                        color: grey[600],
                        mt: 1.5,
                      }}
                    >
                      {description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        height: 40,
                        color: grey[600],
                        mt: 1.5,
                      }}
                    >
                      $ {price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductsGrid;
