import React from 'react';
import { Grid, Row, Col, Image, View, Carousel, Button} from 'react-bootstrap'

class NonMember extends React.Component{
	render() {
		return (
            <div>
                <Grid>
                    <Row bsClass="nmRow">
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
                            <h2>Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text </h2>
                            <Button> 
                                A Button
                            </Button>
                        </Carousel.Caption>
                    </Row>
                    <Row bsClass="nmRow">
                        <Col md={4} >
                            <Image src="./app/image/placeholder1.jpg" width={356} height={256} rounded className="imgCenter" />
                        </Col>
                        <Col md={4} >
                            <Image src="./app/image/placeholder1.jpg" width={356} height={256} rounded className="imgCenter" />
                        </Col>
                        <Col md={4} >
                            <Image src="./app/image/placeholder1.jpg" width={356} height={256} rounded className="imgCenter" />
                        </Col>
                    </Row>
                    <Row bsClass="nmRow">
                        <Col md={4}>
                            <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                            <p className="txtCenter">sample text</p>
                        </Col>
                        <Col md={4}>
                            <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                            <p className="txtCenter">sample text</p>
                        </Col>
                        <Col md={4}>
                            <Image src="./app/image/placeholder1.jpg" rounded width={64} height={64} className="imgCenter" />
                            <p className="txtCenter">sample text</p>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row bsClass="nmRow">
                        <h1 className="txtCenter"> Sample Text </h1>
                        <h2 className="txtCenter"> Sample Text Sample TextSample TextSample TextSample TextSample Text</h2>
                    </Row>
                
                    <Row bsClass="nmRow">
                        <Col md={5} >
                            <h2 className="txtCenter nmRow"> Sample Text Sample Text</h2>
                            <h3 className="txtCenter"> 
                                Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
                            </h3>
                            <Button className="imgCenter"> 
                                A Button
                            </Button>
                        </Col>
                        
                        <Col md={3} >
                            <Image src="./app/image/placeholder1.jpg" rounded width={256} height={384} className="imgBordered"  />
                        </Col>
                        <Col md={4} >
                            <Row>
                                <Image src="./app/image/placeholder1.jpg" rounded width={160} height={236} className="imgBordered" />
                                <Image src="./app/image/placeholder1.jpg" rounded width={160} height={236} className="imgBordered" />
                            </Row>
                            <Row>
                                <Image src="./app/image/placeholder1.jpg" rounded width={100} height={128} className="imgBordered" />
                                <Image src="./app/image/placeholder1.jpg" rounded width={100} height={128} className="imgBordered" />
                                <Image src="./app/image/placeholder1.jpg" rounded width={100} height={128} className="imgBordered" />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row bsClass="nmRow">
                        <Col md={6}>
                            <Image src="./app/image/placeholder1.jpg" rounded width={512} height={400} className="imgBordered" />
                        </Col>
                        <Col md={6}>
                            <h1 className="txtCenter"> Sample Text Sample Text</h1>
                            <h3> 
                                Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample Text
                                Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample Text
                                Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample Text
                                Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample Text
                                Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample
                            </h3>
                            <Button> 
                                A Button
                            </Button>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row bsClass="nmRow">
                        <Col md={4}>
                            <h2 className="txtCenter">Sample Text Sample Text</h2>
                            <Row className="nmRow" >
                                <Button bsStyle="link">Occasion 1</Button>
                            </Row>
                            <Row>
                                <Button bsStyle="link">Occasion 2</Button>
                            </Row>
                            <Row>
                                <Button bsStyle="link">Occasion 3</Button>
                            </Row>
                            <Row>
                                <Button bsStyle="link">Occasion 4</Button>
                            </Row>
                            <Row>
                                <Button bsStyle="link">Occasion 5</Button>
                            </Row>
                            <Row>
                                <Button bsStyle="link">Occasion 6</Button>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <Image src="./app/image/placeholder1.jpg" rounded width={720} height={400} className="imgBordered" />
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row bsClass="nmRow">
                        <Carousel className="hideCar">
                            <Carousel.Item>
                                <img src="./app/image/placeholder1.jpg" alt="900x500"/>
                                <Carousel.Caption>
                                    <h2>Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text </h2>
                                    <Button> 
                                        A Button
                                    </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Grid>
            </div>
		);
	}
}

export default NonMember;