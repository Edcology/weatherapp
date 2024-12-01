import ForecastCard from "./ForecastCard"

const Forecast = ({weather}) => {
    const infos = weather.forecast.forecastday
    const dayOfWeek = (obj) => {
        const date = new Date(obj)
        const dayShort = new Intl.DateTimeFormat("en-us", { weekday: "short" }).format(date)
        return dayShort
    }
  return (
        <ul className="grid grid-cols-4 md:flex gap-4">
            {infos.map(info => 
                <ForecastCard key={info.date} info={info} dayOfWeek={dayOfWeek} />
            )}
        </ul>
  )
}

export default Forecast