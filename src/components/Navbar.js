import React from 'react'
import logo from '../../static/img/png-logo-transparent-bg.png'
import NavMenu from './NavMenu'
import {Navbar as Navbarz, Container, Row, Col} from 'reactstrap'
import NewTopNav from './NewTopNav'


const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }
    render() {
        return (
            <div className={"sticky-top"}>
                {/*
                <Container style={{maxWidth:"2560px", justifyContent:"center"}}>
                    <Row>
                        <Col xs={"12"} className="align-items-center">
                            <a href={"/"}>
                                <img className={"logo"} src={logo} alt={"Musician's Wellness Centre logo"}/>
                                <span>
                    <h3 style={{
                        marginLeft:'10px',
                        color: 'black',
                        opacity: '0.6',
                        fontFamily:'pavman',
                        display:'inline-block'
                    }}>
                        <strong>Musicians' Wellness Centre<br/></strong>
                    </h3>
                    </span>
                            </a>
                        </Col>

                        <Col xs={"0"} md={"12"} className="align-items-center">
                            <NavMenu/>
                        </Col>
                    </Row>
                </Container>
                */}
                <NewTopNav />

            </div>

        )
    }
}

export default Navbar
