import React from 'react'
import "./Spinner.css"
const Spinner = () => {
    return (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
            <div className='spinner text-center font-bold text-3xl'>Loading...</div>
        </div>
    )
}

export default Spinner