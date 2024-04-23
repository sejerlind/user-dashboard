import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to the User Dashboard! Here, you can view a list of all the users we have and even add a new user.</p>

      <div className="flex justify-center my-8">
        <Link href="/users">
          <button className="btn-primary">View Users</button>
        </Link>
      </div>
      <div className="flex justify-center my-8">
      <Link href="/users/create">
          <button className="btn-primary">Add User</button>
        </Link>
      </div>
  
    </main>
  )
}
