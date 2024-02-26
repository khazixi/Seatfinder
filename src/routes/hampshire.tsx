import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import Vite from "/hampsire.svg"
import { number, object, optional, parse } from 'valibot'

const coordinateSchema = object({
  x: optional(number()),
  y: optional(number())
})

export const Route = createFileRoute('/hampshire')({
  component: Hampshire,
  validateSearch: (search) => parse(coordinateSchema, search)

})

function Marker({ x, y }: { x?: number, y?: number }) {
  if (x == null) return ""
  else if (y == null) return ""


  const position: Record<string, string> = {
    position: 'absolute',
    left: `${x - 25}px`,
    top: `${y - 25}px`,
    height: '50px',
    width: '50px',
    'border-radius': '100%',
    backgroundColor: 'blue'
  }

  return (
    <div style={position}></div>
  )
}

function Hampshire() {

  const coordinate = Route.useSearch()

  const navigate = useNavigate({ from: Route.fullPath })

  return (
    <>
      <Link to="/"> Back</Link>
      <h1> Hampshire </h1>

      <p> Hampshire Dining Commons </p>

      <img src={Vite} onClick={e => {
        navigate({
          search: () => ({ x: e.clientX, y: e.clientY })
        })
      }} />

      <Marker x={coordinate.x} y={coordinate.y} />

    </>
  )
}

