import React from 'react';
import { Grid, Row, Col, Image, View, Carousel, Button} from 'react-bootstrap'

class NonMember extends React.Component{
	render() {
		return (
            <Grid>
                <Row bsClass='nmRow'>
                    <Carousel>
                        <Carousel.Item>
                            <img src="./app/image/placeholder1.jpg" alt="900x500"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./app/image/placeholder1.jpg" alt="900x500"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./app/image/placeholder1.jpg" alt="900x500"/>
                        </Carousel.Item>
                    </Carousel>
                        
                    <Carousel.Caption>
                        <h2 class="overlay">Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text </h2>
                        <Button> 
                            A Button
                        </Button>
                    </Carousel.Caption>
                </Row>
                <Row bsClass='nmRow'>
                    <Col sm={4} md={4} >
                        <Image src="./app/image/placeholder1.jpg" rounded responsive />
                    </Col>
                    <Col sm={4} md={4} >
                        <Image src="./app/image/placeholder1.jpg" rounded responsive />
                    </Col>
                    <Col sm={4} md={4} >
                        <Image src="./app/image/placeholder1.jpg" rounded responsive />
                    </Col>
                </Row>
                <Row bsClass='nmRow'>
                    <Col sm={4} md={4}>
                        <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                        <p className="txtCenter">sample text</p>
                    </Col>
                    <Col sm={4} md={4}>
                        <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                        <p className="txtCenter">sample text</p>
                    </Col>
                    <Col sm={4} md={4}>
                        <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                        <p className="txtCenter">sample text</p>
                    </Col>
                </Row>
            </Grid>
		);
	}
}

export default NonMember;