import React from "react";
import tipsImg from '../../static/img/tips.jpg'
import Layout from '../components/Layout'
// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/QueueMusic';
import PersonPinIcon from '@material-ui/icons/MusicNote';
import HelpIcon from '@material-ui/icons/MusicVideo';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));



function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Thoughts for music students #1:" icon={<PhoneIcon/>} {...a11yProps(0)} />
                    <Tab label="Thoughts for music students #2" icon={<FavoriteIcon/>} {...a11yProps(1)} />
                    <Tab label="Thoughts for arts administrators ( and performers too ) #3"
                         icon={<PersonPinIcon/>} {...a11yProps(2)} />
                    <Tab label="Thoughts for musicians #3" icon={<HelpIcon/>} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <h3 className="code-line" data-line-start="5" data-line-end="6"><a
                    id="Thoughts_for_music_students_2_5"></a>Thoughts for music students #1:</h3>
                <p >Almost all of the students I have ever had in my studio have seemed driven to levels of very high
                    productivity, as I am myself. I think that we have to learn to let this go now, for the entire time of
                    the self-isolation for sure. These are not normal times and even if we are lucky enough to have income
                    and housing security, the stress of the unknown ( the length of time we will have to be isolated ) is
                    enormous. As musicians, we are highly social creatures in that we all work in a group, except for some
                    solo instruments like piano and organ. Do not undervalue the toll it takes on you to be isolated
                    musically as a result of this mess. Keep reaching out and connecting online with your colleagues and
                    keep an eye out for that one person who may be struggling. This teamwork you are investing in now with
                    your peers is something you will look back at with great pride in the future. It is an essential service
                    in itself as well as empowering for the individual.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3 className="code-line" data-line-start="5" data-line-end="6"><a
                    id="Thoughts_for_music_students_2_5"></a>Thoughts for music students #2:</h3>
                <h5 className="code-line" data-line-start="6" data-line-end="7"><a id="Motivation_6"></a>Motivation</h5>
                <p className="has-line-data" data-line-start="7" data-line-end="9">Most of my students have told me that
                    their usually high levels of motivation to practice have disappeared. Students who normally enjoy
                    practicing and stick to lofty practice goals just don’t feel it right now.<br/>
                    Motivation is a very individual thing but here are a few ideas that you may find helpful.</p>
                <p className="has-line-data" data-line-start="10" data-line-end="11">Above all, remind yourself that we
                    are not in normal times right now. Probably your recital or jury was postponed to the fall or
                    cancelled outright, or maybe that summer event you worked so hard to get into has been cancelled.
                    Without a clear upcoming performance, it can be pretty hard for many people to get focused and enjoy
                    practising.</p>
                <p className="has-line-data" data-line-start="12" data-line-end="13">At best, try to remember what you
                    used to find fun about practicing. What gave you pure joy when you played? Is there a new piece that
                    you have been dying to get your hands on? With our goal events gone, what sort of repertoire would
                    you simply enjoy working on? Try that.</p>
                <p className="has-line-data" data-line-start="14" data-line-end="15">No luck with that? Think about how
                    much better we sound when we are in shape. The better we sound, the more fun practicing is. Start
                    small; 5 minutes of practice then a break. Does that work? Add another 5 etc… Be kind to yourself,
                    these are not normal times.</p>
                <p className="has-line-data" data-line-start="16" data-line-end="17">No luck with that? How about a
                    self-bribe? Practice well for 5 minutes then do something else you enjoy. Make cookies, walk
                    outside, Zoom a friend - whatever. The key is to start small and increase the practice time a
                    little.</p>
                <p className="has-line-data" data-line-start="18" data-line-end="19">A big issue may be that you are
                    finding it hard to concentrate. More on that later this week. Remember - start small!</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3 className="code-line" data-line-start="20" data-line-end="21"><a
                    id="Thoughts_for_arts_administrators__and_performers_too__3_20"></a>Thoughts for arts administrators
                    ( and performers too ) #3</h3>
                <h5 className="code-line" data-line-start="21" data-line-end="22"><a id="Motivation_21"></a>Motivation
                </h5>
                <p className="has-line-data" data-line-start="22" data-line-end="25">It is the arts administrators who
                    do all the painstaking work behind the scenes so we performers can do what we love - perform.<br/>
                        Administrators, like performers, have had their concerts cancelled and are working in isolation
                        at home. Just as tough for an administrator as for a performer.<br/>
                        Maybe it is hard for you to get into your work these days. With concerts cancelled in the near
                        future, the short term time pressure is different and the future somewhat murky.</p>
                <p className="has-line-data" data-line-start="26" data-line-end="27">In my post directed at music
                    students I did not include the role of inspiration in motivation.</p>
                <p className="has-line-data" data-line-start="28" data-line-end="29">What originally inspired you to get
                    into arts admin? Was it the joy of seeing your hard work realized on stage? Was it the pleasure of a
                    job well done? Paying the rent? ( same for performers on occasion, nothing judgemental here! ).</p>
                <p className="has-line-data" data-line-start="30" data-line-end="31">What could motivate you now? ( see
                    my other post )</p>
                <p className="has-line-data" data-line-start="32" data-line-end="33">When I was performing I would draw
                    inspiration from the importance of doing a good job for my colleagues, serving the composer’s
                    vision, things like that. When motivation was very low, I would listen to music to become inspired;
                    kd lang, Maria Callas, and Dolly Parton were the most uplifting for me, although a Pahud or
                    Baxtresser recording was also fabulous.</p>
                <p className="has-line-data" data-line-start="34" data-line-end="35">Think outside the box here.
                    Watching my former OSM admin colleague dance online ( you know who you are! ) is a great example of
                    this.</p>
                <p className="has-line-data" data-line-start="36" data-line-end="37">Above all, be kind to yourself
                    these days as you adjust to life as we never expected it to be. And, thanks so much for all you do
                    for us performers.</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h3 className="code-line" data-line-start="38" data-line-end="39"><a
                    id="Thoughts_for_musicians_3_38"></a>Thoughts for musicians #3</h3>
                <h5 className="code-line" data-line-start="39" data-line-end="40"><a
                    id="Concentrationgoalsetting_39"></a>Concentration/goal-setting</h5>
                <p className="has-line-data" data-line-start="40" data-line-end="41">Many musicians have told me that
                    they are unable to concentrate these days when they try to practice. Once again, these issues and
                    potential solutions for them are highly individual, but here are a couple of things to try:</p>
                <ol>
                    <li className="has-line-data" data-line-start="42" data-line-end="45">
                        <p className="has-line-data" data-line-start="42" data-line-end="44">Set shorter practice time
                            goals. Do you think you can focus for 5 minutes? Try that, then add another 5 minutes,
                            etc…<br/>
                                Think small for a while. It can be overwhelming to think, “I have to practice for 4
                                hours” but manageable to think, “I can do 5 minutes.”</p>
                    </li>
                    <li className="has-line-data" data-line-start="45" data-line-end="47">
                        <p className="has-line-data" data-line-start="45" data-line-end="46">Set tighter practice goals
                            for these shorter periods. Try to focus on only one defined element at a time ( i.e.: only
                            rhythm, only intonation etc… )</p>
                    </li>
                    <li className="has-line-data" data-line-start="47" data-line-end="49">
                        <p className="has-line-data" data-line-start="47" data-line-end="48">Try keeping a log of your
                            practicing, either in detail or very general ( whatever works best for you ). Attempt to
                            increase your practice day just a little bit either daily or weekly.</p>
                    </li>
                    <li className="has-line-data" data-line-start="49" data-line-end="51">
                        <p className="has-line-data" data-line-start="49" data-line-end="50">Take practicing one day at
                            a time. It sounds trite but it is so true, especially these days. Had a bad day yesterday?
                            Try again today.</p>
                    </li>
                    <li className="has-line-data" data-line-start="51" data-line-end="53">
                        <p className="has-line-data" data-line-start="51" data-line-end="52">What time of day do you do
                            your best work? Is it possible to plan to practice for 5 minutes then, to get back into the
                            game?</p>
                    </li>
                </ol>
                <p className="has-line-data" data-line-start="53" data-line-end="56">Once again, think about what
                    inspires you to play your instrument.<br/>
                        -What was the last concert you attended that made you run to the practice room, happy to
                        practice? Can you find either the pieces or the performers online and listen to them?<br/>
                        -does a walk or run outside help you to be inspired?</p>
                <p className="has-line-data" data-line-start="57" data-line-end="59">Is it hard to see playing music as
                    important these days, as first responders and essential service people risk their lives on the front
                    lines?<br/>
                        My guess is that it is artists who keep these amazingly brave people sane when the world is
                        upside down. Be proud of what you do because it is also an essential service.</p>
            </TabPanel>
        </div>
    );

}


class TipsTemplate extends React.Component {
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

                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-shaped ext-large" style={{
                            backgroundImage: `linear-gradient(rgba(114, 105, 80, 0.37), rgba(0, 0, 0, 0.5)), url(${tipsImg})`,
                        }}>

                            <Container className="py-lg-md d-flex" style={{maxWidth:"1230px"}}>
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="12">
                                            <h1 className="display-3 text-white">
                                                Helpful Tips for Musicians / Performers during Social Isolation{" "}
                                            </h1>
                                            <h4 className="display-5 text-white">
                                                We believe these are helpful to you.
                                            </h4>
                                        </Col>

                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}

                        </section>
                        {/* 1st Hero Variation */}
                    </div>

                    <section className="section section-lg">
                        <Container style={{maxWidth:"1150px"}} >

                            <ScrollableTabsButtonForce />
                        </Container>
                    </section>
                </main>
            </Layout>
        );
    }
}

const Tips = ({data}) => {
    return (
        <TipsTemplate/>
    )
}

export default Tips