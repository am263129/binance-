import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SvgInfo } from '../svg'

export const Input = (props) => {
  const { value, setValue, type, placeholder, className, email } = props
  return (
    <input className={`outline-none rounded-full px-4 py-2 border ${className}`} type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export const VerifyInput = (props) => {
  const { className, title, value, setValue, type, send, email } = props
  const [status, setStatus] = useState(0) //0 get code 1:sent, 2:resned, 3:error valid
  const [statusMsg, setStatusMsg] = useState("Enter the 6-digit code sent to " + email)
  useEffect(()=>{
    if(value.length!=6){
      setStatus(3)
      setStatusMsg("Please enter a 6-digit verification code.")
    }
    else{
      
      setStatusMsg("Enter the 6-digit code sent to " + email)
    }
  },[value])
  const handleSend = () => {
    setStatus(1)
    send()
  }
  useEffect(()=>{
    setStatus(0)
    setStatusMsg("Enter the 6-digit code sent to " + email)
  },[])
  return (
    <div className={`${className}`}>
      <p className='text-sm text-app-gray-600 leading-8'>{title}</p>
      <div className={`flex border ${status === 3 && value.length !== 6 ? 'border-red-600':'hover:border-app-yellow'} rounded-md px-3 justify-between items-center h-12`}>
        <input value={value} onChange={(e) => setValue(e.target.validity.valid?e.target.value:value)} type="text" pattern="[0-9]*" className='outline-none w-1/2'/>
        <p className={`${status !== 1 && "hidden"} flex text-sm text-app-gray-200 gap-2`}>Verification code sent <SvgInfo /></p>
        <button className={`${status === 1 && "hidden"} text-sm text-app-yellow-dark font-medium`} onClick={handleSend}>{status === 0 ? "Get Code" : "Resend Code"}</button>
      </div>
      <p className={`${status === 3 && value.length !== 6 ?"text-red-600":"text-app-gray-200"} text-xs mt-1 mb-5`}>{statusMsg}</p>
    </div>
  )
}

VerifyInput.propTypes={
  send:PropTypes.func,
  className:PropTypes.string,
  title:PropTypes.string,
  value:PropTypes.any,
  type:PropTypes.string,
  email:PropTypes.string
}

VerifyInput.defaultProps ={
  send:()=>{},
  type:"text",
  email:"vam***@veb65.com"
}