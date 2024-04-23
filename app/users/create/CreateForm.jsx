"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [maidenName, setMaidenName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpire, setCardExpire] = useState('')
  const [cardType, setCardType] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newUser = { firstName, lastName, maidenName, age, gender, image, phone, email, bank: { cardNumber, cardExpire,cardType } };

    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)

        //we fake a new user when we press on the add user btn
      });

      if (response.ok) { // Check if response is ok
        setIsLoading(false);
        router.push('/users'); // Redirect to /users page
        const responseData = await response.json(); // Parse response data
        console.log("Success:", responseData); // Log the response data
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>First name:</span>
        <input
          required 
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="First name"
        />
      </label>
      <label>
        <span>Last name:</span>
        <input
          required 
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          placeholder="Last name"

        />
      </label>
      <label>
        <span>Maiden name:</span>
        <input
          required 
          type="text"
          onChange={(e) => setMaidenName(e.target.value)}
          value={maidenName}
          placeholder="Maiden name"

        />
      </label>
      <label>
        <span>Age:</span>
        <input
          required 
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Age"

        />
      </label>
      <label>
        <span>Gender:</span>
        <input
          required 
          type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          placeholder="Gender"

        />
      </label>
      <label>
        <span>Image:</span>
        <input
          required 
          type="file"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="p-0"
        />
      </label>
      <label>
        <span>Phone:</span>
        <input
          required 
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="30 49 20 15"
          pattern="[0-9]{8}"
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          required 
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
      </label>
      <label>
        <span>cardNumber:</span>
        <input
          required 
          type="number"
          onChange={(e) => setCardNumber(e.target.value)}
          value={cardNumber}
          placeholder="cardNumber"
        />
      </label>
      <label>
        <span>Card type:</span>
        <input
          required 
          type="text"
          onChange={(e) => setCardType(e.target.value)}
          value={cardType}
          placeholder="card type"
        />
      </label>
      <label>
        <span>Card expire date:</span>
        <input
          required 
          type="date"
          onChange={(e) => setCardExpire(e.target.value)}
          value={cardExpire}
          placeholder="card expire date"
        />
      </label>

      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add User</span>}
    </button>
    </form>
  )
}
