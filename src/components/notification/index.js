import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,
   } from '@fortawesome/free-solid-svg-icons'

const Notification = (props) => {
  const { children, type } = props
  return (
    <div className='bg-white rounded-md shadow-lg flex w-82 px-4 py-6 gap-4'>
      <div className='rounded-full w-4 h-4 bg-app-green flex items-center justify-center mt-1'>
        <FontAwesomeIcon icon={faCheck} className='text-white w-2.5 h-2.5'/>
      </div>
      <p className='text-app-gray-600 text-md font-semibold'>{children}</p>
    </div>
  )
}


export default Notification