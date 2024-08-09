import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px14 pb-36">
        <div className="max-w-screen-2xl mx-auto">
          Header Component 
        </div>
    </header>
  )
}

export default Header