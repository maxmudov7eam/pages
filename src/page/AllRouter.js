import React, { useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import All from './All';
import Companies from './Companies';
import ExpertTeam from './ExpertTeam';
import Footer from './Footer';
import ForBussiness from './ForBussiness';
import GrowBussiness from './GrowBussiness';
import Navbar from './Navbar';
import OurPlans from './OurPlans';
import Seo from './Seo';
import WebsiteSpeed from './WebsiteSpeed';
import WhyWe from './WhyWe';
import { ClimbingBoxLoader } from 'react-spinners';
import ScrollToTop from './ScrollToTop';

const AllRouter = () => {

    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setIsLoading(false);
    // }, []);

    window.addEventListener('load', () => {
        setIsLoading(false)
    })


    return (

        <>

        <BrowserRouter>
        <ScrollToTop />

        {isLoading ?
                    <div className="loader">
                        <ClimbingBoxLoader color='orange'  loading={isLoading} />
                    </div> : ''}

        <Navbar />

            <Switch>
                <Route path='/' exact component={All} />
                <Route path='/about-us' exact component={WhyWe} />
                <Route path='/services' exact component={Seo} />
                <Route path='/features' exact component={ForBussiness} />
                <Route path='/team' exact component={ExpertTeam} />
                <Route path='/blog' exact component={OurPlans} />
                <Route path='/contact' exact component={GrowBussiness} />
                <Route path='/get-started' exact component={ WebsiteSpeed} />
            </Switch>

        <Footer />

        </BrowserRouter>



        </>

    );
};

export default AllRouter;