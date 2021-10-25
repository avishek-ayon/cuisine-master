import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Thali from '../Thali/Thali';

const Service = () => {
    const [platters, setPlatter] = useState([]);
    useEffect(() => {
        fetch("./food.JSON")
            .then(res => res.json())
            .then(data => setPlatter(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4 my-5 mx-5">
                {
                    platters.map(platter => <Thali
                        key={platter.key}
                        platter={platter}></Thali>)
                }
            </Row>
        </div>
    );
};

export default Service;