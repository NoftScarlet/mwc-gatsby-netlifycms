import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
// reactstrap components
import {
    Modal,
    CardBody,
    CardImg,
    CardImgOverlay,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 250,
    },
    description: {
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',

    }
});

const useStylesPast = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
    description: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
});

const activityData = {
    data: [
        {
            id:0,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Musicians' Wellness Centre Information Session",
            sub_title:"Launch of our Centre Activities",
            instructors:"",
            description:"Come and learn about this exciting new project!",
            date_time:"Wednesday, September 18th 2019. 11:30am-12:30pm",
            location:"Freiman Hall, School of Music, University of Ottawa",
            attendee:"University students and members of the community",
            language:"",
            cost:"Free",
            registration:"Not Required",
            details:<div>
                <ul>
                    At our launch event, you will learn about the activities and services provided by the centre,
                        including:
                    <li>Upcoming events, such as workshops, courses, masterclasses</li>
                    <li>The new MA degree program focused on Musicians' Wellness</li>
                    <li>The Musicians' Wellness Centre clinic</li>
                    <li>Wellness research and opportunities to get involved</li>
                </ul>
            </div>
        },
        {
            id:1,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Fall 2019 Workshops: Pain and Injury Prevention for Musicians",
            sub_title:"(MUS4392A)",
            instructors:"Dapne Mercado, Patricia Palmer, Dr. Geoff Outerbridge, Brigitte Caron, Jillian Beacon",
            description:"Pain, discomfort, and injuries are common among musicians, and the need for specialized training and treatment is on the rise. These courses are taught by health professionals who have special experience in treating musicians. They will provide practical and theoretical knowledge to help musicians prevent and overcome pain. These workshops are designed to equip musicians with knowledge and tools to improve their physical well-being in relation to their instrument. They will introduce musicians to anatomy, mechanisms of injury, and strategies for prevention and treatment of injury through the Alexander Technique, chiropractic care, the Feldenkrais Method, and physiotherapy. The content of these workshops is applicable to a wide variety of musicians and instrumental groups.",
            date_time:"",
            location:"",
            attendee:"All are welcome: uOttawa students and community members who are not uOttawa students.",
            language:"English",
            cost:"For full-time uOttawa students: Free upon course registration\n" +
                "For part-time uOttawa students: $361.95 for all three workshops\n" +
                "For community members who are not uOttawa students: Visit the Professional Development Institute page\n",
            registration:"For uOttawa students: Register through uOzone for all three sessions to receive 1.5 units.\n" +
                "For community members who are not uOttawa students: Register through the Professional Development Institute for individual sessions.",
            details:
            <div>
                <div id={"workshop-1"}>
                    Workshop 1
                    The Musician’s Body and Repetitive Strain Injuries for Musicians

                    Instructors: Part 1: Brigitte Caron, Certified Alexander Technique Teacher ~~ Part 2: Jillian Beacon, Certified Feldenkrais Practitioner

                    Description:
                    Part 1: Understanding Postural Reflex (Alexander Technique)

                    Understanding the dynamics of the “postural reflex design”
                    The benefits and "how to" of “Constructive Rest Position”
                    Practical aspects of the Alexander Technique: Walking, standing, sitting, and using arms in relationship to oneself and an instrument.
                    Part 2: Feldenkrais Method for Musicians
                    Overview of the Feldenkrais Method and it’s relationship to research on pain and injury prevention
                    Practical session in which participants will be instructed in using the Feldenkrais Method
                    Date/Time: November 23, 2019: 9am-4pm

                    Language of instruction: English

                    Location: 50 University (PRZ), Room 109</div>
                <div id={"workshop-2"}>
                    Workshop 2
                    Posture and Spine Pain
                    Instructors: Part 1: Dapne Mercado, Physotherapist ~~ Part 2: Dr. Geoff Outerbridge, DC

                    Description:
                    Part 1: Posture

                    Posture development, equilibrium and vital functions
                    Changes in posture and loads applied to the body
                    Healthy life-style for musicians
                    Part 2: Spine Pain
                    Spinal anatomy
                    What causes pain? Mechanical and psychosocial factors
                    Prevention
                    Date/Time: November 2, 2019: 9am-4pm

                    Language of instruction: English

                    Location: 50 University (PRZ), Room 109</div>
                <div id={"workshop-3"}>
                    Workshop 3
                    The Alexander Technique and Feldenkrais Method for Musicians
                    Instructors: Part 1: Brigitte Caron, Certified Alexander Technique Teacher ~~ Part 2: Jillian Beacon, Certified Feldenkrais Practitioner

                    Description:
                    Part 1: Understanding Postural Reflex (Alexander Technique)

                    Understanding the dynamics of the “postural reflex design”
                    The benefits and "how to" of “Constructive Rest Position”
                    Practical aspects of the Alexander Technique: Walking, standing, sitting, and using arms in relationship to oneself and an instrument.
                    Part 2: Feldenkrais Method for Musicians
                    Overview of the Feldenkrais Method and it’s relationship to research on pain and injury prevention
                    Practical session in which participants will be instructed in using the Feldenkrais Method
                    Date/Time: November 23, 2019: 9am-4pm

                    Language of instruction: English

                    Location: 50 University (PRZ), Room 109</div>

            </div>
        },
        {
            id:2,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Group Mindfulness Series",
            sub_title:"Fall 2019",
            instructors:"Evelyn Tan",
            description:"Our Fall Mindfulness Series will consist of six sessions, in which University of Ottawa music students can learn from our Certified Mindfulness Trainer. Each session will allow musicians to improve their wellness and learn new habits of awareness through mindfulness exercises. Recent research suggests that Mindfulness Training can help reduce music students’ experience of performance anxiety. These sessions can include walking meditation, body scanning, QiGong, and discussion periods to help participants process emotions and thoughts that arise during the practice.",
            date_time:"Monday evenings from 6:00-7:00pm.Students will be asked to register for six weekly sessions, running from the week of October 21st until the week of November 25th.",
            location:"Music School, 50 University (PRZ), Room 208",
            attendee:"Open to Full-time University of Ottawa music students (not for university credit).",
            language:"English",
            cost:"Free",
            registration:"“Try it out” Sessions:\n" +
                "\n" +
                "~~ Register here",
            details:"To Learn more about Mindfulness Training: please visit our Services page."
        },
        {
            id:3,
            is_current:true,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Restorative Yoga for Musicians and Actors",
            sub_title:"Winter 2020",
            instructors:"Michael Fahey",
            description:"We will offer a group of four workshops to help musicians and actors learn about healthy postural habits from our certified Yoga Instructor. Our instructor is a musician and actor with 35 years of experience training performing artists. Participants will learn about bringing awareness to pelvic alignment, core stability, flexibility, and muscle imbalances specific to the individual. The instructor will employ techniques from both yoga and QiGong and emphasize mindful breathing and body awareness. The poses and movements used in this course have been chosen for their restorative functions to promote gradual postural adjustment through increased awareness, rather than to promote fitness or strength training. The small class size will allow for individualized attention for each participant, with the goal of finding strategies for each musician and actor to deal with the postural challenges posed to them by their specific instrument. The movements and principles presented would also be of benefit to music teachers and drama teachers seeking to incorporate injury prevention strategies and ergonomic playing postures into their lessons with students of any level of experience.",
            date_time:"",
            location:"",
            attendee:"All are welcome: uOttawa students and community members who are not uOttawa students",
            language:"English",
            cost:"For full-time uOttawa students: Free\n" +
                "For part-time uOttawa students and community members who are not uOttawa students: Visit the Professional Development Institute page.",
            registration:"",
            details:"For uOttawa students: Register through uOzone for all four sessions to receive 1 unit.\n" +
                "For community members who are not uOttawa students: Register through the Professional Development Institute for all four sessions."
        },
        {
            id:4,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Workshops in Global Active Stretching",
            sub_title:"",
            instructors:"",
            description:"Global Active Stretching is a stretching method designed to restore elasticity and flexibility based on the elongation of all neuromuscular coordination chains. The stretching exercises in this class involve the whole body and require the musician's active participation. Sessions will help musicians improve their flexibility and learn stretches that they can continue to use in the future to help maintain musculoskeletal health. Please wear comfortable clothing and bring a yoga mat if you have one.\n",
            date_time:"Every Tuesday between November 4-26 (four sessions total), 4:00pm-5:00pm",
            location:"University of Ottawa School of Music, Room 208",
            attendee:"All musicians (university students and community members)",
            language:"English",
            cost:"For all participants: $40 for all four sessions ($10 per session). To reserve a spot, payments must be made in cash at the Piano Lab (University of Ottawa School of Music, Room 204) by 3PM on November 4th.",
            registration:"To register, send an email to mwc@uottawa.ca",
            details:""
        },
        {
            id:5,
            is_current:true,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Musicians’ Wellness Research Study Day:",
            sub_title:<h3><a href="./Study Day Schedule.pdf" target="_blank">Download Schedule</a></h3>,
            instructors:"",
            description:"We will be hosting a Research Study Day to help promote and disseminate new research on musicians’ wellness. The subject of musicians’ wellness has received increased attention from the research community over the past several decades. Research indicates that many musicians are impacted by a variety of wellness issues. Because these issues often present unique challenges, specialized care and understanding is necessary for effective treatment. Despite increased attention, more research is still needed to better understand the effect of treatments and prevention strategies. The study day will include presentations and discussions related to current research in the field of musicians’ wellness (schedule TBA). Members of the public are also welcome to attend.",
            date_time:"Friday, March 20, 9am-5pm",
            location:"School of Music, Creator’s Space, Room 302\n",
            attendee:"Presenters have been chosen based on abstract submissions. All members of the public are welcome to attend presentations.\n",
            language:"English",
            cost:"Free",
            registration:"",
            details:""
        },
        {
            id:6,
            is_current:true,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Info Session: Auditory Health and Protection",
            sub_title:"",
            instructors:"",
            description:"In conjunction with the University of Ottawa Graduate Music Student Association (GMSA), we will be offering an info session on auditory health and protection for University students. Hearing loss affects many musicians who need to maintain auditory health for their profession. Many musicians do not seek help for their hearing loss until after they are already experiencing symptoms of permanent auditory damage. At our info session, participants will learn about risk factors for hearing loss specific to musicians, the symptoms and signs of hearing loss, as well as recommendations for hearing protection to help maintain auditory health.",
            date_time:"February 24, 11:30am-1pm",
            location:"School of Music, Creator’s Space, Room 302",
            attendee:"Free for anyone to attend",
            language:"English/French",
            cost:"",
            registration:"",
            details:""
        },
        {
            id:7,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"Wellness Day at the Gatineau Conservatoire",
            sub_title:"",
            instructors:"",
            description:"The day-long event will allow students at the Conservatoire to take three different workshops: Yoga for Musicians (with Michael Fahey), Feldenkrais for Musicians (with Jillian Beacon), and Mental Performance Skills for Musicians (with Carolyn Christie). These sessions will be free for all Conservatoire students and will provide practical skills and techniques for improving physical and/or mental wellness specifically related to music making.",
            date_time:"February 8th, 10am-5pm",
            location:"Conservatoire de musique de Gatineau\n" +
                "430 Alexandre-Taché Blvd\n" +
                "Gatineau, Quebec J9A 1M7",
            attendee:"",
            language:"Feldenkrais/Mental Skills - French\n" +
                "Yoga – English",
            cost:"",
            registration:"",
            details:""
        },
        {
            id:8,
            is_current:false,
            image:"https://piano.uottawa.ca/mwc/img/education1.jpg",
            title:"The Alexander Technique for Vocalists: A Workshop with le Chœur classique de l’Outaouais",
            sub_title:"",
            instructors:"",
            description:"Brigitte Caron will be giving a workshop on The Alexander Technique for vocalists. This workshop will be offered to members of le Chœur classique de l’Outaouais and will address aspects of posture and breathing specifically related to vocal performance.",
            date_time:"January 25th, 10am-3pm",
            location:"University of Ottawa School of Music, Room 109",
            attendee:"",
            language:"French",
            cost:"",
            registration:"",
            details:""
        }
    ]
}

function ActivityCardsCurrent(props) {

    const classes = useStyles();

    return (
        <>
            {props.activitiesData.data.map(activity=> {
                if (activity.is_current === true) return (
                    <Col md={"6"}>
                        <div key={activity.id}>
                            <Card className={classes.root} >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={activity.image}
                                        title={activity.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {activity.title}
                                        </Typography>
                                        <hr />
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                            {activity.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Col>
                )
                    }
            )}
            </>
    );
}

function ActivityCardsPast(props) {

    const classes = useStylesPast();

    return (
        <>

            {props.activitiesData.data.map(activity=>{
                if (activity.is_current === false) return (
                <Col lg="3" md={"4"} xs={"6"}>
                <div key={activity.id}>
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={activity.image}
                                title={activity.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h6">
                                    {activity.title}
                                </Typography>
                                <hr />
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                    {activity.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                </Col>
                )}
            )}

        </>
    );
}

class ActivitiesTemplate extends React.Component {
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
                            backgroundImage: 'linear-gradient(rgba(42, 68, 108, 0.33), rgba(0, 0, 0, 0.5)), url("https://piano.uottawa.ca/mwc/img/calendar.jpeg")',
                        }} className="section section-shaped ext-large">

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Activities{" "}
                                            </h1>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}

                        </section>
                        {/* 1st Hero Variation */}
                    </div>

                    <section className="section section-lg bg-gradient-lighter">
                        <Container>
                            <h2>Current (tab)</h2>
                            <hr />
                            <Row >
                                <ActivityCardsCurrent activitiesData={activityData}/>
                            </Row>
                            <h2>Ended (tab)</h2>
                            <hr />
                            <Row>
                                <ActivityCardsPast activitiesData={activityData}/>
                            </Row>
                        </Container>
                    </section>
                </main>

            </Layout>
        );
    }
}

const Activities = ({data}) => {
    return (

        <ActivitiesTemplate/>

    )
}

export default Activities