import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components
import {
    Modal,
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardImg,
    CardImgOverlay,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import CardsFooter from "../components/Footers/CardsFooter.jsx";

import PortfolioCardStyled from "../components/PortfolioCardStyled";

const clinicAdminData = {
    data:[
        {
            id:0,
            name:"Raina Saunders",
            role:"Administrator",
            image:"https://piano.uottawa.ca/mwc/img/raina.jpeg"
        },
        {
            id:1,
            name:"Jeffrey Sabo",
            role:"Administrator",
            image:"https://piano.uottawa.ca/mwc/img/jeff.jpeg"
        },
        {
            id:2,
            name:"Lilian Zaky",
            role:"Web Developer",
            image:"https://piano.uottawa.ca/mwc/img/lilian.jpeg"
        }
    ]
}


const researchAdminData = {
    data:[
        {
            id:0,
            name:"Mikael Swirp",
            role:"Research Coordinator",
            image:"https://piano.uottawa.ca/mwc/img/mikael.jpeg"
        },
        {
            id:1,
            name:"Nicole Stanson",
            role:"Administrator",
            image:"https://piano.uottawa.ca/mwc/img/nicole.jpeg"
        },
        {
            id:2,
            name:"Yixiao Chen",
            role:"Technicial / Web Developer",
            image:"https://piano.uottawa.ca/mwc/img/chen.jpeg"
        }
    ]
}


class TeamAdministratorsTemplate extends React.Component {
    state = {
        exampleModal: false,
        masterProgramModal: false,
        fourCourseModal:false,
        workshopsModal:false,
        masterclassModal:false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    render() {

        return (
            <Layout>
                <DemoNavbar/>
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-shaped ext-large" style={{
                            backgroundImage: 'linear-gradient(rgba(114, 105, 80, 0.37), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/admin.jpeg")',
                        }}>

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="10">
                                            <h1 className="display-3 text-white">
                                                Administrators{" "}
                                            </h1>
                                            <h3 className="text-white">Our centre is supported by an enthusiastic team of administrators.</h3>
                                            <p className="lead text-white">
                                                All of our administrators are students and employees of the University of Ottawa who are passionate about musicians’ wellness.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                    </div>

                    <div>
                        <section className="section section-lg bg-dark">
                            <Container >
                                    <h1 className="display-5 text-center text-white">Clinic Administrators</h1>
                                <hr/>
                                <br/>
                                <Row className="justify-content-center hover-zoom">
                                    {clinicAdminData.data.map(administrator =>
                                        <Col md={"4"} xs={"7"}>
                                            <PortfolioCardStyled name={administrator.name} image={administrator.image} qualification={administrator.role}/>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                        </section>
                    </div>

                    <div>
                        <section className="section section-lg bg-lighter">
                            <Container >
                                <h1 className="display-5 text-center">Research Administrators</h1>
                                <hr className="bg-dark"/>
                                <br/>
                                <Row className="justify-content-center hover-zoom" >
                                    {researchAdminData.data.map(administrator =>
                                        <Col md={"4"} xs={"7"}>
                                            <PortfolioCardStyled name={administrator.name} image={administrator.image} qualification={administrator.role}/>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                        </section>
                    </div>

                </main>
               {/*<CardsFooter/>*/}
            </Layout>
        );
    }
}

const TeamAdministrators = ({data}) => {
    return (
        <TeamAdministratorsTemplate/>
    )
}

export default TeamAdministrators

