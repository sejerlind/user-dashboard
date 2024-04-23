import { notFound } from "next/navigation"
import Image from 'next/image'
// import UserMap from "../../components/Map"

export const dynamicParams = true // default val = true

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    next: {
      revalidate: 60
    }
  })
  if (!res.ok) {
    notFound()

  }

  return res.json()
}


export default async function TicketDetails({ params }) {
  const user = await getData(params.id)
  
  return (
    <main>
      <nav>
        <h2>User Details</h2>
      </nav>
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-2">
        {user.image && (
          <Image
          loading="lazy"
            src={user.image}
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt="Picture of the users"
          />
        )}
        <div>
          <p>{user.firstName} {user.lastName} (former: {user.maidenName}) is a {user.age} years old {user.gender} who, works at {user.company.name} in the {user.company.department} department as a{user.company.title}.</p>
          <ul>
            <li>
              Card info:
            </li>
            <li>
            {user.bank.cardNumber}
            </li>
            <li>
            {user.bank.cardType}
            </li>  <li>
            {user.bank.cardExpire}
            </li>
          </ul>
          <ul className="mt-10">
            <li>
            Contact information:
            </li>
            <li>
            {user.phone}
            </li>
            <li>
            {user.email}
            </li>
          </ul>
        </div>

        
      </div>
    </main>
  )
}