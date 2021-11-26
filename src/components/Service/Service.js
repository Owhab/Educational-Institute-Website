import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Service = (props) => {
    const {name, image, duration, students} = props.service;

    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className = 'd-flex justify-content-between'>
                   <p>Duration: {duration}</p>  <p>Students: {students}</p> 
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>


            
        </div>
    );
};

export default Service;