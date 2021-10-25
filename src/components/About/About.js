import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="mx-auto  w-50 mt-5 mb-5">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who is the eligible for those Course?</Accordion.Header>
                        <Accordion.Body>
                            Those who are passionate for learning about recipe and doing some way of task of cuisine.From Beginning, learner can take lesson
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Which kind of cuisine would help for individual learner.</Accordion.Header>
                        <Accordion.Body>
                            Regional impact is depend on it.Those who are belong south-asian region, they can traning pakistani, Indian recipy.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Time Perod Of those Course</Accordion.Header>
                        <Accordion.Body>
                            It Depends on which cuisine you are learn.But average time period is 3 to 4 months.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default About;