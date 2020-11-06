import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Button } from 'reactstrap';

import {
    Container,
    Row,
    Col
} from "reactstrap";
import PractitionerServiceCard from "../components/PractitionerServiceCard";




const ServiceNavigation = (props) => (
    <Container className={"service-navigation"}>
        <Row>
            <Col xs={"1"} lg={"2"} className="p-0 show-all-btn d-none">
                <Button href="#" className="btn-primary w-100 h-100 border-radius-0">
                    <h3>ALL</h3>
                </Button>
            </Col>
            <Col sm="12" md="12" lg={"10"} className="d-md-flex grid-items p-0" >
                <Container className={"service-navigation-name-and-service"}>
                    <Row>
                        <Col xs={"6"} md={"6"} lg={"4"} className={"p-0 show-all-btn"}>
                            <Button href="#" className="btn-primary w-100 h-100 border-radius-0">
                                <h3>ALL</h3>
                            </Button>
                        </Col>
            {props.naviItems.map(item => (
                <Col xs={"6"} md={"6"} lg={"4"} className="p-0">
                    <Button className="btn-primary w-100 border-radius-0">
                        <p>{item.name}</p>
                        <h6>{item.serviceCategory}</h6>
                    </Button>
                </Col>

            ))}
                    </Row>
                </Container>
            </Col>
        </Row>

        <Row>
            <Col lg={"6"} className="p-0">
                <PractitionerServiceCard cardItems={props.naviItems}/>
            </Col>
        </Row>
    </Container>


)

ServiceNavigation.propTypes = {
    naviItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
            link: PropTypes.string,
        })
    ),
}

export default ServiceNavigation
