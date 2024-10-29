import React from 'react';


const PointCard = ({data}) => {
  return (
    <div className='flex justify-center items-center bg-white gap-3 rounded-md px-6 py-5 shadow-sm'>
        <div className="bg-red-600 py-2 rounded-full flex justify-center z-20 items-center relative px-2">
            <div 
              className='rounded-md rotate-12 w-full h-full z-[-100] top-0 left-0 bg-red-600 opacity-20 absolute '
            />
            {data.icon}
        </div>
        <div className="text-slate-600">
            {data.title}
        </div>
    </div>
  )
}

export default PointCard