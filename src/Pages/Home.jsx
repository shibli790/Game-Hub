import React, { useEffect, useState, useMemo } from 'react'
import useTitle from '../hooks/useTitle'
import { fetchGames } from '../hooks/api'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Newsletter from './Newsletter'

import { FaStar } from 'react-icons/fa';
import ChoiseUs from './ChoiseUs'
import FeaturedDevelopers from './FeaturedDevelopers'


const Home = () => {
  useTitle('Home')
  const [games,setGames] = useState([])
  const popular = useMemo(()=>[...games].sort((a,b)=>parseFloat(b.ratings)-parseFloat(a.ratings)).slice(0,4), [games])

  useEffect(()=>{
    fetchGames().then(setGames).catch(console.error)
  }, [])

  return (
    <div className="space-y-10">
      {/* Banner Slider */}
      <section className="rounded-2xl overflow-hidden neon-edge">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination
          autoplay={{ delay: 3000 }}
        >
          {popular.map(i => (
            <SwiperSlide key={i.coverPhoto}>
              <div
                className="h-[360px] md:h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${i.coverPhoto})`,
                }}
              >
                <div className="h-full w-full bg-gradient-to-t from-base-100/90 to-transparent p-8 flex items-end">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                      {i.title}
                    </h2>
                    <p className="opacity-80 mt-2">{i.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Games */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Popular <span className="text-pink-500">Games</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="opacity-80 line-clamp-2 mb-3">
                    {g.description}
                  </p>
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
        <div className="flex justify-center">
          <Link
            to="/allgamescard"
            className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd]"
          >
            See More
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <FeaturedDevelopers />
      <Newsletter />
      <ChoiseUs />
    </div>
  );
}

export default Home
