import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

export default function Login() {
  useTitle('Login');
  const { signIn, googleLogin, setPrefillEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Login email handle
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password); 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Welcome back!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (e) {
      console.log(e);
      
      toast.error("invalid  Account ");
    } finally {
      setLoading(false);
    }
  };

  // Google login handle
  const handleGoogle = async () => {
    setLoading(true);
    try {
      await googleLogin();
      // toast.success('Logged in with Google');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged in with Google success',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleLogin}
        className=" rounded-2xl bg-gradient-to-br from-[#000000] to-[#c4007cb7] "
      >
        <div className="flex flex-col gap-2 p-12">
          <h2 className="text-3xl text-[#5552ff] font-bold text-center">
            LogIn
          </h2>

          <label>
            <span className="label-text">Email</span> <br />
            <input
              type="email"
              className="input w-full "
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <span className="label-text">Password</span>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                className="input  w-full pr-10"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-ghost btn-xs absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <div className="text-sm mt-1">
            <Link
              to="/forgot"
              state={{ email }}
              onClick={() => setPrefillEmail(email)}
              className="link text-[#5552ff]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            disabled={loading}
            className=" p-2 rounded-xl bg-gradient-to-br from-[#5653f3] to-[#605dff] mt-2"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-white/30"></div>
            <span className="text-sm text-white/70">or</span>
            <div className="h-px w-16 bg-white/30"></div>
          </div>
          <button
            type="button"
            onClick={handleGoogle}
            className="p-2 rounded-xl flex items-center justify-center gap-2 bg-white text-[#000000]"
          >
            <FcGoogle className="text-xl" /> Continue with Google
          </button>

          <p className=" text-center text-sm">
            Don't have an account?
            <Link to="/register" className="link text-[#f43098] ">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
