import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { TfiGame } from 'react-icons/tfi';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { IoLogOut } from 'react-icons/io5';

const Active = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3  text-bold font-medium smooth ${
        isActive ? '  border-b-2 text-[#ff4800]' : ' hover:text-white'
      }`
    }
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('Signed out');
      navigate('/');
    } catch (e) {
      toast.error(e.message);
    }
  };
  // sticky top-0 z-50 backdrop-blur add
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-100/80  border-b border-base-content/10">
      <div className="container mx-auto flex justify-between px-4 md:px-6 lg:px-8 navbar">
        <Link to="/" className="flex items-center gap-2">
          <TfiGame className="text-4xl text-[#f43098]" />
          <div className="ml-2">
            <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]">
              GameHub
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 mr-4">
          <Active to="/">Home</Active>
          {user && <Active to="/developers">Developers</Active>}
          <Active to="/my-profile">My Profile</Active>
        </nav>

        {!user ? (
          <ul className=" shadow-sm md:hidden text-center">
            <li>
              <Active to="/">Home</Active>
            </li>
            <li className="text-nowrap">
              <Active to="/my-profile">My Profile</Active>
            </li>
          </ul>
        ) : (
          ''
        )}
        {!user ? (
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/login"
              className="btn w-fit bg-gradient-to-br from-[#5653f3] to-[#605dff]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd]"
            >
              Register
            </Link>
          </div>
        ) : (
          <div>
            <div className="dropdown dropdown-end mr-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-[#ff4800]"
              >
                <div className="w-10 rounded-full">
                  <img alt="user avatar" src={user.photoURL} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content flex items-center bg-base-200 rounded-box w-32"
              >
                <li className="w-full">
                  <Active to="/my-profile" className="  font-bold">
                    My Profile
                  </Active>
                </li>
                <li className="w-full">
                  <Active to="/">Home</Active>
                </li>
                <li className="w-full">
                  <Active to="/developers">Developers</Active>
                </li>
              </ul>
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd] rounded-2xl "
            >
              {' '}
              Logout <IoLogOut />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
