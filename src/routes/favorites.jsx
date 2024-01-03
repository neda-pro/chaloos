import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { Container } from "@mui/material";
import { toggleItemFavorites } from "../features/products/productsSlice";
import { useProducts } from "../hooks/useProducts";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Favorites = () => {
  const { favorites } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const {
    data: productsData,
    isError: productsIsError,
    isLoading: productsIsLoading,
  } = useProducts();
  if (productsIsLoading) {
    return null;
  }
  {
  }
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {productsData.map((item) => {
        if (favorites[item.id])
          return (
            <ProductItem
              key={item.id}
              item={item}
              onRemove={() => dispatch(toggleItemFavorites(item.id))}
              hideCounter
              icon={<FavoriteIcon sx={{ color: "tomato" }} />}
            />
          );
      })}
    </Container>
  );
};

export default Favorites;
