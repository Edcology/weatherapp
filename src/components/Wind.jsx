import { FaWind } from "react-icons/fa";

const Wind = ({weather}) => {
  return (
    <div className="p-4 bg-white rounded-md grid">
        <h2 className='text-gray-500'>Wind Status</h2>
        <FaWind className="place-self-center size-12" />
        <p className="text-center mt-2 text-2xl mt-2">{weather?.current?.wind_kph}km/h</p>
    </div>
  )
}

export default Wind