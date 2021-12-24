import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
import { Input } from '../../components/input';
import LogoImg from '../../assets/images/logo.png'

const SignInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const confirm = () => {
    if (!progress) {
      setProgress(true)
    }
    else
      navigate("/dashboard")
  }

  const [progress, setProgress] = useState(false)

  return (
    <div className='h-screen w-screen bg-gray-100 flex'>
      <div className='rounded-lg gap-4 border bg-white flex flex-col w-400 mx-auto p-6 mt-52 mb-auto'>
        <div className='flex gap-4 justify-center items-center pb-12'>
          <img src={LogoImg} alt='app logo' className='w-10 h-10'/>
          <label className='font-bold text-app-orange text-2xl'>Marketplace Admin</label>
        </div>
        <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
        <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
        <button className='rounded-full py-2 w-full text-white font-bold bg-blue-400 hover:bg-blue-300 flex items-center justify-center' type="button" onClick={confirm}>
          <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${progress?"block":"hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {progress?"Logging in":"Log in"}</button>

      </div>
    </div>
  )
}

export default SignInPage