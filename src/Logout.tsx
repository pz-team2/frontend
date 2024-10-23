import { useEffect } from "react"

export const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }, [])
  return (
    <div>Logout</div>
  )
}
