import { Container, Paper } from "@mui/material";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Category from "../components/Category";

const categoriesOfProducts = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Women's clothing",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Men's clothing",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1314987155/photo/modern-golden-bracelets-and-ring-on-white-and-blue-background-with-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=kmFsJb6Q2WyucPvbLQKr1iV_04RrW2jlriAYjNRE3qI=",
    category: "Jewelry",
  },

  {
    id: 4,
    img: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
  },
];

const Home = () => {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
        }}
      >
        <Carousel />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          pt: 3,
        }}
      >
        <Categories listOfCategories={categoriesOfProducts} />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
        }}
      >
        <Category />
      </Paper>
    </Container>
  );
};

export default Home;
