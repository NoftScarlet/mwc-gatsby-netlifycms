import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components
import {
    Modal,
    Button,
    Card,
    CardImg,
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
                                                <Card className="card-lift--hover bg-238686 shadow border-0 cursor-pointer" onClick={() => this.toggleModal("masterProgramModal") }>
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
                                                                className="fill-238686"
                                                                points="0,52 583,95 0,95"
                                                            />
                                                            <polygon
                                                                className="fill-238686"
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
                        </Container>
                    </section>
                </main>
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