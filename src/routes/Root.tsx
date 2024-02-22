import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// import '../App.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Seatfinder </h1>

      <select>
        <option> Wocester </option>
        <option> Franklin </option>
        <option> Hampsire </option>
        <option> Berkshire </option>
      </select>
    </>
  )
}

export default Root
