import React from 'react'

export default function InfoCard(props) {
  return (
  <div className='text-slate-800  w-full h-fit  p-4 rounded-3xl bg-opacity-70  bg-slate-100'>
    <div className='text-2xl font-semibold'>
      {props.title}
    </div>
    <div className='text-lg '> 
      {props.description}
    </div>
  </div>
  )
}
