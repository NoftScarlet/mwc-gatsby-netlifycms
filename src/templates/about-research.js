import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardImg,
    Container,
    Row,
    Col
} from "reactstrap";
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReadMoreResearch from '../components/ResearchReadMore'

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        display: 'flex',

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabButton: {
        width:'97%',
        maxWidth: '97%'
    },
    image: {
        float:'right',
        width:'55%'
    },
    imageL: {
        float:'left',
        width:'55%',
        marginRight: '4px'
    }
}));

function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <Row>
                <Col md="4">
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label={
                            <CardBody className={`overlay-transparent-layer ${classes.tabButton}`}><h5
                                className="text-white pt-1">Performance Anxiety</h5>
                                <hr/>
                            </CardBody>
                        } {...a11yProps(0)} className={classes.tabButton}/>

                        <Tab label={
                            <CardBody className={`overlay-transparent-layer ${classes.tabButton}`}><h5
                                className="text-white pt-1">Somatic Approaches and Clinical Treatments</h5>
                                <hr/>
                            </CardBody>
                        } {...a11yProps(1)} className={classes.tabButton}/>

                        <Tab label={
                            <CardBody className={`overlay-transparent-layer ${classes.tabButton}`}><h5
                                className="text-white pt-1">Biomechanics and Injury Prevention</h5>
                                <hr/>
                            </CardBody>
                        } {...a11yProps(2)} className={classes.tabButton}/>

                        <Tab label={
                            <CardBody className={`overlay-transparent-layer ${classes.tabButton}`}><h5
                                className="text-white pt-1">Auditory and Visual Wellness</h5>
                                <hr/>
                            </CardBody>
                        } {...a11yProps(3)} className={classes.tabButton}/>

                    </Tabs>
                </Col>
                <Col md="8">
                    <TabPanel value={value} index={0}>
                        <img className={classes.image} src={"https://piano.uottawa.ca/mwc/img/mindfulness.jpeg"}/>
                        <p className={" text-white"}>Many research studies have documented the prevalence of Musicians’ Performance Anxiety (MPA).
                            The symptoms of MPA include both mental and physical elements, and can have a severe impact on
                            musicians’ well-being and ability to perform at a high level. Due to the seriousness of this
                            problem, many music teachers and students are voicing the need for better strategies to cope
                            with MPA. In order to fill this need, more research is required to better understand MPA, as
                            well as the strategies that can help struggling musicians. Our research focuses on examining the
                            effectiveness of strategies such as self-modelling and mindfulness. A better understanding of
                            how strategies can impact musicians’ psychological experience of MPA as well as its physical
                            symptoms can help performers, educators, and practitioners better deal with these challenges in
                            their work.</p>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <img className={classes.imageL} src={"https://piano.uottawa.ca/mwc/img/somatic.JPG"} />
                        <p className={" text-white"}>
                        Somatic retraining methods such as Alexander Technique, Feldenkrais Method, and Body Mapping are
                        becoming increasingly popular among musicians. Although much of the theoretical foundations of
                        these methods are based on scientific understanding of anatomy, motor control, neuroplasticity,
                        and motor-learning, our understanding of any positive benefits of somatic training is almost
                        entirely theoretical or anecdotal. Because the current amount of scientific research on the
                        impacts of somatic training is very small, further investigation is needed. Our research on
                        somatic methods aims at examining the effects of somatic training on posture and movement of
                        musicians performing on their instrument and the musical quality of a performance. It also
                        examines how individual somatic approaches differ in their impact on musicians, and whether or
                        not those impacts occur over short term and long term interventions. This research could give an
                        empirical basis upon which to understand the usefulness of somatic treatments in helping
                        musicians. In addition to our work on somatic methods, we have also established a partnership
                        with Dr. Outerbridge’s clinic to monitor the progress of various clinical treatments on injured
                        musicians.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <img className={classes.image} src={"https://piano.uottawa.ca/mwc/img/motion.jpg"} />
                        <p className={" text-white"}>
                        Playing a musical instrument is a highly complex biomechanical task. While there are many
                        approaches aiming to promote efficiency and injury prevention, pedagogues often disagree on the
                        specifics of what is “healthy technique.” These disagreements are often based on imprecise
                        terminology and subjective results, creating a great deal of confusion for musicians who are
                        seeking answers to their technical and physical wellness needs. Therefore, objective data is
                        required to better understand the biomechanics of musical performance and injury prevention. Our
                        research uses quantitative tools to learn more about muscle use, the positions required for
                        playing musical instruments, as well as the impact of injury prevention and treatment
                        strategies. We also use qualitative research in order to examine popular pedagogical approaches
                        and prevention strategies in relation to scientific findings. This research can help improve
                        musicians’ wellness by furthering our understanding of instrumental technique, pedagogy, and
                        injury prevention strategies so that musicians can apply this knowledge to their own playing.</p>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <img className={classes.imageL} src={"https://piano.uottawa.ca/mwc/img/hearing.JPG"} />
                        <p className={" text-white"}>
                        Most professional musicians depend on maintaining good auditory health to be successful in their
                        occupation. Hearing loss can threaten a musician’s ability to perform well, and a number of
                        studies have concluded that musicians are at risk for hearing loss due to the potentially
                        harmful levels of sound exposure in their working environment. Research indicates that musicians
                        might not be sufficiently aware of their hearing health until they experience symptoms, and
                        therefore they are not likely to get hearing protection until damage has already occurred. Our
                        research on auditory wellness aims to better understand the risk of hearing loss caused by music
                        making, as well test diagnostic methods that may be able to detect problems earlier and point
                        musicians towards proper treatment and preventative care.
                        Visual problems can also impact musicians’ ability to perform well. While issues with visual
                        focus can make it difficult for musicians to read in different performance contexts (on stage,
                        in halls with poor lighting, etc.), beginner musicians may also struggle to learn to read (a
                        condition called “dysmusia”) due to visual difficulties. It is possible that one cause of
                        dysmusia could be a problem of coordination between the two eyes (known as “binocular
                        coordination”). Our research on visual wellness investigates if there is an observable
                        relationship between issues with binocular coordination and dysmusia that may have an impact on
                        musicians who are learning to read.</p>
                    </TabPanel>
                </Col>
            </Row>
        </div>
    );
}


class AboutResearchTemplate extends React.Component {
    state = {
        opacityZero: "opacity-zero",
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    readMore = state => {
        this.setState({
            [state]: "opacity-one"
        })
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    render() {
        const areasOfResearchStyle = {
            minHeight : "912px"
        }

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
                                                    className="btn-icon mb-3 mb-sm-0 pb-3"
                                                    color="info"
                                                    onClick={() => this.readMore("opacityZero")}
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code"/>
                          </span>
                                                    <span className="btn-inner--text">Read More</span>
                                                </Button>

                                            </div>
                                        </Col>
                                        <Col lg="6" id="more-texts" className={`${this.state.opacityZero} fade_in_out read_more_background`}>
                                            <p className="text-white pt-3 border-radius-3 ">
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


                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-238686 shadow border-0">
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

                    <section className="section section-lg bg-gradient-default" style={areasOfResearchStyle}>
                        <Container>
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h1 className="display-3 text-white pb-4" id={"learn-more"}>Areas of Research:</h1>
                                </Col>
                            </Row>
                            <VerticalTabs/>
                        </Container>
                    </section>
                </main>
            </Layout>
        );
    }
}

const AboutResearch = ({data}) => {
    return (
        <AboutResearchTemplate/>
    )
}

export default AboutResearch