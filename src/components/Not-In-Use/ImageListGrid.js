import "../css/ImageGrid.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    MuiImageListItemBar: {
      styleOverrides: {
        // Name of the slot
        title: {
          // Some CSS
          fontSize: "2rem",
        },
      },
    },
  },
});

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageListGrid = () => {
  return (
    <div className="image-grid-container">
      <ImageList
        sx={{ width: "100%", height: 605 }}
        variant="quilted"
        cols={4}
        rowHeight={300}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className="images-list"
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              // loading="lazy"
              className="image-item"
            />
            <ThemeProvider theme={theme}>
              <ImageListItemBar
                className="image-list-item-bar"
                title={item.title}
                subtitle={item.author}
              />
            </ThemeProvider>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 3,
  },
  // {
  //   img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  //   title: "Burger",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  //   title: "Camera",
  // },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 1,
  },
  // {
  //   img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  //   title: "Honey",
  //   author: "@arwinneil",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //   title: "Basketball",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //   title: "Fern",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //   title: "Mushrooms",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Tomato basil",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Sea star",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //   title: "Bike",
  //   cols: 2,
  // },
];

export default ImageListGrid;
