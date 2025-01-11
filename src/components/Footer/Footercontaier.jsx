import React, { useState, useEffect } from 'react';
import Mobilefooter from './mobilefooter/Mobilefooterconainer';
import PcFooter from './pcfooter/pcfooter';


const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {width < 1200 ? <Mobilefooter /> : <PcFooter />}
        </>
    );
};

export default Footer;
