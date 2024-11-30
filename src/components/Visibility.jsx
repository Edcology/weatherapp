import { MdOutlineDisabledVisible } from "react-icons/md";

const Visibility = ({weather}) => {
  return (
    <div className="p-6 bg-white rounded-md">
        <h2 className='text-gray-500'>Visibility</h2>
        <MdOutlineDisabledVisible className="place-self-center size-12" />
        <p className="text-2xl text-center mt-2">{weather.current.vis_km}</p>
    </div>
  )
}

export default Visibility