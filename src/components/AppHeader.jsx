import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  Badge,
  Link,
} from "@mui/material";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { totalItemsInCart } = useSelector((store) => store.products);

  const {
    data: userData,
    isError: userIsError,
    isLoading: userIsLoading,
  } = useUsers();
  if (userIsLoading) {
    return null;
  }
  const { username } = userData;
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        borderBottom: "2px solid",
        borderBottomColor: grey[100],
        pt: 2,
        pb: 2,
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            color: grey[900],
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            component="button"
            onClick={() => navigate("/home")}
            sx={{
              display: "flex",
              alignItems: "center",
              color: grey[900],
              textDecoration: "none",
            }}
          >
            <FlutterDashIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CHALOOS
            </Typography>
          </Link>

          <Box>
            <Tooltip title="Shopping cart">
              <IconButton onClick={() => navigate("/cart")} sx={{ p: 0 }}>
                <Badge badgeContent={totalItemsInCart} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Wish list">
              <IconButton
                onClick={() => navigate("/favorites")}
                sx={{ ml: 2, mr: 2 }}
              >
                <FavoriteIcon sx={{ color: "tomato" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="User profile">
              <IconButton onClick={() => navigate("/profile")} sx={{ p: 0 }}>
                <Avatar alt={username} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
