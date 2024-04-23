import './globals.css'
import { Poppins } from 'next/font/google'

// components
import Navbar from './components/Navbar'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: 'User Dashboard',
  description: 'See all the users we have',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
