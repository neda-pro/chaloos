import { Container, Paper } from "@mui/material";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import { useCategories, useProducts } from "../hooks/useProducts";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClose, setOpen } from "../features/modal/modalSlice";
import {
  setSelectedProduct,
  toggleItemFavorites,
} from "../features/products/productsSlice";
import ProductModal from "../components/ProductModal";

const Home = () => {
  const { open } = useSelector((store) => store.modal);
  const { selectedProduct, favorites } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const sectionRef = useRef([]);
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

  const scrollToSection = (index) => {
    if (sectionRef.current[index]) {
      sectionRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const onProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setOpen());
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
        <Carousel slides={createListOfCategories()} />
      </Paper>
      {/* categories section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          pt: 3,
        }}
      >
        <Categories
          onClick={scrollToSection}
          listOfCategories={createListOfCategories()}
        />
      </Paper>
      {/* products sections */}
      {categoriesData.map((category, index) => {
        return (
          <Paper
            ref={(el) => (sectionRef.current[index] = el)}
            key={category}
            elevation={0}
            sx={{
              borderRadius: 0,
              mt: 6,
            }}
          >
            <ProductsGrid
              onProductClick={onProductClick}
              products={productsData.filter(
                (data) => data.category === category
              )}
              category={category}
            />
          </Paper>
        );
      })}
      {selectedProduct && (
        <ProductModal
          open={open}
          onClose={() => dispatch(setClose())}
          product={selectedProduct}
          favoriteClick={() =>
            dispatch(toggleItemFavorites(selectedProduct.id))
          }
          favorite={favorites[selectedProduct.id]}
        />
      )}
    </Container>
  );
};

export default Home;
