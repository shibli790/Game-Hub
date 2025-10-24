import React from 'react';
import { Link } from 'react-router';
import { TfiGame } from 'react-icons/tfi';
export default function Footer() {
  return (
    <section className="bg-[#0007]">
      <footer className="footer sm:footer-horizontal container mx-auto text-white p-10 border-b-2 border-slate-400">
        <aside className="grid-flow-col r flex flex-col items-start ml-5">
          <TfiGame className="text-6xl text-[#f43098]" />
          <p className="text-lg font-semibold">
            Game_Hub
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">GameHub</h6>
          <Link to={'/'}>Home</Link>
          <Link to="/my-profile">My Profile</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Game</a>
          <a className="link link-hover">Apps</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
}
