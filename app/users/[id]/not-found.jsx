import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall.</h2>
      <p>We could not find the user you were looking for.</p>
      <p>Go back to all <Link href="/users">Users</Link>.</p>
    </main>
  )
}