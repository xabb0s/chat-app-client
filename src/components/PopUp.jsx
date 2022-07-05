import { useEffect } from "react"
import { useState } from "react"

function PopUp( { name } ) {

    const [ show, setShow ] = useState(false)

    const handleShow = () => {
      setShow(!show)
    };
    return(
    <div className={`${show ? "hidden" : "flex"} flex container w-screen h-50 rounded-xl absolute z-50 bg-slate-400 p-10 justify-center items-center flex flex-col`}>
      <input className="w-full p-3 rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 mb-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Nickname..." />
      <button onClick={() => handleShow()} className="btn w-full btn-blue rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4">Submit</button>
    </div>
  )
  
}

export default PopUp