import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <footer className='text-center'>
            <p><small>copyright e @ {year}</small></p>
        </footer>
    );
};

export default Footer;