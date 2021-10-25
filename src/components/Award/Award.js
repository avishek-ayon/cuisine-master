import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Award = (props) => {
    const { img, name, country } = props.award

    return (
        <div>
            <Col>
                <Card className="mx-auto w-50">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Instrutor
                            {country}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Award;