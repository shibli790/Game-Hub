import React, { useState } from 'react'
import useTitle from '../hooks/useTitle'
import useAuth from '../hooks/useAuth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export default function UpdateProfile(){
  useTitle('Update Profile')
  const { user, updateUserProfile } = useAuth()
  const [name,setName] = useState(user?.displayName || '')
  const [photoURL,setPhotoURL] = useState(user?.photoURL || '')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await updateUserProfile({ displayName: name, photoURL })
      toast.success('Profile updated')
      navigate('/my-profile')
    } catch(e){
      toast.error(e.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="card bg-gradient-to-br from-[#c4007cb7] to-[#000000]"
      >
        <div className=" flex flex-col mx-auto p-12 gap-4">
          <h2 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]  ">
            Update Profile Info
          </h2>
          <label>
            <span className="py-3">Photo URL</span>
            <input
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              className="input "
            />
          </label>
          <label>
            <span className="">Name</span>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="input "
            />
          </label>
          <button className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd] rounded-2xl mt-3">
            Save Info
          </button>
        </div>
      </form>
    </div>
  );
}
