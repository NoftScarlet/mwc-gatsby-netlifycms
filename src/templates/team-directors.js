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

import PortfolioCardDirector from "../components/PortfolioCardDirector";

const directorsData = {
    data:[
        {
            id:0,
            name:'Gilles Comeau, PhD',
            role:"Professor of Music\n" +
                "Piano Pedagogy Research Lab\n" +
                "University of Ottawa, School of Music",
            image:"https://piano.uottawa.ca/mwc/img/profComeau.jpg",
            bio:{
                eduTraining: 'Philosophie et Musique, Université d\'Ottawa - University Courses (1986), Longy School of Music - University Courses (1988), Manhattan School of Music - M.A.(1989), Psychopédagogie, Université d\'Ottawa - Ph.D.(1995), Fondements de l\'éducation musicale, Université de Montréal - Études postdoctorales (1997), Pédagogie du piano, Université de Montréal',
                contact: 'gcomeau@uOttawa.ca',
                moreInfo: 'https://uniweb.uottawa.ca/?lang=en#/members/425'
            }
        },
        {
            id:1,
            name:'Donald Russell, PhD, S.M.',
            role:"Professor of Mechanical & Aerospace Eng\nFaculty of Engineering and Design\nCarleton University",
            image:"https://piano.uottawa.ca/mwc/img/russell.jpeg",
            bio:{
                eduTraining: 'BEng, Technical University of Nova Scotia - SM, Massachusetts Institute of Technology - PhD, Massachusetts Institute of Technology',
                researchInterest: 'Biomechanics of Musculoskeletal Injury in Skilled Musicians',
                contact: 'Donald.Russell@carleton.ca',
                moreInfo: 'https://carleton.ca/mae/profile/donald-l-russell/'
            }
        },
        {
            id:2,
            name:'Geoff Outerbridge, D.C',
            role:'Chiropractor, \nIntegrate Healthcare Collective\n ',
            image:"https://piano.uottawa.ca/mwc/img/geoff.jpg",
            bio:{
                eduTraining: 'B.Sc in Human Kinetics, University of Guelph - M.Sc in Neuroscience, University of Guelph - Graduate: Canadian Memorial Chiropractic College, 2001',
                contact: 'geoff_outerbridge@yahoo.ca',
                moreInfo: 'https://www.integrateottawa.ca/geoff-outerbridge-msc-dc'
            }
        },{
            id:3,
            name:'Carolyn Christie, M.H.K.',
            role:"Mental Performance Skills Coach\n" +
                "Professor of Music\n" +
                "McGill University",
            image:"https://piano.uottawa.ca/mwc/img/carolyn.png",
            bio:{
                eduTraining: 'B.Mus. in Flute Performance, McGill University (1975) -- M.H.K. with a concentration in Intervention and Consultation, University of Ottawa, 2016',
                contact: 'carolyn@christieperformance.com',
                moreInfo: 'https://www.mcgill.ca/music/carolyn-christie'
            }
        }
    ]
}


class TeamDirectorsTemplate extends React.Component {
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

                            <Container className="py-lg-md d-flex" style={{maxWidth:"1250px"}}>
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="9">
                                            <h1 className="display-3 text-white">
                                                Directors{" "}
                                            </h1>
                                            <h3 className="text-white">Our directors have built interdisciplinary partnerships with institutions and facilities in Ottawa and the surrounding area.</h3>
                                            <p className="lead text-white">
                                                Their diverse experience in education, research, and clinical treatment have informed the centre’s comprehensive approach to musicians’ wellness.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                    </div>

                    <div>
                        <section className="section section-lg bg-gradient-default">
                            <Container style={{maxWidth:"1440px"}}>
                                <h1 className="display-5 text-center text-white">Meet the Team</h1>
                                <hr/>
                                <br/>
                                <Row className="justify-content-center">
                                    {directorsData.data.map(director =>

                                        <Col xl={"3"} lg="4" md={"6"} xs={"12"} className={" hover-zoom"} >
                                            <PortfolioCardDirector
                                                name={director.name}
                                                image={director.image}
                                                qualification={director.role}
                                                bio={director.bio}
                                            />
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

const TeamDirectors = ({data}) => {
    return (
        <TeamDirectorsTemplate/>
    )
}

export default TeamDirectors