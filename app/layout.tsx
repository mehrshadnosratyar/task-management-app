import type { Metadata } from 'next'
import  localFont  from 'next/font/local'
import './globals.css'
import Navbar from './Navbar'

const danaRegular = localFont({
  src:'../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2'
})
const danaMedium = localFont({
  src:'../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2'
})
const danaDemiBold = localFont({
  src:'../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2'
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir='rtl'>
      <body className={danaMedium.className}>
        <section className='flex'>
            <Navbar/>
          <main className='p-10'>
        {children}
          </main>
        </section>
        </body>
    </html>
  )
}
