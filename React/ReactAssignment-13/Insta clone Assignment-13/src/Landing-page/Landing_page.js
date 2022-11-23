import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cartoon from "./CartoonPenguin.jpeg"
import "./Landing_page.css";
 
export default function Landing_page() {
  const navigate = useNavigate();

  return (
    <>
      <div className='two-part lt'>
      <img alt="Landing-Pic" src={Cartoon} />
      </div>
      <div className='two-part rt'>
      <h1>Welcome to Insta Clone</h1>
      <button onClick={() => {navigate("/InstaClone")}}>Enter</button>
      </div>
    </>
  );
}