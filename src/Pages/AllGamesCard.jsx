import React, { useEffect, useMemo, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { fetchGames } from '../hooks/api';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const AllGamesCard = () => {
  useTitle('Home');
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sorting and filtering games by title and category
  const filteredGames = useMemo(
    () =>
      [...games].filter(
        game =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedCategory ? game.category === selectedCategory : true)
      ),
    [games, searchQuery, selectedCategory]
  );

  useEffect(() => {
    fetchGames().then(setGames).catch(console.error);
  }, []);

  // Get unique categories from the games
  const categories = useMemo(() => {
    const uniqueCategories = new Set(games.map(game => game.category));
    return [...uniqueCategories];
  }, [games]);

  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 text-center">
        All <span className="text-pink-500">Games</span>
      </h2>

      {/* Search and filter controls */}
      <div className="flex justify-between gap-16 items-center mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="px-4 py-2 border w-full rounded-2xl  border-[#f43098] "
        />
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-xl font-medium">
            Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="px-4 py-2  border border-[#f43098] rounded-2xl text-[#f43098] "
          >
            <option
              value=""
              className=" rounded-2xl text-[#f43098] font-semibold"
            >
              All
            </option>
            {categories.map(category => (
              <option
                className="rounded-2xl  hover:bg-pink-500 text-[#f43098] font-semibold "
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display filtered games */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map(g => (
          <Link to={`/games/${g.id}`} key={g.id}>
            <motion.div
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
              <div className="p-5">
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
