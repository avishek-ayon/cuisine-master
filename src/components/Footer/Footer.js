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

            <img src="https://i.pinimg.com/564x/57/5f/f7/575ff7fd547876bedeaf4e3d6cbfb342.jpg" alt="" />
            <br />
            <br />
            <footer>@2020 craft by <small className="text-danger fs-3">Avishek Palit</small> </footer>
            <br />
        </div>
    );
};
export default Footer;