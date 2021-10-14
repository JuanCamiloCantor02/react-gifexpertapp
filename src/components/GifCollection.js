import React/* , { useEffect, useState } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { getCollection } from '../helpers/getGifs'; */
import { GifCollectionItem } from './GifCollectionItem';

export const GifCollection = ({category}) => {
   
    /* const [images, setImages] = useState([]);
    
    useEffect(() => {
        getCollection(category)
            .then(setImages);
    }, [category]) */

    const {data:images, loading} = useFetchGifs(category);

    


    return (
        <>
            <h3 className="animate__animated animate__pulse">{category}</h3>

            {loading && <p>loading...</p>}
            
            <div className="card-collection">
                
                    {
                        images.map( img =>(
                        <GifCollectionItem
                            key={img.id} 
                            {...img} 
                        />
                        ))
                    }
                
            </div>
        </>
    )
}
