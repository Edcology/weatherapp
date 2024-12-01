import Aqi from "./Aqi"
import Humidity from "./Humidity"
import Sun from "./Sun"
import Uv from "./Uv"
import Visibility from "./Visibility"
import Wind from "./Wind"


const Highlight = ({weather}) => {
  return (
    <div className="mt-6">
        <h2 className="mb-4 font-medium text-2xl">Today's Highlights</h2>
        <div className="grid grid-rows-1 md:grid-rows-2 md:grid-cols-3 gap-4">
            <Uv weather={weather} />
            <Wind weather={weather} />
            <Sun weather={weather} />
            <Humidity weather={weather} />
            <Visibility weather={weather} />
            <Aqi weather={weather} />
        </div>
    </div>
  )
}

export default Highlight