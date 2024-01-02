import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch, useSelector } from "react-redux";
import { seCurrentValue } from "../features/carousel/carouselSlice";
import { grey } from "@mui/material/colors";

const Carousel = ({ slides }) => {
  const { currentSlide } = useSelector((store) => store.slider);
  const dispatch = useDispatch();

  const getNextSlide = () => {
    if (currentSlide === slides.length - 1) return 0;
    return currentSlide + 1;
  };
  const getPerviousSlide = () => {
    if (currentSlide === 0) return slides.length - 1;
    return currentSlide - 1;
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 500,
        display: "flex",
        overflow: "scroll",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={slide.category}
          sx={{
            display: index === currentSlide ? "flex" : "none",
            flex: 1,
            backgroundImage: `url(${slide.img})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "none",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              pl: 2,
              pr: 2,
            }}
          >
            <IconButton
              onClick={() => dispatch(seCurrentValue(getPerviousSlide()))}
            >
              <ArrowBackIosNewIcon sx={{ color: grey[900], fontSize: 35 }} />
            </IconButton>
            <Typography
              variant="h3"
              color={"white"}
              fontFamily={"monospace"}
              letterSpacing={1}
              sx={{ textShadow: "grey 1px 0 10px" }}
            >
              {slide.category}
            </Typography>
            <IconButton
              onClick={() => dispatch(seCurrentValue(getNextSlide()))}
            >
              <ArrowForwardIosIcon sx={{ color: grey[900], fontSize: 35 }} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
