import { Link, useSearchParams } from "react-router-dom";
import Vite from "/hampsire.svg"

function Marker({ coordinate }: { coordinate: URLSearchParams }) {
  if (coordinate.get('x') === null) return ""
  else if (coordinate.get('y') === null) return ""

  const position = {
    position: 'absolute',
    left: `${coordinate.get('x')}px`,
    top: `${coordinate.get('y')}px`,
    height: '50px',
    width: '50px',
    'border-radius': '100%',
    backgroundColor: 'blue'
  }

  return (
    <div style={position}></div>
  )
}

export default function Hampshire() {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <Link to="/"> Back</Link>
      <h1> Hampshire </h1>

      <p> Hampshire Dining Commons </p>

      <img src={Vite} onClick={e => {
        const params = new URLSearchParams()
        params.set('x', e.clientX.toString())
        params.set('y', e.clientY.toString())
        setSearchParams(params)

      }}/>

      <Marker coordinate={searchParams} />
    </>
  )
}

