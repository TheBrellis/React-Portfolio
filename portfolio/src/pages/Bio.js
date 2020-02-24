import React from 'react';
import { Col, Row, Container, Jumbotron, Image } from "react-bootstrap";

export default function Bio() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Jumbotron>
                        <Image src="../utils/images/proPic.jpg" />
                        <p>
                            Hello! My name is Brian Ellis. I currently work as a Senior Associate Engineer for Burndy LLC in Manchester NH. At Burndy, I work designing electrical connectors for grounding applications in the Utility, C&I, and OEM industries. I graduated from the University of New Hampshire in 2017 with a degree in Mechanical Engineering. After a couple of years in the professional world, I started to miss the pace and structure that academia provided. And so, I started to look for more avenues in which I could furthur my education and improve my career prospects. While I was in school, I lived in a house with 3 Software Engineers and a Systems Engineer, so the influence of a programmers mindset was constant. I loved listening to them breakdown how they approached problems and how they constanstly had to adapt to an everchanging tech world. I was hooked. I attempted to teach myself Python and Arduino, but as my schedule and priorities shifted I quickly fell out of the routine. Until I stumbled upon UNH's Fullstack Web Dev Coding Bootcamp. After some consideration I decided that it would be now or never. Longing for the structure and emersion that helped me to learn so much in college, I signed up and here we are! One website down and many more to come. I look forward to what my future in programming holds!
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}