import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import useTitle from '../../hooks/useTitle'

export default function Forgot(){
  useTitle('Forgot Password')
  const { resetPassword} = useAuth()
  const location = useLocation()
  const [email,setEmail] = useState(location.state?.email || '')

  useEffect(()=>{
    if(location.state?.email) setEmail(location.state.email)
  }, [location.state])

  const handleReset = async (e) => {
    e.preventDefault()
    try{
      await resetPassword(email)
      toast.success('Reset link sent to email. Redirecting to Gmail...')
      window.location.href = 'https://mail.google.com'
    } catch(e){
      toast.error(e.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleReset}
        className="card bg-gradient-to-br from-[#c4007cb7] to-[#000000]"
      >
        <div className=" flex flex-col mx-auto p-12 gap-4">
          <h2 className="font-bold text-center text-[#f43098] ">
            Forgot Password
          </h2>
          <label className="form-control">
            <span className="mb-3"> Email</span>
            <input
              type="email"
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <button className="btn bg-[#f43098] rounded-2xl mt-3">
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
}
