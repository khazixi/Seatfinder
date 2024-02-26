import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/Franklin')({
  component: Franklin,
})

export default function Franklin() {
  return (
    <>
      <Link to="/"> Back </Link>
      <h1> Franklin </h1>

      <p> Franklin Dining Commons </p>
    </>
  )

}

