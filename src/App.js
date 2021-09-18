import React, {useState} from 'react'
import Developer from './wooPage/Developer'
import ECommerceCard from './wooPage/ECommerceCard'
import Header from './wooPage/Header'
import NavBar from './wooPage/NavBar'
import SlideR from './wooPage/SlideR'
import Support from './wooPage/Support'
import Footer from './wooPage/Footer'
import Under from './wooPage/Under'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { ClimbingBoxLoader } from 'react-spinners';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  window.addEventListener('load', () => {
      setIsLoading(false)
  })
  return (
    <>
    {isLoading ?
                <div className="loader">
                    <ClimbingBoxLoader color='#7854F7'  loading={isLoading} />
                </div> : ''}

    <div className='wrap'>
      <NavBar />
      <Header />
    </div>
    <ECommerceCard />
    <Developer />
    <SlideR />
    <Support />
    <Footer />
    <Under />
      
    </>
  )
}

export default App
