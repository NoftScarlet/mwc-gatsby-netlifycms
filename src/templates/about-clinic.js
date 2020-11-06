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


import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HearingIcon from '@material-ui/icons/Hearing';

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
                        <section className="section section-shaped ext-large" style={{
                            backgroundImage: 'linear-gradient(rgba(114, 105, 80, 0.37), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/clinic.jpeg")',
                        }}>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="7">
                                            <h1 className="display-3 text-white">
                                                Clinic{" "}
                                            </h1>
                                            <p className="lead text-white">
                                                Our clinic works closely with the community to provide a variety of options for professional care to address musicians’ wellness. The clinic is located in the School of Music at the University of Ottawa, where it functions as a small assessment and treatment facility. We also work in collaboration with a wide network of associated health professionals who have clinics in Ottawa. All professionals associated with the centre have knowledge of musicians’ concerns and problems and have extensive experience in treating musicians. See our services page for more information.

                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href="#objectives"
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
                    <section className="section section-lg bg-gradient-default" id={"objectives"}>
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <br />
                                    <h2 className="display-3 text-white text-center" >Objectives</h2>
                                    <p className="lead text-white">
                                        Promote an integrated model of care so that musicians can receive a variety of clinical treatments in a framework which is tailored to the specific demands of singing or playing an instrument by providing:
                                        <br />
                                    </p>
                                </Col>
                                <Col md={"10"}>
                                    <p className="lead text-white">
                                    <li>Assessments of physical pain and discomfort</li>
                                    <li>Musculoskeletal care to musicians</li>
                                    <li>Interventions to help cope with performance anxiety</li>
                                    <li>Hearing evaluations and guidance</li>
                                    <li>Assistance in developing healthy habits</li>
                                    </p>
                                </Col>
                            </Row>
                            <br/>
                        </Container>
                    </section>


                    <section className="section section-lg bg-238686">
                        <Container>
                            <Row className="justify-content-center ">
                                <Col lg="12" className="bold-border">
                                    <h2 className="display-3 text-white text-center">On-site services</h2>

                                    <Row className="row-grid">
                                        <Col lg="4" className="bg-velvet">
                                            <div className={"text-center"}>
                                                <LocalHospitalIcon style={{ fontSize: 80 }} color="action"/>
                                                <h4 className="text-white">Physical Pain and Injury</h4>
                                            </div>
                                            <br />
                                            <p className="text-white">
                                                Musicians experiencing pain or injury can be assessed and then treated by either our chiropractor or our physiotherapist.

                                                To book an appointment: visit Dr. Geoff Outerbridge and Patricia Palmer's websites.</p>
                                        </Col>
                                        <Col lg="4" className="bg-warning">
                                            <div className={"text-center"}>
                                            <LibraryAddCheckIcon style={{ fontSize: 80 }} color="action"/>
                                            <h4 className="text-white">Mental Performance<br/> Skills Coachings</h4>
                                            </div>
                                            <p className="text-white">

                                                Carolyn Christie, our mental performance skills coach, offers counselling services on site, as well as by video call.

                                                To book an appointment: please email Carolyn Christie ~~ carolyn@christieperformance.com</p>
                                        </Col>
                                        <Col lg="4" className="bg-teal">
                                            <div className={"text-center"}>
                                            <HearingIcon style={{ fontSize: 80 }} color="action"/>
                                            <h4 className="text-white">Auditory Assessments</h4>
                                            </div>
                                            <p className="text-white">

                                                In collaboration with the University of Ottawa School of Audiology, we offer free auditory screening sessions at the School of Music. Screenings will help to diagnose hearing sensitivities and problems, as well as provide recommendations for future prevention. We also host information sessions, in which musicians can learn about hearing loss, auditory screenings, hearing protection devices, and other prevention strategies to help maintain auditory health.

                                                Please see our activities page for upcoming assessment and information session scheduling</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br/>


                            <Row className="text-center justify-content-center">
                                <Col lg="12" className="bold-border">
                                    <h2 className="display-3 text-white">Off-Site Services</h2>

                                    <p className="text-white">
                                    Through the centre’s network of associated professionals, clients can access professionals in a variety of fields, including physiotherapy, chiropractic, Feldenkrais Method, Alexander Technique, Mental Performance Skills Coaching, Mindfulness Training, Qigong and Yoga, among others.

                                    To book an appointment: please contact our practitioners directly through our team page.

                                        Please see our list of practitioners, services, and clinic hours.</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
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