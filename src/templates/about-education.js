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


class AboutEducationTemplate extends React.Component {
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
                        <section style={{
                            backgroundImage: 'linear-gradient(rgba(42, 68, 108, 0.33), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/education.jpeg")',
                        }} className="section section-shaped ext-large" >

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Education{" "}
                                            </h1>
                                            <p className="lead text-white">
                                                We offer a diverse set of educational programs taught by health
                                                professionals and researchers, aimed to inform about physical, mental,
                                                auditory, and visual wellness.

                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    id={"offer-program"}
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href="#offer-program"
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code"/>
                          </span>
                                                    <span className="btn-inner--text">Explore</span>
                                                </Button>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </Container>
                            {/* SVG separator */}

                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    {/*
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("../assets/img/theme/promo-1.png")}
                                    />
                                </Col>
                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                            <i className="ni ni-settings-gear-65" />
                                        </div>
                                        <h3>Awesome features</h3>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Carefully crafted components
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-html5" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">Amazing page examples</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Super friendly support team
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={require("../assets/img/theme/img-1-1200x1000.jpg")}
                                            top
                                        />
                                        <blockquote className="card-blockquote">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-default"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-default"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">
                                                Design System
                                            </h4>
                                            <p className="lead text-italic text-white">
                                                The Arctic Ocean freezes every winter and much of the
                                                sea-ice then thaws every summer, and that process will
                                                continue whatever happens.
                                            </p>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                            <i className="ni ni-settings" />
                                        </div>
                                        <h3>Our customers</h3>
                                        <p className="lead">
                                            Don't let your uses guess by attaching tooltips and
                                            popoves to any element. Just make sure you enable them
                                            first via JavaScript.
                                        </p>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <a
                                            className="font-weight-bold text-warning mt-5"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            A beautiful UI Kit for impactful websites
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section pb-0 bg-gradient-warning">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-lg-2 ml-lg-auto" md="6">
                                    <div className="position-relative pl-md-5">
                                        <img
                                            alt="..."
                                            className="img-center img-fluid"
                                            src={require("../assets/img/ill/ill-2.svg")}
                                        />
                                    </div>
                                </Col>
                                <Col className="order-lg-1" lg="6">
                                    <div className="d-flex px-3">
                                        <div>
                                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                                <i className="ni ni-building text-primary" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h4 className="display-3 text-white">Modern Interface</h4>
                                            <p className="text-white">
                                                The Arctic Ocean freezes every winter and much of the
                                                sea-ice then thaws every summer, and that process will
                                                continue whatever.
                                            </p>
                                        </div>
                                    </div>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-satisfied" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Awesome Support
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-active-40" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">
                                                        Modular Components
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-warning"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <h2 className="display-3">The amazing Team</h2>
                                    <p className="lead text-muted">
                                        According to the National Oceanic and Atmospheric
                                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                                        potentially record maximum.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("../assets/img/theme/team-1-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Ryan Tompson</span>
                                                <small className="h6 text-muted">Web Developer</small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="warning"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-facebook" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-dribbble" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("../assets/img/theme/team-2-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Romina Hadid</span>
                                                <small className="h6 text-muted">
                                                    Marketing Strategist
                                                </small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-facebook" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-dribbble" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("../assets/img/theme/team-3-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Alexander Smith</span>
                                                <small className="h6 text-muted">UI/UX Designer</small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-facebook" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-dribbble" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">John Doe</span>
                                                <small className="h6 text-muted">Founder and CEO</small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="success"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="success"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-facebook" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="success"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-dribbble" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg pt-0">
                        <Container>
                            <Card className="bg-gradient-warning shadow-lg border-0">
                                <div className="p-5">
                                    <Row className="align-items-center">
                                        <Col lg="8">
                                            <h3 className="text-white">
                                                We made website building easier for you.
                                            </h3>
                                            <p className="lead text-white mt-3">
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture.
                                            </p>
                                        </Col>
                                        <Col className="ml-lg-auto" lg="3">
                                            <Button
                                                block
                                                className="btn-white"
                                                color="default"
                                                href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                                                size="lg"
                                            >
                                                Download React
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Container>
                    </section>
                    */}

                    <section className="section section-lg bg-gradient-default" >
                        <Container>
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">We offer programs related to the following
                                        topics:</h2>
                                    <p className="lead text-white pb-5">
                                        Basic anatomical and physiological concepts applied to artists<br/>
                                        Analysis and prevention of musicians' injuries<br/>
                                        Strategies for minimizing effects of performance anxiety<br/>
                                        Applying mindfulness to music performance<br/>
                                        Auditory health and hearing loss prevention<br/>
                                        Health problems faced by musicians<br/>
                                        Available health approaches to improve musicians’ wellness<br/>
                                        Development of healthy habits and practice strategies
                                    </p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">

                                        <Col md="6" lg="3" className={"pb-5"}>
                                                <Card className="card-lift--hover bg-1c5e5e shadow border-0 cursor-pointer" onClick={() => this.toggleModal("masterProgramModal") }>
                                                    <CardImg
                                                        alt="..."
                                                        src={"https://piano.uottawa.ca/mwc/img/education1.jpg"}
                                                        top
                                                    />
                                                    <blockquote className="card-blockquote" style={{padding:'0.9em'}}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg-bg"
                                                            preserveAspectRatio="none"
                                                            viewBox="0 0 583 95"
                                                        >
                                                            <polygon
                                                                className="fill-1c5e5e"
                                                                points="0,52 583,95 0,95"
                                                            />
                                                            <polygon
                                                                className="fill-1c5e5e"
                                                                opacity=".2"
                                                                points="0,42 583,95 683,0 0,95"
                                                            />
                                                        </svg>
                                                        <h4 className="display-4 font-weight-bold text-white pd-1">
                                                            Master's Program
                                                        </h4>
                                                    </blockquote>
                                                </Card>
                                            <Modal
                                                className="modal-dialog-centered"
                                                isOpen={this.state.masterProgramModal}
                                                toggle={() => this.toggleModal("masterProgramModal")}
                                            >
                                                <div className="modal-header">
                                                    <h3 className="modal-title">
                                                        Master's Program
                                                    </h3>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("masterProgramModal")}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <strong>Master of Arts degree in Musicians' Wellness</strong>
                                                    <hr/>
                                                    The University of Ottawa is now offering an MA in Music degree with a profile in Musicians’ Wellness. Students in this program take various courses and workshops, and have the opportunity to participate in research projects related to musicians’ wellness.
                                                    Click here for more information
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        color="secondary"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("masterProgramModal")}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </Col>

                                        <Col md="6" lg="3" className={"pb-5"}>
                                            <Card className="card-lift--hover bg-fb6340 shadow border-0 cursor-pointer" onClick={() => this.toggleModal("fourCourseModal") }>
                                                <CardImg
                                                    alt="..."
                                                    src={"https://piano.uottawa.ca/mwc/img/education1.jpg"}
                                                    top
                                                />
                                                <blockquote className="card-blockquote" style={{padding:'0.9em'}}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg-bg"
                                                        preserveAspectRatio="none"
                                                        viewBox="0 0 583 95"
                                                    >
                                                        <polygon
                                                            className="fill-fb6340"
                                                            points="0,52 583,95 0,95"
                                                        />
                                                        <polygon
                                                            className="fill-fb6340"
                                                            opacity=".2"
                                                            points="0,42 583,95 683,0 0,95"
                                                        />
                                                    </svg>
                                                    <h4 className="display-4 font-weight-bold text-white pd-1">
                                                        Four-credit Courses
                                                    </h4>
                                                </blockquote>
                                            </Card>
                                            <Modal
                                                className="modal-dialog-centered"
                                                isOpen={this.state.fourCourseModal}
                                                toggle={() => this.toggleModal("fourCourseModal")}
                                            >
                                                <div className="modal-header">
                                                    <h4 className="modal-title">
                                                        For-credit Courses
                                                    </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("fourCourseModal")}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    Each semester, we offer university credits for workshops taught by our team of health professionals who have special experience in treating musicians. Each workshop normally lasts three or six hours and focuses on topics related to musicians’ wellness. Chiropractors, physiotherapists, psychologists, yoga instructors, Feldenkrais practitioners, and Alexander Technique teachers provide both practical and theoretical knowledge for musicians. While full-time university students can take these courses for credit, non-student members of the Ottawa community can also register for any of these workshops, either for credit or as auditors. Community members can register for individual workshops, or the full course. Some of these courses will be available to distance students.
                                                    <br/>
                                                    <br/>
                                                    <strong>How to register</strong>
                                                    <hr/>
                                                    Full-time students from the University of Ottawa can register through uoZone. Because these units will accumulate towards a students’ degree program, fees are covered by university tuition. We also welcome community members who are not University of Ottawa students to register for any of these workshops, either for credit or as auditors. Community members who are not University of Ottawa students can register as auditors through the Professional Development Institute.
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        color="secondary"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("fourCourseModal")}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </Col>



                                        <Col md="6" lg="3" className={"pb-5"}>
                                            <Card className="card-lift--hover bg-11cdef shadow border-0 cursor-pointer full-height" onClick={() => this.toggleModal("workshopsModal") }>
                                                <CardImg
                                                    alt="..."
                                                    src={"https://piano.uottawa.ca/mwc/img/education1.jpg"}
                                                    top
                                                />
                                                <blockquote className="card-blockquote" style={{padding:'0.9em'}}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg-bg"
                                                        preserveAspectRatio="none"
                                                        viewBox="0 0 583 95"
                                                    >
                                                        <polygon
                                                            className="fill-11cdef"
                                                            points="0,52 583,95 0,95"
                                                        />
                                                        <polygon
                                                            className="fill-11cdef"
                                                            opacity=".2"
                                                            points="0,42 583,95 683,0 0,95"
                                                        />
                                                    </svg>
                                                    <h4 className="display-4 font-weight-bold text-white pd-1">
                                                        Workshops
                                                    </h4>
                                                </blockquote>
                                            </Card>
                                            <Modal
                                                className="modal-dialog-centered"
                                                isOpen={this.state.workshopsModal}
                                                toggle={() => this.toggleModal("workshopsModal")}
                                            >
                                                <div className="modal-header">
                                                    <h3 className="modal-title">
                                                        Workshops
                                                    </h3>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("workshopsModal")}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    Each semester we offer several non-credited workshops at the University of Ottawa. Some are open to both university students and members of the community. Our workshops usually require prior registration to reserve a place.
                                                    <br/>
                                                    <br/>
                                                    <strong>We offer classes in:</strong>
                                                    <hr/>
                                                    Mindfulness training<br/>
                                                    Alexander Technique<br/>
                                                    Feldenkrais Awareness through Movement<br/>
                                                    Yoga<br/>
                                                    Global Active Stretching<br/><br/>

                                                    Please see the activities page for upcoming dates, workshop content, and registration information.



                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        color="secondary"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("workshopsModal")}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </Col>

                                <Col md="6" lg="3" className={"pb-5"}>
                                    <Card className="card-lift--hover bg-4a2f8d shadow border-0 cursor-pointer full-height" onClick={() => this.toggleModal("masterclassModal") }>
                                        <CardImg
                                            alt="..."
                                            src={"https://piano.uottawa.ca/mwc/img/education1.jpg"}
                                            top
                                        />
                                        <blockquote className="card-blockquote" style={{padding:'0.9em'}}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-4a2f8d"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-4a2f8d"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-4 font-weight-bold text-white pd-1">
                                                Masterclasses
                                            </h4>
                                        </blockquote>
                                    </Card>
                                    <Modal
                                        className="modal-dialog-centered"
                                        isOpen={this.state.masterclassModal}
                                        toggle={() => this.toggleModal("masterclassModal")}
                                    >
                                        <div className="modal-header">
                                            <h3 className="modal-title">
                                                Masterclasses
                                            </h3>
                                            <button
                                                aria-label="Close"
                                                className="close"
                                                data-dismiss="modal"
                                                type="button"
                                                onClick={() => this.toggleModal("masterclassModal")}
                                            >
                                                <span aria-hidden={true}>×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            Each semester we offer several non-credited workshops at the University of Ottawa. Some are open to both university students and members of the community. Our workshops usually require prior registration to reserve a place.
                                            <br/>
                                            <br/>
                                            <strong>We offer classes in:</strong>
                                            <hr/>
                                            Mindfulness training<br/>
                                            Alexander Technique<br/>
                                            Feldenkrais Awareness through Movement<br/>
                                            Yoga<br/>
                                            Global Active Stretching<br/><br/>

                                            Please see the activities page for upcoming dates, workshop content, and registration information.



                                        </div>
                                        <div className="modal-footer">
                                            <Button
                                                color="secondary"
                                                data-dismiss="modal"
                                                type="button"
                                                onClick={() => this.toggleModal("masterclassModal")}
                                            >
                                                Close
                                            </Button>
                                        </div>
                                    </Modal>
                                </Col>

                                    </Row>

                            {/*

                            <Row className="row-grid mt-5">
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-settings text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Building tools</h5>
                                    <p className="text-white mt-3">
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </p>
                                </Col>
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-ruler-pencil text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Grow your market</h5>
                                    <p className="text-white mt-3">
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </p>
                                </Col>
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-atom text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Launch time</h5>
                                    <p className="text-white mt-3">
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </p>
                                </Col>
                            </Row>
                            */}
                        </Container>


                    </section>
                    {/*
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Want to work with us?</h4>
                                            <p className="mt-0">
                                                Your project is very important to us.
                                            </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Your name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={e => this.setState({ emailFocused: true })}
                                                        onBlur={e => this.setState({ emailFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Type a message..."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Send Message
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    */}

                </main>
               {/*<CardsFooter/>*/}
            </Layout>
        );
    }
}

const AboutEducation = ({data}) => {
    return (

        <AboutEducationTemplate/>

    )
}

export default AboutEducation