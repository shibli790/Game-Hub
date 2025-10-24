import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';

function isValidPassword(pw) {
  const hasUpper = /[A-Z]/.test(pw);
  const hasLower = /[a-z]/.test(pw);
  const longEnough = pw.length >= 6;
  return hasUpper && hasLower && longEnough;
}

export default function Register() {
  useTitle('Register');
  const { createUser, updateUserProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      toast.error(
        'Password must have uppercase, lowercase, and be at least 6 characters.'
      );
      return;
    }
    setLoading(true);
    try {
      await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL: photoURL });
      toast.success('Account created!');
      navigate('/');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleRegister}
        className=" rounded-2xl bg-gradient-to-br from-[#000000] to-[#c4007cb7]"
      >
        <div className="flex flex-col gap-2 p-12">
          <h2 className="text-3xl text-[#5552ff] font-bold text-center">
            Create account
          </h2>

          <label>
            <span className="label-text">Name</span> <br />
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="input w-full"
              required
            />
          </label>

          <label>
            <span className="label-text">Email</span> <br />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input w-full"
              required
            />
          </label>

          <label>
            <span className="label-text">Photo URL</span> <br />
            <input
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              className="input w-full"
            />
          </label>

          <label>
            <span className="label-text">Password</span> <br />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="input w-full"
              required
            />
          </label>

          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-white/30"></div>
            <span className="text-sm text-white/70">or</span>
            <div className="h-px w-16 bg-white/30"></div>
          </div>

          <button
            disabled={loading}
            className="p-2 rounded-xl bg-gradient-to-br from-[#5653f3] to-[#605dff] mt-2"
          >
            {loading ? 'Creating...' : 'Register'}
          </button>
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="link text-[#f43098]">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
