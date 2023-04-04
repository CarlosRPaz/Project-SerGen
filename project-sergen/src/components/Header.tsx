import React from 'react'

function Header() {
  return (
    <div>
        <h1>Header</h1>
        <p>{import.meta.env.VITE_API_URL}</p>
    </div>
  )
}

export default Header