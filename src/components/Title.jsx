import React from 'react'

function Title({children, id}) {
  return (
      <h1
          id={id && id}
          className="text-2xl font-righteous underline decoration-4 mb-4">
          {children}
    </h1>
  )
}

export default Title