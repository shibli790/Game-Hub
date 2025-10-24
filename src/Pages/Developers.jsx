import React, { useEffect, useMemo, useState } from 'react'
import useTitle from '../hooks/useTitle'
import { fetchGames } from '../hooks/api'
export default function Developers(){
  useTitle('Developers')
  const [games, setGames] = useState([]);
  const popular = useMemo(
    () =>
      [...games]
        .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        .slice(0, 3),
    [games]
  );

  useEffect(() => {
    fetchGames().then(setGames).catch(console.error);
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">Developer Spotlight</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map(d => (
          <div key={d.id} className="card bg-base-200">
            <div className="p-6 flex flex-col gap-3">
              <figure className="aspect-video overflow-hidden">
                <img
                  src={d.coverPhoto}
                  alt={d.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <h3 className="text-[#ffffff]">
                {' '}
                <span className="font-bold text-[#f43098]">
                  Developer Name :
                </span>{' '}
                {d.developer}
              </h3>
              <p className=" ">
                <span className="font-bold h-5 w-5 text-[#f43098]">
                  Developer Bio :{' '}
                </span>
                {d.description}
              </p>
              <div className=" flex justify-center items-center">
                <a
                  className="p-2 rounded-[8px]   bg-gradient-to-r from-[#12151a] via-[#1a1e24] to-[#2c3038]"
                  href={d.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Support Dev
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
