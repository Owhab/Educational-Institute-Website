import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1 className = 'text-center'>Have Some Questions?</h1>
            <div className="d-flex text-center justify-content-center">
                <p className = ''> <i class="fas fa-street-view"></i> Noakhali, Bangladesh</p>
            </div>
            <div className = 'd-flex p-5 justify-content-around'>
                <div>
                    <img height = '500px' src="https://safebytes.com/wp-content/uploads/2015/12/mail-image.jpg" alt="" />
                </div>
                <div className = 'mt-5 pt-5'>
                <Form className = ''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter your thoughts..</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                   <Link to = '/home'> <Button variant="primary" type="submit">
                        Submit
                    </Button></Link>
                </Form>
                </div>

            </div>
            
        </div>
    );
};

export default Contact;