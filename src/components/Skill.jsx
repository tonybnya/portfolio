import React from 'react'

const Skill = ({ svg, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-20 h-20 p-2 flex justify-center items-center">
            {svg}
        </div>
        <p className='text-white font-righteous'>{title}</p>
    </div>
  )
}

export default Skill;