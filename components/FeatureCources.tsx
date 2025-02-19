'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface course{
  
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,

}

const FeatureCources = () => {
const fcourse = courseData.courses.filter((course:course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wider uppercase'>featured courses</h2>
                <p className='text-3xl mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>

            </div>
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {fcourse.map((course:course)=>(
             <div key={course.id} className='flex justify-center'>
              <BackgroundGradient className='flex flrx-col rounded-[20px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
              <div className='p-4 sm:p-6 flex flex-col item-center text-center flex-grow'>
                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 flow-grow'>{course.description}</p>
                <Link href={`/courses/${course.slug}`}>Learn More</Link>
              </div>
              </BackgroundGradient>
             </div>
            ))}
          </div>
        </div>
        <div className='mt-20  text-center'>
            <Link href={'/courses'} className='px-4 py-2  rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 '>
                View all Coureses 
             </Link>
        </div>

    </div>
  )
}

export default FeatureCources