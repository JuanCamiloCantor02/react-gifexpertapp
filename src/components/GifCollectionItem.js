import React from 'react'

export const GifCollectionItem = ({id, title, url}) => {
   
    
   
    return (
        <div className="card animate__animated animate__backInUp">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
