import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./public/Media/Screen Shot 2021-12-04 at 11.29.38 PM.png"
          alt="location list screen shot"
          // src="app/public/Media/LocationList Prezo 20 ns.mov"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Location List
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
