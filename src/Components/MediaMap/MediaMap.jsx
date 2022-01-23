// import axios from 'axios';
// import { useEffect, useState } from 'react'
import MediaCard from '../MediaCard/MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function MediaMap() {

    const galleryItems = [
        { id: 1, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-04%20at%2011.29.38%20PM.png', gif: 'https://media.giphy.com/media/iYEHYWjKCVkeUSfXiB/giphy.gif', link: 'https://locationlist.herokuapp.com/#/lists ', description: 'Location List is amobile  grocery list app. Items are sorted by distance from you and update while you shop.', title: 'LocationList' },
        { id: 2, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-05%20at%2010.28.47%20PM.png', gif: '', link: '', description: 'Movie gallery with API to OMDB open movie database keyword search, returns title, movie poster image url, and plot description', title: 'Movie Gallery' },
        { id: 3, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-05%20at%2010.40.29%20PM.png', gif: '', link: '', description: 'Pet Hotel React front end with .Net and C# back end with postgreSQL server for adding and tracking pets and owners.', title: 'Pet Hotel App' },
        { id: 4, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-05%20at%2010.53.52%20PM.png', gif: '', link: '', description: 'React authenticated access routes full-stack CRUD app for adding items with url image and description to database.', title: 'React Auth App' },
        { id: 5, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-05%20at%2011.05.35%20PM.png', gif: '', link: '', description: 'Giphy API search React app, favorite items, search a keyword, limit and restrict API response with request params.', title: 'GIPHY API Search' },
        { id: 6, path: 'https://raw.githubusercontent.com/SJCMN/CCLLC_CRA/main/public/Media/Screen%20Shot%202021-12-05%20at%2010.59.16%20PM.png', gif: '', link: '', description: 'Full stack software developer interested in solving problems by using data and exploring web technologies.', title: 'Professional Experience' },
    
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




