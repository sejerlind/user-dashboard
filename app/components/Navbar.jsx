import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>User Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}