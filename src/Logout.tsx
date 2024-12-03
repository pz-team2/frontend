import { useEffect } from "react"

export const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.href = '/page'
    }, [])
  return (
    <div></div>
  )
}
