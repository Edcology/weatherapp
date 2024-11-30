import { TiWeatherWindyCloudy } from "react-icons/ti";

const Aqi = ({weather}) => {
  return (
    <div className="p-4 bg-white rounded-md grid">
        <h2 className='text-gray-500'>Air Quality</h2>
        <TiWeatherWindyCloudy className="size-12 place-self-center" />
        <p className="text-center mt-2 text-2xl">{weather.current.air_quality.pm10}</p>
    </div>
  )
}

export default Aqi