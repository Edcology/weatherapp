

const ForecastCard = ({info, dayOfWeek}) => {
  return (
        <li className="p-4 bg-white rounded-xl">
            <p className="text-center">{dayOfWeek(info.date)}</p>
            <img src={info.day?.condition?.icon} alt="weather icon" />
            <div className="flex gap-2 font-medium text-xs">
                <p>{info.day?.maxtemp_c}</p>
                <p className="text-gray-500">{info.day?.mintemp_c}</p>
            </div>
        </li>
  )
}

export default ForecastCard