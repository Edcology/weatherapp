import { TbUvIndex } from "react-icons/tb";

const Uv = ({weather}) => {

  return (
    <div className="p-4 bg-white rounded-md grid">
        <h2 className='text-gray-500'>UV Index</h2>
        <TbUvIndex className="size-12 place-self-center" />
        <p className="text-center mt-2 text-2xl">{weather.current.uv}</p>
    </div>
  )
}

export default Uv