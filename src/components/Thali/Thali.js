import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Thali = (props) => {
    const { img, name, Instructor, price } = props.platter;
    return (
        <div>
            <Col>
                <Card className="w-70">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-2">{name}</Card.Title>
                        <Card.Text ><small className="text-warning fs-5">Instrutor</small>  :
                            <small className="fs-5"> {Instructor}</small>
                        </Card.Text>
                        <Card.Text className="text-success fs-4">Price :
                            {price} $
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Thali;