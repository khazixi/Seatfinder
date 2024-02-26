import { Link, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/Berkshire')({
  component: Berkshire,
})

function Berkshire() {
  return (
    <>
      <Link to="/"> Back </Link>
      <h1> Berkshire </h1>

      <p> Berkshire Dining Commons </p>
    </>
  )
}

