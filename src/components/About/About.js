import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className = 'text-center'>About Us</h1>
            <Row xs={1} md={2} className="g-4 m-3">
                <Col>
                <Card>
                    <Card.Body>
                    
                    <Card.Text className = 'pt-5'>
                        <p>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                        </p>
                        <br /> 
                    </Card.Text>
                    <Button className = 'm-5' variant="warning">Get Admission</Button>{' '}
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg" />
                    
                </Card>
                </Col>

            </Row>
            
        </div>
    );
};

export default About;