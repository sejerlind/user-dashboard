import { Suspense } from "react"
import UserList from "./UserList"
import Loading from "../loading"
import Link from "next/link"
import Search from "../components/Search"


export default function Tickets({ searchParams
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.skip) || 0;
  return (
    <main>
      <nav>
        <div>
          <h2>Users</h2>
          <p><small>All users.</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New User +</button>
        </Link>
      </nav>
      <Search  placeholder="Search users..." />
      <Suspense fallback={<Loading />}>
        <UserList currentPage={currentPage} query={query}/>
      </Suspense>
    </main>
  )
}