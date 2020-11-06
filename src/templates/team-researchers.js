import React from "react";
// nodejs libr/ary that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'

import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";

import PortfolioCardStyled from "../components/PortfolioCardStyled";

const researchersData = {
    data:[
        {
            id:0,
            name:"Emma Fleet",
            role:"Master of Arts with Thesis\n" +
                "in Piano/Music Pedagogy",
            image:"https://piano.uottawa.ca/mwc/img/emma.jpeg",
            bio:"Dissertation: Injury prevention and warmups"

        },
        {
            id:1,
            name:"Jeffrey Sabo",
            role:"Master of Arts with Thesis\n" +
                "in Piano/Music Pedagogy",
            image:"https://piano.uottawa.ca/mwc/img/jeff.jpeg",
            bio: "Dissertation: Injury prevention and biomechanics or Piano Technique"
        },
        {
            id:2,
            name:"Meganne Woronchak",
            role:"PhD in Human Kinetics\n" +
                "(with research topic in Piano Pedagogy)",
            image:"https://piano.uottawa.ca/mwc/img/meganne.jpeg",
            bio:"Dissertation: Music reading – Exploring vision challenges faced by young piano students"
        },{
            id:3,
            name:"Jillian Beacon",
            role:"PhD in Human Kinetics\n" +
                "(with research topic in Piano Pedagogy)",
            image:"https://piano.uottawa.ca/mwc/img/jillian.JPG",
            bio:"Dissertation: Investigating the impact of the Feldenkrais Method on motor variability of pianists body movements"

        },
        {
            id:4,
            name:"Erin Dempsey",
            role:"PhD in Human Kinetics\n" +
                "(with research topic in Piano Pedagogy)",
            image:"https://piano.uottawa.ca/mwc/img/erin.jpeg",
            bio: "Dissertation: Examining the effects of a self-modelling intervention on music performance anxiety and self-efficacy in young musicians"
        },
        {
            id:5,
            name:"Grace Wong",
            role:"PhD in Human Kinetics\n" +
                "(with research topic in Piano Pedagogy)",
            image:"https://piano.uottawa.ca/mwc/img/grace.JPG",
            bio:"Dissertation: The effects of the Alexander Technique on physical aspects of piano performance"
        }
    ]
}


class TeamResearchersTemplate extends React.Component {
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
                                                Researchers{" "}
                                            </h1>
                                            <h3 className="text-white">Our research team is made up of Doctoral and Master’s students in the Piano Pedagogy Research Lab at the University of Ottawa</h3>
                                            <p className="lead text-white">
                                                All of our research team members are investigating topics related to physical, mental, auditory, or visual wellness among musicians of various ages and levels.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                    </div>

                    <div>
                        <section className="section section-lg" style={{backgroundColor:"#003f42"}}>
                            <Container >
                                <h1 className="display-5 text-center text-white">Meet the Team</h1>
                                <hr/>
                                <br/>
                                <Row className="justify-content-center">
                                    {researchersData.data.map(researcher =>

                                        <Col lg={"4"} md={"6"} sm={"12"} className={"hover-zoom"}>
                                            <PortfolioCardStyled
                                                name={researcher.name}
                                                image={researcher.image}
                                                qualification={researcher.role}
                                                bio={researcher.bio}
                                            />
                                        </Col>

                                    )}
                                </Row>
                            </Container>
                        </section>
                    </div>

                    <div>
                        <section className="section section-lg bg-lighter">
                            <Container >
                                <h1 className="display-5 text-center">Alumni</h1>
                                <hr className="bg-dark"/>
                                <br/>
                                <Row className="justify-content-center" >
                                    <p>
                                        <u><strong>Nicole Stanson:</strong></u> The Effectiveness of Mindfulness Training on Young Adult Musicians Experiencing Music Performance Anxiety (2019) <br/>
                                        <u><strong>Dapne Mercado:</strong></u> Assessment of the Effects of Global Postural Re-Education on Musicians with Nonspecific Musculoskeletal Pain as assessed by Questionnaires and Infrared Thermography (2018) <br/>
                                        <u><strong>Teri Slade:</strong></u> Measurable changes in piano performance following a Body Mapping workshop (2018) <br/>
                                        <u><strong>Susan Mielke:</strong></u> Mental practice in music performance: A literature-based glossary and taxonomy (2017) <br/>
                                        <u><strong>Jillian Beacon:</strong></u> Assessing 2D and 3D motion tracking technologies for measure the immediate impact of Feldenkrais training on the playing postures of pianists (2015) <br/>
                                        <u><strong>Erin Dempsey:</strong></u> Music performance anxiety in children and teenagers: Effects of perfectionism, self-efficacy and gender (2015) <br/>
                                        <u><strong>Grace Wong:</strong></u> The immediate effects of somatic approach workshops on the body usage and musical quality of pianists (2015) <br/>
                                        <u><strong>Michèle Wheatley-Brown:</strong></u> An analysis of terminology describing the physical aspect of piano technique (2011)
                                    </p>
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

const TeamResearcher = ({data}) => {
    return (
        <TeamResearchersTemplate/>
    )
}

export default TeamResearcher