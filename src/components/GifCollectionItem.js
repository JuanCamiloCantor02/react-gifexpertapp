import React from 'react'
import PropTypes from 'prop-types';

export const GifCollectionItem = ({id, title, url}) => {
   
   
    return (
        <div className="card animate__animated animate__backInUp">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifCollectionItem.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}