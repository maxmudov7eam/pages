import React from 'react';

import '../sass/linkedtech.scss'
import Brand from './Brand';
import CompactCamera from './CompactCamera';
import Facts from './Facts';
import Header from './Header';
import InStyle from './InStyle';
import MyNavbar from './MyNavbar';
import PopularProducts from './PopularProducts';

const Page = () => {
    return (
        <>
            <MyNavbar />
            <Header />
            <Brand />
            <InStyle />
            <CompactCamera />
            <PopularProducts />
            <Facts />
        </>
    )
}

export default Page
