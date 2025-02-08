import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
  title: 'Task Tycoon',
  description: 'Платформа для автоматизированной оценки знаний',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} antialiased`}>
        {/* <Router /> */}
        <Header />
        <main className='bg-ttWhite mx-auto w-full max-w-[1620px] flex-grow'>{children}</main>
        {/*Notification*/}
        <Footer />
      </body>
    </html>
  )
}
