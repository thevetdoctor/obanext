import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oba Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='m-5 -mb-5 text-2xl font-semibold text-center'>
        <h2>
          Obafemi Oderanti
          <p className='text-xl'>
            Fullstack Software Engineer | Cloud Engineer
          </p>
        </h2>
        </div>
        {children}
      </body>
    </html>
  )
}
