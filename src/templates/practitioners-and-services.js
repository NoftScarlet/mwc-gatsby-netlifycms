import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components

import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import CardsFooter from "../components/Footers/CardsFooter.jsx";
import ServiceNavigation from "../components/ServicesNavigation";

const practitioners = [
    {
        name:"Geoff Outerbridge",
        role:"Chiropractor",
        location:"Integrate Healthcare Collective, Ottawa, ON.",
        eduTraining:" B.Sc in Human Kinetics, University of Guelph | M.Sc in Neuroscience, University of Guelph | Graduate: Canadian Memorial Chiropractic College, 2001",
        serviceProvided:"Chiropractic | Manual Therapy | Diversified adjustments and mobilizations | ART®: Active Release Techniques | Cox Flexion Distraction Technique | Neurofunctional Medical Acupuncture | Graston® Technique | Myofascial Release Techniques",
        specialization:"Evidence-based Spine Care | Musculoskeletal pain | Injury Prevention",
        experienceWithMusicians:"Treating injuries related to playing an instrument since 2001",
        language:"English",
        image:"https://piano.uottawa.ca/mwc/img/geoff.jpg",
        moreInfo:[
            "https://www.integrateottawa.ca/geoff-outerbridge-msc-dc",
            "https://www.worldspinecare.org/"
        ],
        bookAppointments:"https://www.worldspinecare.org/",

        serviceCategory:"Chiropractic",
        vidPresenterName:"Geoff Outerbridge",
        learMoreText:"To learn more about chiropractic and Dr. Geoff Outerbridge:",
        learnMoreLink:"https://www.integrateottawa.ca/geoff-outerbridge-msc-dc",
        videos: [
            {
                video:"/videos/geoff-intro.mp4",
                thumbnail: "/img/geoff-intro.png"
            },
            {
                video:"/videos/geoff-techniques.mp4",
                thumbnail: "/img/geoff-treatments.png"
            },
            {
                video:"/videos/geoff-approach.mp4",
                thumbnail: "/img/geoff-approach.png"
            },
        ]
    },
    {
        name:"Dapne Mercado",
        role:"Physiotherapist (Venezuela)",
        location:"Ottawa, ON",
        eduTraining:" B.Sc. in Physiotherapy, Arturo’s Michelena University | M.Sc. in Human Kinetics, University of Ottawa",
        serviceProvided:"Global Postural Rehabilitation Method (GPR)\n" +
            "| Neuro-musculoskeletal manual therapy | Myofascial Induction | Craniosacral therapy",
        specialization:"Musculoskeletal pain | Biomechanics and Injury prevention",
        experienceWithMusicians:"",
        language:"English and Spanish",
        image:"https://piano.uottawa.ca/mwc/img/Dapne.jpg",
        moreInfo:"",
        bookAppointments:"",

        serviceCategory:"Physiotherapy",
        vidPresenterName:"Dapne Mercado",
        learMoreText:"",
        learnMoreLink:"",
        videos: [
            {
                video:"/videos/dapne-intro.mp4",
                thumbnail: "/img/dapne-intro.png"
            },
            {
                video:"/videos/dapne-work-as-an-educator.mp4",
                thumbnail: "/img/dapne-teaching.png"
            },
            {
                video:"/videos/dapne-benefits.mp4",
                thumbnail: "/img/dapne-benefits.png"
            },
        ]
    },
    {
        name:"Evelyn Tan",
        role:"Certified Mindfulness Based\n" +
            " Cognitive Therapy Teacher",
        location:"Ottawa, ON",
        eduTraining:"B.Sc. in Occupational Therapy | M.Sc. in Speech-Language Pathology | University Certificate in Theology | Teacher training in Mindfulness Based Cognitive Therapy, University of California San Diego, 2011",
        serviceProvided:"Mindfulness Based Cognitive Therapy | Mindfulness and meditation training",
        specialization:"Performance anxiety | Depression",
        experienceWithMusicians:"Collaborated in research on music performance anxiety",
        language:"English and French",
        image:"https://piano.uottawa.ca/mwc/img/evelyn.jpg",
        moreInfo:"https://mbctottawa.wordpress.com/evelyn-tan/",
        bookAppointments:"https://mbctottawa.wordpress.com/contact/",

        serviceCategory:"Mindfulness Training",
        vidPresenterName:"Evelyn Tan",
        learMoreText:"To learn more about Mindfulness Training and Evelyn Tan:",
        learnMoreLink:"https://mbctottawa.wordpress.com/",
        videos: [
            {
                video:"/videos/evelyn-intro.mp4",
                thumbnail: "/img/evelyn-intro.png"
            },
            {
                video:"/videos/evelyn-anxiety-and-mindfulness.mp4",
                thumbnail: "/img/evelyn-mindfulness.png"
            },
            {
                video:"/img/evelyn-good-fit.png",
                thumbnail: "/videos/evelyn-good-fit.mp4"
            },
        ]
    },
    {
        name:"Patricia Palmer",
        role:"Orthopaedic Manipulative Physiotherapist",
        location:"P3 Physiotherapy Clinic (owner), Metcalfe, ON. Will provide on-site services at the MWC clinic (Pérez Hall)",
        eduTraining:"B.Sc. in Physical Therapy, Queen’s University, 1988 | Advanced Diploma in Manual and Manipulative Physiotherapy, 1997 | Fellow of the Canadian Academy of Manipulative Physiotherapy, 1997",
        serviceProvided:"Manual Therapy | Gunn technique of Intramuscular Stimulation (IMS) | Manipulation of peripheral and spinal joints",
        specialization:"Musculoskeletal pain | Injury Prevention",
        experienceWithMusicians:"Experience with professional musicians since 1998, including members of NACO",
        language:"English",
        image:"https://piano.uottawa.ca/mwc/img/patricia.jpg",
        moreInfo:"http://www.phyzio.biz/patriciaPalmer.php",
        bookAppointments:"http://www.phyzio.biz/contactUs.php",

        serviceCategory:"Physiotherapy",
        vidPresenterName:"Patricia Palmer",
        learMoreText:"To learn more about physiotherapy and Patricia Palmer:",
        learnMoreLink:"http://www.phyzio.biz/musiciansInjuries.php",
        videos: [
            {
                video:"/videos/pat-intro.mp4",
                thumbnail: "/img/pat-intro.png"
            },
            {
                video:"/videos/pat-physio.mp4",
                thumbnail: "/img/pat-treatments.png"
            },
            {
                video:"/videos/pat-good-fit.mp4",
                thumbnail: "/img/pat-physiotherapy-treatments.png"
            },
        ]
    },
    {
        name:"Jillian Beacon",
        role:"Feldenkrais Practitioner",
        location:"Ottawa, ON. Will provide on-site services at the MWC clinic (Pérez Hall). Services also available in residence in Sandy Hill",
        eduTraining:"B.Mus. in Integrated Studies, specialization in piano and composition, University of Calgary | Graduate Diploma and M.A. in Piano Pedagogy Research, University of Ottawa | Ph.D. candidate in Human Kinetics, University of Ottawa | Guild Certified Feldenkrais Practitioner (Awareness through Movement and Functional Integration)",
        serviceProvided:"Feldenkrais Method: Awareness through Movement (group classes or individual) | Functional Integration (one-on-one) | Piano technique development",
        specialization:"Motor learning skills training | Sensorimotor skills training",
        experienceWithMusicians:"Addressing playing-related physical pain - Teaching healthy habits - Mind-body awareness for musicians, including pre-performance routines and daily practice tools",
        language:"English",
        image:"https://piano.uottawa.ca/mwc/img/jillian.JPG",
        moreInfo:"https://www.movingthroughmusic.com/biography.html",
        bookAppointments:"https://www.movingthroughmusic.com/contact.html",

        serviceCategory:"Feldenkrais Method",
        vidPresenterName:"Jillian Beacon",
        learMoreText:"To learn more about Feldenkrais Awareness through Movement and Jillian Beacon:",
        learnMoreLink:"https://www.movingthroughmusic.com/feldenkrais-method.html",
        videos: [
            {
                video:"/videos/jillian-intro.mp4",
                thumbnail: "/img/jillian-intro.png"
            },
            {
                video:"/videos/jillian-feldenkrais.mp4",
                thumbnail: "/img/jillian-what-is-feldenkrais.png"
            },
            {
                video:"/videos/jillian-good-fit.mp4",
                thumbnail: "/img/jillian-benefits-from-feldenkrais.png"
            },
        ]
    },
    {
        name:"Michael Fahey",
        role:"Yoga and QiGong Instructor",
        location:"Empower Me Yoga, Ottawa, ON",
        affiliations: "Actors Equity | ACTRA",
        eduTraining:"",
        serviceProvided:" Hatha Yoga, Restorative Yoga, and Yoga Ball\n" +
            "| Meditation techniques | QiGong",
        specialization:"Postural Restoration | Body Awareness",
        experienceWithMusicians:"35 years teaching yoga for chronic pain related to playing an instrument | 35 years teaching guitar",
        language:"English",
        image:"https://piano.uottawa.ca/mwc/img/michael.png",
        moreInfo:[
            "http://www.michaelfahey.ca/",
            "shorelinestudio.ca"
        ],
        bookAppointments:"http://www.michaelfahey.ca/yoga/about-michael-fahey.php",

        serviceCategory:"Qigong and Yoga",
        vidPresenterName:"Michael Fahey",
        learMoreText:"To learn more about Yoga/QiGong and Michael Fahey:",
        learnMoreLink:"http://www.michaelfahey.ca/yoga/yoga-classes.php",
        videos: [
            {
                video:"/videos/michael-intro.mp4",
                thumbnail: "/img/michael-intro.png"
            },
            {
                video:"/videos/michael-yoga.mp4",
                thumbnail: "/img/michael-what-is-yoga.png"
            },
            {
                video:"/videos/michael-good-fit.mp4",
                thumbnail: "/img/michael-benefits-from-yoga.png"
            },
        ]
    },
    {
        name:"Carolyn Christie",
        role:"Mental Performance Skills Coach",
        location:"Montreal, QC. Will provide on-site services at the MWC clinic (Pérez Hall)",
        eduTraining:"B.Mus. in Flute Performance, McGill University (1975) | M.H.K. with a concentration in Intervention and Consultation, University of Ottawa, 2016",
        serviceProvided:"Workshops and private counselling for professional and student musicians | Mental skills for optimal performance under stress",
        specialization:"Mental skills for music performance excellence and public presentations (dissertations, conference speeches, etc.)",
        experienceWithMusicians:"Second Flutist, Montreal Symphony Orchestra, 1978 to 2014 | Associate Professor of Flute, McGill University 1982 | Mental Performance Skills Coach, National Youth Orchestra of Canada 2019 | Flute instructor at National Youth Orchestra of Canada, Domaine Forget, and CAMMAC, retired",
        language:"English and French",
        image:"https://piano.uottawa.ca/mwc/img/carolyn.png",
        moreInfo:"https://www.mcgill.ca/music/carolyn-christie",
        bookAppointments:"mailto:carolyn@christieperformance.com",

        serviceCategory:"Mental Skills Coaching",
        vidPresenterName:"Carolyn Christie",
        learMoreText:"To learn more about mental skills coaching for performance and Carolyn Christie:",
        learnMoreLink:"https://www.mcgill.ca/music/carolyn-christie",
        videos: [
            {
                video:"/videos/carolyn-intro.mp4",
                thumbnail: "/img/carolyn-intro.png"
            },
            {
                video:"/videos/carolyn-coaching.mp4",
                thumbnail: "/img/carolyn-coaching.png"
            },
            {
                video:"/videos/carolyn-good-fit.mp4",
                thumbnail: "/img/carolyn-good-fit.png"
            },
        ]
    },
    {
        name:"Francine Gauthier",
        role:"Optometrist",
        location:"NUVO Eye Centre - Ottawa, Ontario",
        eduTraining:"O.D. University of Montreal",
        serviceProvided:"Visual Examinations, Visual Therapy",
        specialization:"Overall ocular health care for all ages,\n" +
            "Pre/post surgery care for refractive procedures and cataracts",
        experienceWithMusicians:"",
        language:"English and French",
        image:"",
        moreInfo:"https://nuvoeyes.ca/dr-francine-gauthier/",
        bookAppointments:"https://nuvoeyes.ca/request-appointment/",

        serviceCategory:"Optometry",
        vidPresenterName:"Francine Gauthier",
        learMoreText:"To learn more about optometry and Francine Gauthier:",
        learnMoreLink:"https://nuvoeyes.ca/dr-francine-gauthier/",
        videos: [
            {
                video:"/videos/Gauthier-Intro.mp4",
                thumbnail: "/img/Gauthier-Intro.png"
            },
            {
                video:"/videos/Gauthier-vision-therapy.mp4",
                thumbnail: "/img/Gauthier-vision-therapy.png"
            },
            {
                video:"/videos/Gauthier-wellness.mp4",
                thumbnail: "/img/Gauthier-wellness.png"
            },
        ]
    },
    {
        name:"Brigitte Caron, Francis Caron and the Ottawa Alexander School",
        role:"Certified Alexander Technique Teachers",
        location:"Ottawa School of The Alexander Technique (director), Ottawa, ON",
        eduTraining:"Certified: Canadian Society of Teachers of the Alexander Technique",
        serviceProvided:"Alexander Technique",
        specialization:"Repetitive strain injuries | Performance anxiety",
        experienceWithMusicians:"",
        language:"English and French",
        image:"https://piano.uottawa.ca/mwc/img/alexander.jpg",
        moreInfo:"https://ottawaalexandertechnique.ca/en/teachers/francis-caron/",
        bookAppointments:"https://ottawaalexandertechnique.ca/en/contact/",

        serviceCategory:"Alexander Technique",
        vidPresenterName:"",
        learMoreText:"To learn more about the Alexander Technique and Brigitte Caron:",
        learnMoreLink:"https://ottawaalexandertechnique.ca/en/",
        videos: [
            {
                video:"/videos/brigitte-intro.mp4",
                thumbnail:"/img/brigitte-intro.png"
            },
            {
                video:"/videos/brigitte-what-is-alexander.mp4",
                thumbnail:"/img/brigitte-what-is-alexander.png"
            },
            {
                video:"/videos/brigitte-more-alexander.mp4",
                thumbnail:"/img/brigitte-how-it-works.png"
            }
        ]
    }

]




class PractitionersAndServicesTemplate extends React.Component {
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
                        <section className="section section-shaped ext-large">

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
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
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


                    <section className="section section-lg bg-gradient-default">
                        <ServiceNavigation naviItems={practitioners} />
                        <Container>
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">We offer programs related to the following
                                        topics:</h2>
                                    <p className="lead text-white">
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
                        </Container>
                    </section>
                </main>
            </Layout>
        );
    }
}

const PractitionersAndServices = ({data}) => {
    return (

        <PractitionersAndServicesTemplate/>

    )
}

export default PractitionersAndServices