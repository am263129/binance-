import React from 'react'

export const XLTitle = (props) => {
  const { children, className } = props
  return (
    <p className={`${className} text-4xl font-semibold`}>{children}</p>
  )
}

export const Label = (props) => {
  const { children, className } = props
  return (
    <p className={`${className} text-base text-app-gray-600`}>{children}</p>
  )
}