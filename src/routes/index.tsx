import { useRef, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Root
})

function Root() {
  const selectRef = useRef<HTMLSelectElement>(null)
  const [getHall, setHall] = useState("")

  return (
    <>
      <h1> Seatfinder </h1>

      <select ref={selectRef} onChange={e => setHall(() => e.target.value)}>
        <option value=""> Please Select a Dining Hall </option>
        <option value='worcester'> Worcester </option>
        <option value='franklin'> Franklin </option>
        <option value='hampshire'> Hampshire </option>
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
