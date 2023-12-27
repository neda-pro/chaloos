import { Container, Paper } from "@mui/material";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import { useCategories, useProducts } from "../hooks/useProducts";

const Home = () => {
  const {
    data: categoriesData,
    isError: categoriesIsError,
    isLoading: categoriesIsLoading,
  } = useCategories();

  const {
    data: productsData,
    isError: productsIsError,
    isLoading: productsIsLoading,
  } = useProducts();
  if (productsIsLoading || categoriesIsLoading) {
    return null;
  }

  const createListOfCategories = () => {
    const catArr = categoriesData.map((category, index) => {
      const selectedProduct = productsData.filter(
        (product) => product.category === category
      );
      return {
        id: index,
        category,
        img: selectedProduct[Math.floor(Math.random() * selectedProduct.length)]
          .image,
      };
    });

    return catArr;
  };

  return (
    <Container disableGutters={true} maxWidth={false}>
      {/* Carousel */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
        }}
      >
        <Carousel />
      </Paper>
      {/* categories section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          pt: 3,
        }}
      >
        <Categories listOfCategories={createListOfCategories()} />
      </Paper>
      {/* products sections */}
      {categoriesData.map((category) => {
        return (
          <Paper
            key={category}
            elevation={0}
            sx={{
              borderRadius: 0,
              mt: 6,
            }}
          >
            <ProductsGrid
              products={productsData.filter(
                (data) => data.category === category
              )}
              category={category}
            />
          </Paper>
        );
      })}
    </Container>
  );
};

export default Home;
