import Meta from './components/Meta'
import AppLayout from './components/layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable:"--font-inter"
 })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <Meta/>
      <AppLayout>
          {children}
      </AppLayout>
      </body>
    </html>
  )
}
