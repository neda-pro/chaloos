import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/productItem";
import { Container } from "@mui/material";
import {
  decreaseCartItemCount,
  increaseCartItemCount,
  removeItemFromCart,
} from "../features/products/productsSlice";

const Cart = () => {
  const { cart } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {cart.map((item) => {
        return (
          <ProductItem
            key={item.id}
            item={item}
            onRemove={() => dispatch(removeItemFromCart(item.id))}
            onIncrease={() => dispatch(increaseCartItemCount(item.id))}
            onDecrease={() => dispatch(decreaseCartItemCount(item.id))}
          />
        );
      })}
    </Container>
  );
};

export default Cart;
