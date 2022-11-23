import React from 'react';
import "./postcard.css"

export default function Card({ data }) {
    return (
        <div className='card'>
            <img className='icon right' srcSet="./Icons/option.png" alt="triple-dot" />
            <p>{data.name}</p>
            <p>{data.location}</p>
            <img className='post' srcSet={data.PostImage} alt={`pic-${data.description}`} />
            <img className='icon' alt="Like" srcSet="./Icons/like.png" />
            <img className='icon' alt="Share" srcSet="./Icons/share.png" />
            <p>{data.date}</p>
            <p>{data.likes} likes</p>
            <p>{data.description}</p>
        </div>
    )
}