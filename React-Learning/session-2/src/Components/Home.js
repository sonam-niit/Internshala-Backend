import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Featured from './Featured';
function Home() {
    return ( <>
            <Header />
            <Slider />
            <Featured />
            <Footer />
    </> );
}

export default Home;