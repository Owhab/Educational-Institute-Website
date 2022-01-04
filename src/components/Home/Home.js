import React from "react";
import { Card, CardGroup, Carousel, Col, Row, Button } from "react-bootstrap";
import Instructors from "../Instructors/Instructors";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className=" ">
      {/* Hero Section Start */}
      <div className="hero-section">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Focus on Learning</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Practical Oriented Class</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>One to One Concentration</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <h1 className="text-center pt-5">About Us</h1>
      <Row xs={1} md={3} className="g-4 m-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>OUR COURSES</Card.Title>
              <Card.Text>
                We are very happy to introduce many dynamic courses which
                includes many new and great features happy to …
              </Card.Text>
              <Card.Text>
                Better designed programs for you Online Availability to sources
                Helping Board in your learning management
              </Card.Text>
              <Button variant="info">Enroll Course</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>OUR TEACHERS</Card.Title>
              <Card.Text>
                We have got some best teachers available in town who can help
                you to polish your skills as much as you can …
              </Card.Text>
              <Card.Text>
                Better designed programs for you Online Availability to sources
                Helping Board in your learning management
              </Card.Text>
              <Button variant="info">See Teachers</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Admission Process</Card.Title>
              <Card.Text>
                We have got some best teachers available in town who can help
                you to polish your skills as much as you can …
              </Card.Text>
              <Card.Text>
                Better designed programs for you Online Availability to sources
                Helping Board in your learning management
              </Card.Text>
              <Button variant="info">Get Admission</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* About Us Section End */}

      {/* Welcome Section Start */}
      <div>
        <Row xs={1} md={2} className="g-4 m-3">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.webfulcreations.com/themes/education/wp-content/uploads/sites/2/2016/11/education_bg.jpg"
              />
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Body>
                <h2>
                  WELCOME TO{" "}
                  <span className="text-warning">WEBFUL EDUCATION!</span>
                </h2>
                <h4>We Are Eager To Give You Best Education And Style.</h4>
                <Card.Text>
                  We Welcome you to our Education WordPress theme by Webful
                  Creations. Webful Creations have created an amazing WordPress
                  theme which is great for educational institutes and courses.
                  Aliquam erat volutpat. Donec laoreet iaculis elementum.
                  Aliquam ligula nisi, molestie faucibus tortor quis, vulputate
                  imperdiet turpis. In iaculis arcu et aliquam dapibus. Nulla
                  facilisi.
                </Card.Text>
                <Card.Text>
                  Nunc pellentesque euismod felis id posuere. Nunc maximus
                  aliquet varius. Cras ornare tristique est vel porttitor. Fusce
                  tempor, augue sagittis congue ornare, tortor augue elementum
                  augue, quis egestas nisi ipsum eget urna. Suspendisse vitae
                  lectus quis turpis dapibus euismod eget a metus. Nulla eget
                  nunc purus. Ut egestas et nulla at pretium. Pellentesque sed
                  varius lectus.
                </Card.Text>
                <Button variant="warning">Get Admission</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* Welcome Section ENd */}

      {/* Courses Section */}
      <div className="courses m-3">
        <h2 className="text-center">Services</h2>
        <p className="text-center">Find Best Course For Yourself!</p>

        <Services></Services>
      </div>

      {/* Instructors Section Start */}
      <div className="instructors py-5">
        <h1 className="text-center">Our Instructors</h1>

        <Instructors></Instructors>
      </div>

      {/* Instructors Section ENd */}
    </div>
  );
};

export default Home;
