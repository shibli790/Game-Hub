import React from 'react';

const ChoiseUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-6 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Why Choose <span className="text-pink-500">GameHub?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#16171b] p-8 rounded-xl shadow-xl hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]">
              Massive Game Library
            </h3>
            <p className="opacity-75">
              Explore thousands of games with detailed descriptions, reviews and
              developer info.
            </p>
          </div>

          <div className="bg-[#16171b] p-8 rounded-xl shadow-xl hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]">
              Trusted Ratings
            </h3>
            <p className="opacity-75">
              All ratings are verified and community-driven to help you pick the
              best game.
            </p>
          </div>

          <div className="bg-[#16171b] p-8 rounded-xl shadow-xl hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]">
              Developer Friendly
            </h3>
            <p className="opacity-75">
              GameHub helps developers showcase their games, connect with
              players, and grow faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiseUs;