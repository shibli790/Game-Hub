import React from 'react'
import useAuth from '../hooks/useAuth'
import useTitle from '../hooks/useTitle'
import { Link} from 'react-router'


export default function Profile(){
  useTitle('My Profile')
 

  const { user } = useAuth();



  return (
    <div className="max-w-2xl mx-auto">
      <div className="card bg-gradient-to-br from-[#c4007cb7] to-[#000000]">
        <div className="card-body">
          <div className="md:flex gap-4 items-center">
            <img
              className="md:w-50  rounded-full border-2 mr-8 border-[#ff4800]"
              src={user?.photoURL}
              alt="avatar"
            />
            <div>
              <h1 className=" text-2xl font-bold text-center  mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[#f43098] to-[#a52dbd]">
                {' '}
                PROFILE INFO
              </h1>
              <h2 className="text-2xl mb-3">
                <span>User Name : </span>
                <span className="text-[#f43098]">{user?.displayName}</span>
              </h2>
              <p className="text-1xl">
                User Email :
                <span className="text-[#f43098]"> {user?.email}</span>
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link
              to="/my-profile/update"
              className="btn bg-gradient-to-br from-[#f43098] to-[#a52dbd] rounded-2xl"
            >
              Update Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
