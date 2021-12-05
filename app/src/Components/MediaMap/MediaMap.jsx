import axios from 'axios';
import { useEffect, useState } from 'react'
import MediaCard from '../MediaCard/MediaCard';




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

        <>
            
            <div className="container">
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
            </div>
        </>
    );
}


export default MediaMap;



