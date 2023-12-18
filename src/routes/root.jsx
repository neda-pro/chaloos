import { Box } from "@mui/material";
import { useProducts, useCategories, useProduct } from "../hooks/useProducts";

const Root = () => {
  const { data: products } = useProducts();
  const { data: categories } = useCategories();
  const { data: product } = useProduct(3);
  //   console.log(products);
  console.log(product);
  return <Box>Test</Box>;
};

export default Root;
