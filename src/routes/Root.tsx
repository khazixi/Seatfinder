import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Root() {
  const selectRef = useRef<HTMLSelectElement>(null)
  const [getHall, setHall] = useState("")

  return (
    <>
      <h1> Seatfinder </h1>

      <select ref={selectRef} onChange={e => setHall(() => e.target.value)}>
        <option value=""> Please Select a Dining Hall </option>
        <option value='wocester'> Wocester </option>
        <option value='franklin'> Franklin </option>
        <option value='hampsire'> Hampsire </option>
        <option value='berkshire'> Berkshire </option>
      </select>

      <p>
        {
          getHall !== "" ?
            <Link to={"/" + getHall}> {getHall}</Link>
            : ""
        }
      </p>
    </>
  )
}

export default Root
