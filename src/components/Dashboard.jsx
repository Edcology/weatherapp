import Forecast from "./Forecast"
import Highlight from "./Highlight"

const Dashboard = ({weather}) => {
  return (
    <div className="p-6 justify-center">
        <h1 className="mb-1 font-medium text-2xl">Week</h1>
        <Forecast weather={weather} />
        <Highlight weather={weather} />
    </div>
  )
}

export default Dashboard