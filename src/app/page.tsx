import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/largeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import '../styles/globals.css';
import Image from 'next/image'


export const metadata:Metadata = {
  title: 'Similarity API | Home',
  description: 'Open-source API'
}
export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='lg' className='three-d text-black dark:text-light-gold'>
            Easily Check This API
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>
            You can Easily deterrmine {'  '}
            <Link href='/' className='underline underline-offset-2 text-black dark:text-light-gold'>
              API Key
            </Link>
          </Paragraph>
          <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image priority className='img-shadow' quality={100} style={{objectFit: 'contain'}} fill src='/typewrite.jpg' alt='typewriter'/>
          </div>
        </div>
      </div>
    </div>
  )
}
