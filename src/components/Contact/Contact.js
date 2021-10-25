import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>

            <Card style={{ width: '18rem' }} className="mx-auto  w-50 mt-5 mb-5 rounded-3 border border-primary">
                <Form className="w-50 mx-auto mt-4">
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="text-success fw-bold fs-2">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-success fw-bold fs-2">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="bg-dark text-white" type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="btn btn-primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Contact;