import React from 'react'
import { Link } from 'react-router'
import myImage from '../assets/404.gif';


export default function NotFound(){
  return (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div>
        <img src={myImage} className="w-2xs rounded-2xl" alt="" />
        <p className="opacity-80 mt-2">Gamehub - A Game Library Not Fount </p>
        <Link
          to="/"
          className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd] mt-2"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
