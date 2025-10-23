import React from 'react'
import { Link } from 'react-router'

export default function NotFound(){
  return (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div>
        <h1 className="text-6xl font-black tracking-tight">404</h1>
        <p className="opacity-80 mt-2">Gamehub - A Game Library Not Fount </p>
        <Link to="/" className="btn btn-primary mt-4">
          Back Home
        </Link>
      </div>
    </div>
  );
}
