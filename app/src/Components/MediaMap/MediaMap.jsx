import axios from 'axios';
import { useEffect, useState } from 'react'
import MediaCard from '../MediaCard/MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function MediaMap() {


    const [newGalleryItems, setGalleryItems] = useState([]);


    const getGalleryItems = () => {
        axios
            .get('/gallery')
            .then((response) => {
                // console.log('Gallery Items array: ', response);
                setGalleryItems(response.data)
            })
            .catch((error) => {
                console.log('GET ERROR in getGalleryItems: ', error);
            })
    }


    useEffect(() => {
        getGalleryItems();
    }, []);


    return (

        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {newGalleryItems.map((galleryItem) => (
                    <MediaCard
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                        id={galleryItem.id}
                        path={galleryItem.path}
                        description={galleryItem.description}
                    // likes={galleryItem.likes}
                    // likeItem={likeItem}
                    />
                ))}
            </Grid>
        </Container>

    );
}


export default MediaMap;




