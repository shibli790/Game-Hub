import React, { useEffect, useMemo, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { fetchGames } from '../hooks/api';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const AllGamesCard = () => {
   useTitle('Home')
    const [games,setGames] = useState([])
    const popular = useMemo(()=>[...games].sort((a,b)=>parseFloat(b.ratings)-parseFloat(a.ratings)), [games])
  
    useEffect(()=>{
      fetchGames().then(setGames).catch(console.error)
    }, [])
  
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 text-center">
        All <span className="text-pink-500">Games</span>
      </h2>
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {popular.map(g => (
          <Link to={`/games/${g.id}`}>
            <motion.div
              key={g.coverPhoto}
              whileHover={{ scale: 1.02 }}
              className="card gap-2 bg-[#16171b] shadow-lg shadow-[#862351] card-hover smooth"
            >
              <figure className="aspect-video overflow-hidden">
                <img
                  src={g.coverPhoto}
                  alt={g.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-5 ">
                <h4 className="flex items-center text-2xl gap-2 font-bold mb-2">
                  {g.title}
                  <div className="text-[13px] text-[#ffffffc7] font-light px-[5px] rounded-2xl bg-gradient-to-br from-[#5653f3] to-[#605dff]">
                    {g.category}
                  </div>
                </h4>
                <p className="opacity-80 line-clamp-2 mb-3">{g.description}</p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className="flex gap-1 items-center bg-[#00d3bb] px-[5px] rounded-2xl text-[15px]">
                    <FaStar className="text-yellow-300 text-[13px]" />
                    {g.ratings}
                  </div>
                  <Link
                    to={`/games/${g.id}`}
                    className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllGamesCard;