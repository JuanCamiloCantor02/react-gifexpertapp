
import { useEffect, useState } from 'react'
import {getCollection} from '../helpers/getGifsCollection'


export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data : [],
        loading : true
    });


    useEffect(() =>{

        getCollection(category)
            .then(imgs =>{
                
                setTimeout(() => {
                    
                    
                    setState({
                        data: imgs,
                        loading: false
                    });


                }, 2000);
                
                    
            })

    }, [category])

    /* setTimeout(() => {
        setState({
            data: [1,2,3,4,5,6,7,8,9],
            loading: false
        })
    }, 3000); */

    return state;

}


