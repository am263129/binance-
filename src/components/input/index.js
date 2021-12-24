import React from 'react'

export const Input = (props) =>{
  const {value, setValue, type, placeholder, className} = props
  return(
    <input className={`outline-none rounded-full px-4 py-2 border ${className}`} type={type} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} />
  )
}
