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
        fourCourseModal: false,
        workshopsModal: false,
        masterclassModal: false,
        displayNone: "display-none",
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    readMore = state => {
        this.setState({
            [state]: ""
        })
    }

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
                            backgroundImage: 'linear-gradient(rgba(114, 105, 80, 0.37), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/research.jpeg")',
                        }}>

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Research{" "}
                                            </h1>
                                            <p className="lead text-white">
                                                We conduct research on musicians’ wellness in conjunction with the Piano
                                                Pedagogy Research Laboratory at the University of Ottawa. Our wellness
                                                research program focuses on the impact that various treatments
                                                (physiotherapy, somatic approaches, mindfulness training, yoga practice,
                                                etc.) can have on musicians.
                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    onClick={() => this.readMore("displayNone")}
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code"/>
                          </span>
                                                    <span className="btn-inner--text">Read More</span>
                                                </Button>

                                            </div>
                                        </Col>
                                        <Col lg="6" id="more-texts" className={this.state.displayNone}>
                                            <p className="text-white p-3 overlay-transparent-layer border-radius-20">
                                                More specifically, we want to investigate how these treatments can
                                                increase musicians’ mental and physical comfort and possibly improve the
                                                quality of their performance.
                                                While there is a great deal of subjective evidence suggesting that these
                                                practices are beneficial to musicians, there is a lack of objective data
                                                confirming these reports.
                                                In order to address this lack of research, the centre studies how these
                                                treatments can increase musicians’ mental and physical comfort and
                                                possibly improve the quality of their performance.
                                                Also, music wellness research is faced with the troubling problem of
                                                determining what is meant by “improvement” or “optimal” criteria.
                                                Our research investigates whether musical (expression, musicality),
                                                mechanical (low forces, stiffness, high speed) and biological (reduced
                                                injury risk, low co-contraction) criteria are compatible, and whether it
                                                is possible to approach music making in a way that simultaneously
                                                achieves all three.</p>
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
                    </section> */}

                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-1c5e5e shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={"https://piano.uottawa.ca/mwc/img/research1.jpg"}
                                            top
                                        />
                                        <blockquote className="card-blockquote">

                                            <h4 className="display-4 font-weight-bold text-white pd-1">
                                                Our research team includes professors, students, and health
                                                professionals from the following disciplines:
                                            </h4>
                                            <p className="text-italic text-white">
                                                Music<br/>
                                                Health Sciences<br/>
                                                Psychology<br/>
                                                Engineering<br/>
                                                Human Kinetics<br/>
                                                Audiology<br/>

                                            </p>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">

                                        <h1>Through our research, we aim to:</h1>
                                        <ul>
                                            <li>Develop relevant, interdisciplinary research focused on musicians’
                                                wellness
                                            </li>
                                            <li>Expand theoretical and practical knowledge that can improve musicians’
                                                wellbeing
                                            </li>
                                            <li>Evaluate the effect of various treatments and educational approaches
                                            </li>
                                            <li>Develop methodologies and tools for objectively measuring musicians’
                                                bodies during performance
                                            </li>
                                            <li> Improve treatments and methods of prevention for musicians’ wellness
                                            </li>
                                            <li>Establish strong community partnerships that will bring service
                                                providers into research
                                            </li>
                                            <li>Offer a rich environment for students by providing opportunities to
                                                participate and gain valuable experience working on innovative research
                                                projects
                                            </li>
                                        </ul>
                                        <hr/>
                                        For more information on wellness research: please visit the Piano Pedagogy
                                        Research Laboratory
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/*
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

                    <section className="section section-lg bg-gradient-default">
                        <Container>
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white pb-4" id={"learn-more"}>Areas of Research:</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="4">
                                    <Row className="row-grid">
                                        <Col md="12" className={"pb-3"}>
                                            <CardBody className={"overlay-transparent-layer"}>
                                                <h4 className="text-white pt-1">
                                                    Performance Anxiety
                                                </h4>
                                                <hr/>
                                                {/* Button trigger modal */}
                                                <Button
                                                    color="warning"
                                                    type="button"
                                                    onClick={() => this.toggleModal("masterProgramModal")}
                                                    href="#learn-more"
                                                >
                                                    Learn More
                                                </Button>
                                            </CardBody>
                                        </Col>
                                        <Col md="12" className={"pb-3"}>
                                            <CardBody className={"overlay-transparent-layer"}>
                                                <h4 className="text-white pt-1">
                                                    Somatic Approaches and Clinical Treatments
                                                </h4>
                                                <hr/>
                                                <Button
                                                    color="warning"
                                                    type="button"
                                                    onClick={() => this.toggleModal("fourCourseModal")}
                                                    href="#learn-more"
                                                >
                                                    Learn More
                                                </Button>

                                            </CardBody>
                                        </Col>

                                        <Col md="12" className={"pb-3"}>
                                            <CardBody className="overlay-transparent-layer align-bottom">
                                                <h4 className="text-white pt-1">
                                                    Biomechanics and Injury Prevention
                                                </h4>
                                                <hr/>
                                                <Button
                                                    color="warning"
                                                    type="button"
                                                    onClick={() => this.toggleModal("workshopsModal")}
                                                    href="#learn-more"
                                                >
                                                    Learn More
                                                </Button>
                                            </CardBody>
                                        </Col>
                                        <Col md="12" className={"pb-3"}>
                                            <CardBody className={"overlay-transparent-layer"}>
                                                <h4 className="text-white pt-1">
                                                    Auditory and Visual Wellness
                                                </h4>
                                                <hr/>
                                                <Button
                                                    color="warning"
                                                    type="button"
                                                    onClick={() => this.toggleModal("masterclassModal")}
                                                    href="#learn-more"
                                                >
                                                    Learn More
                                                </Button>
                                            </CardBody>
                                        </Col>

                                    </Row>
                                </Col>
                                <Col lg="8" className={"pl-5"} >
                                    <h1>Dynamic contents to be placed here. </h1>
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