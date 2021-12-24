import React from 'react'
import LogoImg from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile,
  faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
  return (<div className='rounded-r-xl fixed bg-gray-100 border w-72 min-h-screen px-8 py-6 flex-col flex gap-2'>
    <div className='flex gap-2 justify-center items-center pb-12 flex-col'>
      <img src={LogoImg} alt='app logo' className='w-12 h-12' />
      <label className='font-bold text-app-orange text-2xl'>Marketplace Admin</label>
    </div>
    <div className='flex flex-col shadow-inner bg-gray-200 w-full h-full rounded-lg '>
      <div className='px-6 text-xl font-bold flex flex-col gap-4 py-4'>
        <div className='flex gap-2 items-center text-gray-600 hover:text-app-blue cursor-pointer'>
          <FontAwesomeIcon icon={faFile} />
          Orders
        </div>
        <a href='/' className='flex gap-2 items-center text-gray-600 hover:text-app-blue cursor-pointer'>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log out
        </a>
      </div>
    </div>
  </div>)
}
export default SideBar