import React, { useEffect, useState } from 'react';
import "./postview.css"
import Card from '../PostCard/postcard';



export default function Postview() {
    const [data, setdata] = useState([]);
    useEffect(() => {
    fetch("http://localhost:3004/user").then(response => response.json()).then(data => setdata(data));
    }, []);
    return (
        <>  
            <div className='title-bar'>
            <h1>Instaclone</h1>
            <img alt="upload" srcSet="./Icons/camera.png"/>
            </div>
            {data.map((obj) => {
                return (
                    <Card key={obj.name+obj.description} data={obj}/>
                );
            })}
        </>
    );
}