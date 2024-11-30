import { useState } from "react"


const getLocation = ({setLocation}) => {

    const [error, setError] = useState("")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            setError("")
        }
        (error) => {
            setError(error.message)
        }
    )
  } else {
    setError("Geolocation is not supported by this browser")
  }
}

export default getLocation