import { IoSearchSharp } from "react-icons/io5";
import { PiMapPinAreaThin } from "react-icons/pi";
import { WiDegrees } from "react-icons/wi";
import sunny from '../assets/sunny.png'
import { useEffect, useRef, useState } from "react";
import Search from "./Search";

const Weather = ({weather, setCity, setChange, change}) => {
    const [text, setText] = useState("")
    const [searchResult, setSearchResult] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const date = new Date(weather.location.localtime)
    const searchBoxRef = useRef(null)
    const dayOfWeek = () => {
        const dayShort = new Intl.DateTimeFormat("en-us", { weekday: "long" }).format(date)
        return dayShort
    }

    const handleKeyDown = (e) => {
        e.key === "Enter" ? handleSubmit(e) : null

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCity(text)
        setText("")
        setShowResults(false)
    }

    useEffect(() => {
        const getSearchResult = async () => {
            try {
                const result = await Search(text)
                setSearchResult(result)
                console.log(result);
            } catch(err) {
                console.error(err);
                
            }
        }
        getSearchResult()
        console.log(searchResult);
        
    }, [text])

    useEffect(() => {
        const handleClickOutSide = (e) => {
            !searchBoxRef.current?.contains(e.target) && setShowResults(false)
        }

        document.addEventListener("mousedown", handleClickOutSide)

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [])
  return (
    <div className="grid place-content-center">
        <div className="md:w-[300px] w-[350px] mt-12 md:mt-0 px-8 py-8 bg-white rounded-3xl">
        <form className="flex relative w-4/5 justify-center">
            <IoSearchSharp className="absolute inset-2" />
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value)
                setShowResults(true)
            }} placeholder="Search for places ..." 
            onKeyDown={handleKeyDown} className="rounded-lg focus:outline-none py-1 ps-12 border mb-3" />
            <PiMapPinAreaThin onClick={() => setChange(!change)} className="absolute -right-14 top-2 cursor-pointer" />
                {
                    searchResult?.length && showResults ?
                    (
                        <ul ref={searchBoxRef} className="absolute bg-white top-9 w-full text-xs backdrop-blur-md border px-6 py-2 divide-y divide-gray-300">
                            {searchResult.map(res =>
                                <li onClick={handleSubmit} key={res.id} className="mb-1 cursor-pointer">{res.name}</li>
                            )}
                        </ul>
                    ) :
                    ( showResults && text &&(
                        <p className="absolute bg-white top-9 w-full backdrop-blur-md border px-6 py-2">No match...</p>
                    ))
                }

        </form>
        <img src={sunny} className="size-48" alt="" />
        <div className="flex relative p-4 mb-3">
            <h1 className="text-7xl">{weather.current.temp_c}<WiDegrees className="size-32 absolute top-1 right-7" />
            <span className="absolute text-5xl right-12 top-6">C</span>
            </h1>
        </div>
        <h2 className="font-medium mb-3">{dayOfWeek(date)}, <span className="text-gray-400">{date.toLocaleTimeString()}</span></h2>
        <hr />
        <div className="mt-3">
            <h2>Rain - {weather.forecast.forecastday[0].day.daily_chance_of_rain} %</h2>
        </div>
        <div className="p-6 bg-back rounded-lg mt-3 flex gap-2">
            <p className="text-sm text-white">{weather.location.name},</p>
            <p className="text-sm text-white">{weather.location.country}</p>
        </div>
    </div>
    </div>
  )
}

export default Weather