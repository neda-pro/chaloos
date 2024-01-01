import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/productItem";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  decreaseCartItemCount,
  increaseCartItemCount,
  removeItemFromCart,
} from "../features/products/productsSlice";

const Cart = () => {
  const { cart, totalItemsInCart } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const calcTotalPrice = () => {
    return cart.reduce((acc, curr) => acc + curr.count * curr.price, 0);
  };

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
            icon={<DeleteIcon sx={{ color: "tomato" }} />}
          />
        );
      })}
      <Button variant="outlined" disabled={totalItemsInCart === 0}>
        Pay (${calcTotalPrice()}) and Buy
      </Button>
    </Container>
  );
};

export default Cart;
