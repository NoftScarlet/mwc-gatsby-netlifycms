import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col, Button, ButtonGroup, DropdownToggle
} from "reactstrap";

import logo from '../../static/img/png-logo-transparent-bg.png'

class Navbars extends React.Component {
    render() {
        return (
            <>
                <Navbar
                    className="navbar-horizontal navbar-dark navbar"
                    expand="lg"
                >
                    <Container>
                        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                            <a href={"/"}>
                                <img src={logo} alt={"Musician's Wellness Centre logo"}/>
                                <span>
                    <h4 style={{
                        marginLeft:'10px',
                        color: 'black',
                        opacity: '0.6',
                        fontFamily:'pavman',
                        display:'inline-block'
                    }}>
                        <strong>Musicians' Wellness Centre<br/></strong>
                    </h4>
                    </span>
                            </a>
                        </NavbarBrand>
                        <button
                            aria-controls="navbar-default"
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navbar-default"
                            data-toggle="collapse"
                            id="navbar-default"
                            type="button"
                        >
                            <h6 color="lightskyblue"><span className="navbar-toggler-icon filt-color" />MENU</h6>
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbar-default">
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="10">
                                        <a href={"/"}>
                                            <img
                                                alt="MWC logo"
                                                src={logo}
                                                className={"logo"}
                                            />
                                            <span>Musicians' Wellness Centre</span>
                                        </a>
                                    </Col>
                                    <Col className="collapse-close" xs="2">
                                        <button
                                            aria-controls="navbar-default"
                                            aria-expanded={false}
                                            aria-label="Toggle navigation"
                                            className="navbar-toggler"
                                            data-target="#navbar-default"
                                            data-toggle="collapse"
                                            id="navbar-default"
                                            type="button"
                                        >
                                            <span />
                                            <span />
                                        </button>

                                    </Col>
                                </Row>
                            </div>
                            <Nav className="top-menu" navbar>
                                <NavItem>
                                    <Button color="secondary" href={"/"}>Home</Button>{' '}
                                </NavItem>

                                <NavItem>
                                    <UncontrolledDropdown>

                                        <DropdownToggle caret color="secondary">
                                            About Us
                                        </DropdownToggle>



                                        <DropdownMenu>

                                            <DropdownItem href={"/about/education"}>Education</DropdownItem>
                                            <DropdownItem href={"/about/research"}>Research</DropdownItem>
                                            <DropdownItem href={"/about/clinic"}>Clinic</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem href={"/about/faqs"}>FAQs</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>

                                <NavItem>
                                    <UncontrolledDropdown>
                                        <DropdownToggle caret color="secondary">
                                            Team
                                        </DropdownToggle>

                                        <DropdownMenu>

                                            <DropdownItem href={"/team/directors"}>Directors</DropdownItem>
                                            <DropdownItem href={"/team/administrators"}>Practitioners and Educators</DropdownItem>
                                            <DropdownItem href={"/team/researchers"}>Researchers</DropdownItem>

                                        </DropdownMenu>

                                    </UncontrolledDropdown>
                                </NavItem>

                                <NavItem>
                                    <Button color="secondary" href={"/practitioners-and-services"}>Practitioners and Services</Button>{' '}
                                </NavItem>

                                <NavItem>
                                    <Button color="secondary" href={"/activities"}>Activities</Button>{' '}
                                </NavItem>

                                <NavItem>
                                    <Button color="secondary" href={"/contact"}>Contact</Button>{' '}
                                </NavItem>

                                <NavItem>
                                    <Button color="info">Donate</Button>{' '}
                                </NavItem>

                            </Nav>

                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Navbars;