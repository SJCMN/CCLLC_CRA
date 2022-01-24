import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link } from "@mui/material";
import { useState } from "react";

export default function MediaCard({ galleryItem }) {
  const [gif, setGif] = useState(false);
  const showGif = () => {
    setGif(!gif);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={gif === false ? galleryItem.path : galleryItem.gif}
          alt={galleryItem.title}
          onMouseEnter={showGif}
          onMouseLeave={showGif}
          onTouchStart={showGif}
          onTouchEnd={showGif}
        />
      </CardActionArea>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={galleryItem.link} underline="none" color="inherit">
            {galleryItem.title}
          </Link>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {galleryItem.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
