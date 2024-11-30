import { WiSunrise, WiSunset } from "react-icons/wi";

const Sun = ({weather}) => {
    const forecast = weather.forecast.forecastday
    const current = weather.current
  return (
    <div className="p-4 bg-white rounded-md grid">
        <h2 className="text-gray-500 mb-2">Sunrise & Sunset</h2>
        <div className="flex gap-8 justify-self-center">
            <p><WiSunrise className="size-12" />{forecast.map(info => info?.date === current?.last_updated.slice(0, 10) ? info.astro.sunrise : "")}</p>
            <p><WiSunset className="size-12" />{forecast.map(info => info?.date === current?.last_updated.slice(0, 10) ? info.astro.sunset : "")}</p>
        </div>
    </div>
  )
}

export default Sun