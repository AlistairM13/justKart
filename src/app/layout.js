"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../component/navbar'
import { Provider } from 'react-redux'
import store from '../store/index'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  )
}
