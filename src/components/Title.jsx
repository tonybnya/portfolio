import React from 'react'

const Title = ({children, id}) => {
  return (
      <h1
          id={id && id}
          className="text-3xl font-righteous underline decoration-4 mb-4 max-sm:text-xl text-center tracking-wider">
          {children}
    </h1>
  )
}

export default Title