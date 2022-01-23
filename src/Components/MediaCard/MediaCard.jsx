import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MediaCard({ galleryItem }) {

  const navigate = useNavigate();

  const [gif, setGif] = useState(false)

  const showGif = () => {

    setGif(!gif)
  }

  // const handleClick = () => {
  //   navigate(galleryItem.link)
  // }


  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardActionArea
      href="https://locationlist.herokuapp.com/#/home" 
      >
        {/* <Link to={galleryItem.link}> */}
          <CardMedia
            component="img"
            height="440"

            image={
              gif === false ?
                galleryItem.path : galleryItem.gif}
            alt={galleryItem.title}
            onMouseEnter={showGif}
            onMouseLeave={showGif}
            // onClick={handleClick}
            onTouchStart={showGif}
            onTouchEnd={showGif}
          
          />

        {/* </Link> */}
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
