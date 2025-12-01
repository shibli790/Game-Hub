import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className="rounded-2xl p-8 md:p-10 bg-neutral/40 border border-primary/20 shadow-xl shadow-[#862351] card-hover smooth ">
        <h3 className="text-2xl  md:text-3xl text-center font-bold mb-3">
          Subscribe Newsletters
        </h3>
        <p className="opacity-80 mb-5 text-center">
          News Updates And Dev-Spotlights—No Spam You will never miss our
          Updates, latest news etc. <br /> Our newsletter is once a week, every
          Thursday .
        </p>

        <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            id="email"
            type="email"
            required
            placeholder="user@yoursite.com"
            className="h-12 flex-1 rounded-full border border-white/60 bg-white/80 px-5 text-slate-800 placeholder-slate-500 shadow-inner outline-none"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-gradient-to-br from-[#f43098] to-[#a52dbd] px-6 text-base font-semibold text-white shadow-lg hover:shadow-xl "
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;