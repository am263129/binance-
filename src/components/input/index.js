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
  const { className, title, value, setValue, type, send, target } = props
  let timer
  const [status, setStatus] = useState(0) //0 get code 1:sent, 2:resned, 3:error valid
  const [statusMsg, setStatusMsg] = useState(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
  useEffect(() => {
    if (value.length != 6) {
      setStatus(3)
      if (value.length === 0) {
        setStatusMsg("Enter validation code.")
      }
      else {
        setStatusMsg("Please enter a 6-digit verification code.")
      }
    }
    else {
      setStatusMsg(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
    }
  }, [value])
  const handleSend = () => {
    if (timer !== undefined)
      clearTimeout(timer);
    setStatus(1)
    send()
    timer = setTimeout(() => {
      setStatus(2)
    }, 60000);
  }
  useEffect(() => {
    setStatus(0)
    setStatusMsg(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
  }, [])
  return (
    <div className={`${className}`}>
      <p className='text-sm text-app-gray-600 leading-8'>{title}</p>
      <div className={`flex border ${status === 3 && value.length !== 6 ? 'border-red-600' : 'hover:border-app-yellow'} rounded-md px-3 justify-between items-center h-12`}>
        <input value={value} onChange={(e) => setValue(e.target.validity.valid ? e.target.value : value)} type="text" pattern="[0-9]*" className='outline-none w-1/2' />
        <p className={`${status !== 1 && "hidden"} flex text-sm text-app-gray-200 gap-2`} data-tooltip-target="tooltip-default">Verification code sent <SvgInfo /></p>
        <div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button className={`${status === 1 && "hidden"} text-sm text-app-yellow-dark font-medium`} onClick={handleSend}>{status === 0 ? "Get Code" : "Resend Code"}</button>
      </div>
      <div className='flex flex-col mt-1 mb-5 text-xs'>
        <p className={`${status === 3 && value.length !== 6 ? "text-red-600" : "text-app-gray-200"}  `}>{statusMsg}<a className={`${type !== "phone" && "hidden"} text-app-yellow-dark`}>Voice SMS</a></p>
        <a className={`text-app-yellow-dark ${status !== 2 && "hidden"}`} href='https://accounts.binance.com/en/confirm-new-device?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4%3D&userType=newYubikey#'>Not receiving code?</a>
      </div>
    </div>
  )
}

VerifyInput.propTypes = {
  send: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  target: PropTypes.string
}

VerifyInput.defaultProps = {
  send: () => { },
  type: "email",
  target: "vam***@veb65.com",
}