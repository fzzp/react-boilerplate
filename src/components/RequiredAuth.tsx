import React from 'react'

type RequiredAuthProps = {
  children: React.ReactNode
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default RequiredAuth