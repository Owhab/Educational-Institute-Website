import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructors.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div>
            <h2 className = 'text-center'>Meet with our valuable instructors..</h2>
            <Row xs={1} md={3} className="g-4 m-3">
            {
                instructors.map(instructor => <Instructor
                key = {instructor.id}
                instructor = {instructor}
                ></Instructor>)

            }
            </Row>
            
            
        </div>
    );
};

export default Instructors;