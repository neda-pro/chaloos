import {
  List,
  ListItemText,
  Avatar,
  Button,
  ListItem,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const Categories = ({ listOfCategories, onClick }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: grey[700],
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: 500,
          letterSpacing: 2,
        }}
      >
        Categories
      </Typography>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 5,
        }}
      >
        {listOfCategories.map((category, index) => {
          const { id, img, category: itemCategory } = category;
          return (
            <ListItem
              key={id}
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 0,
              }}
            >
              <Button
                onClick={() => onClick(index)}
                sx={{
                  borderRadius: "50%",
                  padding: 0,
                }}
              >
                <Avatar
                  alt={itemCategory}
                  src={img}
                  sx={{ width: 130, height: 130 }}
                />
              </Button>
              <ListItemText
                disableTypography
                primary={itemCategory}
                sx={{ color: grey[600], mt: 1.5, fontFamily: "monospace" }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Categories;
