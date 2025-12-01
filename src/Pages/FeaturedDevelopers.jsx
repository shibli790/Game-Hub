import React from 'react';


const FeaturedDevelopers = () => {
  const developers = [
    {
      id: 1,
      name: 'Alex Carter',
      role: 'Game Designer',
      games: 12,
      avatar: 'https://i.ibb.co/wr3zFGyd/20210608-Kim-Do-hoon.png',
    },
    {
      id: 2,
      name: 'Mina Lee',
      role: '3D Artist',
      games: 8,
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 3,
      name: 'Rudra Patel',
      role: 'Game Developer',
      games: 15,
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Featured <span className="text-pink-500">Developers</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developers.map(dev => (
          <div
            key={dev.id}
            className="bg-[#16171b] p-6 rounded-xl text-center shadow-lg hover:shadow-pink-500/20 transition"
          >
            <img
              src={dev.avatar}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-500"
            />
            <h3 className="text-xl font-semibold">{dev.name}</h3>
            <p className="opacity-70">{dev.role}</p>
            <p className="mt-2 text-sm opacity-80">{dev.games} games created</p>

            <button className="mt-4 bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;