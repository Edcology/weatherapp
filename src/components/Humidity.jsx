import { WiHumidity } from "react-icons/wi";

const Humidity = ({weather}) => {
  return (
    <div className="p-4 grid bg-white rounded-md">
        <h2 className='text-gray-500'>Humidity</h2>
        <WiHumidity className="size-12 place-self-center" />
        <p className="text-2xl text-center mt-2">{weather.current.humidity}%</p>
    </div>
  )
}

export default Humidity