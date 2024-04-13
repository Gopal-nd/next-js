import React from 'react'
import Herosection from '@/components/Herosection'
import FeatureCources from '@/components/FeatureCources'
import Whychooseus from '@/components/Whychooseus'
import TestemonealCard from '@/components/TestemonealCard'
import Upcomming from '@/components/Upcomming'
import Instrocturors from '@/components/Instrocturors'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bd-grid-white/[0.02]'>
      <Herosection/>
      <FeatureCources/>
      <Whychooseus/>
      <TestemonealCard/>
      <Upcomming/>
      <Instrocturors/>
      <Footer/>
    </main>
  )
}

export default Home
