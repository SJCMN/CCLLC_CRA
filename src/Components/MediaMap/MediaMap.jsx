// import axios from 'axios';
// import { useEffect, useState } from 'react'
import MediaCard from "../MediaCard/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import galleryItems from './galleryItems';
import { Box, Paper, } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

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
    <Container sx={{ py: 8 }} >
      <Masonry
       columns = {{sm:1, md:2}} 
       spacing={3}
       defaultHeight={550}
       defaultColumns={4}
       defaultSpacing={1}
       >
        {galleryItems.map((galleryItem) => (
          
            <MediaCard
              galleryItem={galleryItem}
              id={galleryItem.id}
              title={galleryItem.title}
              description={galleryItem.description}
            />
          
        ))}
      </Masonry>
    </Container>
  );
}

export default MediaMap;
