import React from 'react';
import './Footer.css'
import { Button } from 'react-bootstrap';

const Footer = () => {

    return (
        <div className='foot'>

            <h1>Booking your course</h1>
            <br />

            <Button variant="danger">Visit now</Button>
            <br />

            <img src="https://raistheme.com/html/gostudy/img/raistheme.png" alt="" />
            <footer>@2020 craft by Avishek Palit</footer>
        </div>
    );
};
export default Footer;