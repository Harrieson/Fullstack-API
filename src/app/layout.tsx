import NavBar from '@/components/NavBar'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toast'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      'bg-white text-slate-900 antialiased', inter.className
    )}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
      <Providers>
        <NavBar />
        <Toaster position='bottom-right'/>
        <main>{children}</main>
      </Providers>

      {/* Allow more height for mobile devices */}

      <div className="h-40 md:hidden"></div>
      </body>
    </html>
  )
}
