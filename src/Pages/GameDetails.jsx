import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchGames } from '../hooks/api'
import { FaStar } from 'react-icons/fa';

const GameDetails = () => {
  const { id } = useParams()
  const [game,setGame] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    fetchGames().then(list => {
      const found = list.find(g => g.id === id)
      setGame(found || null)
      setLoading(false)
      if(found) document.title = `${found.title} | Gamehub`
    })
  }, [id])

  if(loading) return <div className="min-h-[50vh] grid place-items-center"><span className="loading loading-ring loading-lg"></span></div>
  if(!game) return <div className="alert alert-error">Game not found.</div>

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <figure className="rounded-xl overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full object-cover"
        />
      </figure>
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          {game.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className=" flex items-center text-[13px] text-[#ffffffc7] font-bold px-[5px] rounded-2xl bg-[#605dff]">
            {game.category}
          </div>
          <div className="flex gap-1 items-center bg-[#00d3bb] px-[5px] rounded-2xl text-[15px]">
            <FaStar className="text-yellow-300" />
            {game.ratings}
          </div>
          <div className="bg-[#000] text-[13px] p-1 rounded-2xl">
            Dev: {game.developer}
          </div>
        </div>
        <p className="opacity-90 leading-relaxed mb-6">{game.description}</p>
        <div className="flex gap-3">
          <a
            className="btn bg-[#f43098] rounded-[8px]"
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
          >
            Install / Visit
          </a>
          <a
            className="p-2 rounded-[8px]   bg-[#00000049]"
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
          >
            Support Dev
          </a>
        </div>
      </div>
    </div>
  );
}

export default GameDetails
