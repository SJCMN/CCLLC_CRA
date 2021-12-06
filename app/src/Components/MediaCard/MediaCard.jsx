import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MediaCard({ galleryItem }) {

  const [gif, setGif] = useState(false)

  const showGif= () => {

      setGif(!gif)
  }


  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardActionArea
      // href="https://github.com/SJCMN/LocationList-Prime"
      >
        <Link to={`/detail/${galleryItem.id}`}>
          <CardMedia
            component="img"
            height="440"

            image={
              gif === false ?
              galleryItem.path : galleryItem.gif}
            alt={galleryItem.title}
            onClick={showGif}
          // src="app/public/Media/LocationList Prezo 20 ns.mov"
          />
     
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
          {galleryItem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {galleryItem.description}
          </Typography>
        </CardContent>

      </CardActionArea>

    </Card>
  );
}
