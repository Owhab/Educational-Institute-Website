import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Instructor = (props) => {
    console.log(props);
    const {name, role, image, city} = props.instructor;
    return (
        <div>
                <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title> <h2>{name}</h2> </Card.Title>
                    <Card.Text>
                        <h4>{role}</h4>
                    </Card.Text>
                    <div className="social-icon text-center"><a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-linkedin"></i></a></div>
                    </Card.Body>
                </Card>
                </Col>            
        </div>
    );
};

export default Instructor;