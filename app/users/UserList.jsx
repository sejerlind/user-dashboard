import Link from "next/link"
import Image from 'next/image'



export default async function UserList({query, currentPage}) {
  const allUsers = await getData()
  async function getData() {
    const res = await fetch(`https://dummyjson.com/users/search?q=${query}&limit=10&skip=${currentPage}`, {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
      
    })
    return res.json()
  }
  return (
    <>
    
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {allUsers.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id} className="card cards text-center">
          <Image
            loading="lazy"
            src={user.image}
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
            className="m-auto"
          />
            <p className="font-bold">{user.firstName} {user.lastName}</p>
            <ul>
              <li>{user.company.title}</li>
              <li>{user.company.department} department</li>
            </ul>
          </Link>
      ))}
    </section>
    {allUsers.users.length === 0 && (
        <p className=" p-5 text-center">No users found 😭</p>
      )}
    </>
  )
}
