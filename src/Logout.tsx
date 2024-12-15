import { useEffect } from "react"
import React from "react"

export const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        window.location.href = '/login-option'
    }, [])
  return (
    <div></div>
  )
}
