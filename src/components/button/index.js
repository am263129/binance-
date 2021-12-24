import React from 'react'

export const StandardButton = (props) =>{
  const {children, className, disabled, onClick,} = props
  return(
    <button className={`${className} rounded-md ${disabled?"bg-app-yellow-light text-gray-300":"bg-app-yellow text-app-gray-600"} py-3 px-6`} disabled={disabled && "true"}>{children}</button>
  )
}