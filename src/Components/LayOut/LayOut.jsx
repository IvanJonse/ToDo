import React from "react";

const LayOut = ({children}) => {
    return (
        <div className='bg-gray-900 h-screen'>
            { children }
        </div>
    )
}

export default LayOut