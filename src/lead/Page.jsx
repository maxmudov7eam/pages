import React, {useState, useEffect} from 'react';
import '../sass/lead.scss'
import Forms from './Forms';
import Navbar from './Navbar';
import SliderSecond from './SliderSecond';
import SliderSection from './SliderSection';

const Page = () => {

    return (
        <>

        <div className="leftLine"></div>

        <Navbar />
        <div className="leftLine"></div>

        <SliderSection />
        <div className="leftLine"></div>

        <SliderSecond />
        <div className="leftLine"></div>

        <Forms />
        <div className="leftLine"></div>

            
        </>
    )
}

export default Page
