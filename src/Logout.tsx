import { useEffect } from "react"

export const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('token')
        window.location.href = '/user/login'
    }, [])
  return (
    <div></div>
  )
}
