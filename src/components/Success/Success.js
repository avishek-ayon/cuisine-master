import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Award from '../Award/Award';

const Success = () => {
    const [awrads, setAwrads] = useState([]);
    useEffect(() => {
        fetch("./award.JSON")
            .then(res => res.json())
            .then(data => setAwrads(data))
    }, [])
    return (
        <div>
            <h1 className="my-5 rounded-3 border border-primary text-success fs-1 fw-bold">Top 100 In World Ranked and Award Winner</h1>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {
                        awrads.map(award => <Award
                            key={award.key}
                            award={award}></Award>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Success;