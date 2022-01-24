// import axios from 'axios';
// import { useEffect, useState } from 'react'
import MediaCard from "../MediaCard/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import galleryItems from './galleryItems';

function MediaMap() {
    
  // const [newGalleryItems, setGalleryItems] = useState([]);

  // const getGalleryItems = () => {
  //     axios
  //         .get('/gallery')
  //         .then((response) => {
  //             // console.log('Gallery Items array: ', response);
  //             setGalleryItems(response.data)
  //         })
  //         .catch((error) => {
  //             console.log('GET ERROR in getGalleryItems: ', error);
  //         })
  // }

  // useEffect(() => {
  //     getGalleryItems();
  // }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {galleryItems.map((galleryItem) => (
          <Grid item key={galleryItem.id} xs={12} sm={6} md={4}>
            <MediaCard
              galleryItem={galleryItem}
              id={galleryItem.id}
              title={galleryItem.title}
              description={galleryItem.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MediaMap;
