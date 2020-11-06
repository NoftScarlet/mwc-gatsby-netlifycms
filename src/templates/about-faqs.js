import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';



const faqTexts = {
    data:
        {
            clinic: [
                {
                    question: "Is the Musicians’ Wellness Centre a clinic or a referral service?",
                    answer: "The centre functions as both. We have a small clinic with limited hours of operation at the University of Ottawa. However, some services are offered at our associated health professionals’ respective clinics throughout Ottawa."
                },
                {
                    question: "Where is the Musicians’ Wellness Centre clinic located?",
                    answer: "The clinic is located in the University of Ottawa School of Music, Perez Hall, Room 202, 50 University Private, Ottawa, ON, K19 6N5"
                },
                {
                    question: "Where can I park near the Musicians’ Wellness Centre clinic?",
                    answer: <span>Both paid street parking and parking lots are located nearby, with free parking available on side streets near the university. Please view the parking map <a href="https://www.google.com/maps/d/u/0/viewer?mid=1J8fmNjkJf_FnA0MECBCQUaNSZIg&ll=45.422375045247236%2C-75.68136513233185&z=16">here</a> and a list of <a href="https://www.uottawa.ca/parking/parking-services/visitors-daily-parking-rates">parking options</a>.</span>
                },
                {
                    question: "How can I book an appointment?",
                    answer: <span>You can book appointments directly with our health professionals through their websites (by visiting our <a href="http://localhost:8000/about/team-practitioners.html">team</a> page). For additional information and assistance, you are welcome to visit our on-site MWC clinic. Please visit our <a href="http://localhost:8000/about/contact.html">contact</a> page for hours of operation.</span>
                },
                {
                    question: "Do I need a referral in order to access your services?",
                    answer: "No. Clients can access all of our services directly without any referral."
                },
                {
                    question: "Are your services covered under my insurance?",
                    answer: <span>Ontario Health Insurance Plan (OHIP) does not cover our services, but various private insurance plans do. Contact your insurance provider for information regarding your individual coverage. Students covered under the University of Ottawa’s graduate and undergraduate student health plans can find more information here:<br/><a href="https://www.uosu-seuo.com/home">Undergraduate</a><br/><a href="https://new.gsaed.ca/en/services/">Graduate</a></span>
                },
                {
                    question: "What is the fee for assessments?",
                    answer: <span>Assessment fees are determined by each individual health professional. Please visit the <a href="team-practitioners.html">team</a> page to link directly to our health professionals' websites.</span>
                },
                {
                    question: "What is your cancellation policy for assessments?",
                    answer: "Cancellation policies may vary depending on the health professional. Please visit our health professionals’ individual websites for their clinic policies through our team page."
                }
            ],

            education: [
                {
                    question: "How can I register to your workshops and for-credit courses?",
                    answer: <span>Please visit our <a href="activities.html">activities</a> page to register.</span>
                },
                {
                    question: "Do I have to be a student at the University of Ottawa to participate in your for-credit courses?",
                    answer: <span>Both students and members of the community are welcome to participate in our for-credit courses. For more information and to register, please see our <a href="activities.html">activities</a> page.</span>
                },
                {
                    question: "Where can I find information regarding upcoming events?",
                    answer: <span><a href="activities.html">activities</a> page for a complete listing of our for-credit courses, workshops, and masterclasses.</span>
                }
            ],

            research: [
                {
                    question: "How can I get involved in research with the Musicians’ Wellness Centre?",
                    answer: <span>Graduate and undergraduate students can register for one of our for-credit practicum courses, gaining valuable
                                experience in musicians’
                                wellness
                                research and administration and coordination. For more information, see our
                                poster <a href="piano-pedagogy-research-practicum.pdf"
                                          type="application/pdf" width="100%" height="600px">here</a> or
                                visit the
                                <a href="activities.html">activities</a> page. <br/><br/>
                                Please contact <a href="team-admin.html">Mikael Swirp</a>,
                                Research Coordinator, at
                                mswirp@uottawa.ca for more information.</span>
                }
            ],

            help_the_centre: [
                {
                    question: "How can I get involved with the Musicians’ Wellness Centre?",
                    answer: <span>We have
                                volunteer positions available
                                for
                                research assistants. We also welcome volunteers in capacities such as event planning,
                                fundraising, and
                                administration
                                for the centre. Please email <a>mwc@uottawa.ca</a> to get
                                involved.</span>
                },
                {
                    question: "How can I donate to the Musicians’ Wellness Centre?",
                    answer: <span>Please visit our <a
                        href="https://www.uottawa.ca/give/GillesComeau">Donate</a> page.</span>
                }
            ]
        }
}


class AboutFaqsTemplate extends React.Component {
    state = {
        exampleModal: false,
        masterProgramModal: false,
        fourCourseModal: false,
        workshopsModal: false,
        masterclassModal: false
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
                            backgroundImage: 'linear-gradient(rgba(42, 68, 108, 0.33), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/question.jpg")',
                        }} className="section section-shaped ext-large">

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row className="text-center justify-content-center">
                                        <Col lg="12">
                                            <h1 className="display-3 text-white">
                                                F A Q s
                                            </h1>
                                            <br />
                                            <br />
                                        </Col>
                                        <h1>How can we help?</h1>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                    </div>


                    <section id="clinic" className="section section-lg bg-gradient-default">
                        <h1 className={"text-center text-white"}>Clinic</h1>

                        <br />
                        <Row className="justify-content-center">
                            <Col xs={"12"} style={{maxWidth: "1200px"}}><hr/></Col>
                            <Col xs={"11"} style={{maxWidth: "870px"}}>
                                        {faqTexts.data.clinic.map((x, index) => (
                                                <ExpansionPanel style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography><h4 className="text-white">{x.question}</h4></Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography><p className="lead text-white pb-5">{x.answer}</p></Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                        ))}
                                <br />
                                <br />
                            </Col>
                        </Row>

                        <h1 className={"text-center text-white"}>Education</h1>

                        <br />
                        <Row className="justify-content-center">
                            <Col xs={"12"} style={{maxWidth: "1200px"}}><hr/></Col>
                            <Col xs={"11"} style={{maxWidth: "870px"}}>
                                {faqTexts.data.education.map((x, index) => (
                                    <ExpansionPanel style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h4 className="text-white">{x.question}</h4></Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography><p className="lead text-white pb-5">{x.answer}</p></Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                ))}
                                <br />
                                <br />
                            </Col>
                        </Row>


                        <h1 className={"text-center text-white"}>Research</h1>

                        <br />
                        <Row className="justify-content-center">
                            <Col xs={"12"} style={{maxWidth: "1200px"}}><hr/></Col>
                            <Col xs={"11"} style={{maxWidth: "870px"}}>
                                {faqTexts.data.research.map((x, index) => (
                                    <ExpansionPanel style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h4 className="text-white">{x.question}</h4></Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography><p className="lead text-white pb-5">{x.answer}</p></Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                ))}
                                <br />
                                <br />
                            </Col>
                        </Row>

                        <h1 className={"text-center text-white"}>Help the centre</h1>

                        <br />
                        <Row className="justify-content-center">
                            <Col xs={"12"} style={{maxWidth: "1200px"}}><hr/></Col>
                            <Col xs={"11"} style={{maxWidth: "870px"}}>
                                {faqTexts.data.help_the_centre.map((x, index) => (
                                    <ExpansionPanel style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h4 className="text-white">{x.question}</h4></Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography><p className="lead text-white pb-5">{x.answer}</p></Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                ))}
                                <br />
                                <br />
                                <p className="lead text-white pb-5">
                                    <u><b>Please contact the registration office for more assistance on for-credit
                                        courses:</b></u> <br/>
                                    Telephone: 613-562-5252 <br/>
                                    mentors@uottawa.ca <br/>Be ready to provide
                                    your first name,
                                    last name, student number, date of birth and the name of your program <br/><br/>

                                </p>
                            </Col>
                        </Row>
                    </section>
                </main>
            </Layout>
        );
    }
}

const AboutFaqs = ({data}) => {
    return (
        <AboutFaqsTemplate/>
    )
}

export default AboutFaqs