import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/Worcester')({
  component: Worcester,
})

export default function Worcester() {
  return (
    <>
      <Link to={"/"}>Back</Link>
      <h1> Worcester </h1>

      <p> Worcester Dining Commons </p>

    </>
  )

}

