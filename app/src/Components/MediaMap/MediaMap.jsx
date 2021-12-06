// import axios from 'axios';
// import { useEffect, useState } from 'react'
import MediaCard from '../MediaCard/MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function MediaMap() {

    const galleryItems = [
        { id: 1, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/app/public/Media/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', description: 'Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.', likes: 0 },
        { id: 2, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/app/public/Media/Screen%20Shot%202021-12-05%20at%2010.00.29%20PM.png', description: 'Full stack software developer interested in solving problems by using data and exploring web technologies', likes: 0 },
        { id: 3, path: 'https://raw.githubusercontent.com/SJCMN/LocationList-Prime/master/public/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', description: 'Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.', likes: 0 },
        { id: 4, path: 'https://raw.githubusercontent.com/SJCMN/LocationList-Prime/master/public/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', description: 'Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.', likes: 0 },
        { id: 5, path: 'https://raw.githubusercontent.com/SJCMN/LocationList-Prime/master/public/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', description: 'Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.', likes: 0 },
        { id: 6, path: 'https://raw.githubusercontent.com/SJCMN/LocationList-Prime/master/public/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', description: 'Location List is a mobile grocery list app. Items are sorted by distance from you and update while you shop.', likes: 0 },
    
    ];


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
                            // key={galleryItem.id}
                            id={galleryItem.id}
                            path={galleryItem.path}
                            description={galleryItem.description}
                        // likes={galleryItem.likes}
                        // likeItem={likeItem}
                        />
                    </Grid>
                ))}

            </Grid>
        </Container>

    );
}


export default MediaMap;




