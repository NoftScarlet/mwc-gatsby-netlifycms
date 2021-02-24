import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Row, Col, Container, Button } from "reactstrap";
import geImage from "../img/geoff.jpg";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [opacity, setOpacity] = React.useState(0);

  useEffect(() => {
    if (value === index) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
    //console.log('Hook - ComponentDidMount');
  });

  return (
    <div
      className={"practitioner-panel"}
      style={{
        "-webkit-transition": "opacity 1.4s ease-out",
        opacity: `${opacity}`,
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="pt-3">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  opacity: PropTypes.string,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: '15px'
  },
  cardImage: {
    height: "400px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    "@media (max-width: 767px)": {
      width: "50%",
    },
  },
  cardImageContainer: {
    width: "30%",
    border: "15px solid var(--lighter)",
  },
  detailCard: {
    width: "70%",
    border: "15px solid var(--lighter)",
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      {props.cardItems.map((item, index) => (
        <div key={index + "-prz"} className={classes.cardContainer} >
          {index % 2 == 0 ? (
            <div className={classes.cardImageContainer}>
              <div
                className={classes.cardImage}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <Button className={`btn-warning border-radius-0 `} style={{width:'100%'}}>
                Contact Info
              </Button>
            </div>
          ) : null}

          <Card
            className={`${classes.detailCard} border-radius-0 practitioner-card`}
          >
            <div>
              <Typography component="h6" variant="h5">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.role}
              </Typography>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Personal Info" {...a11yProps(0)} />
                  <Tab label="Video Introduction" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis="x"
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className={`${classes.details} `}>
                    <Container>
                      <Row>
                        <Col md={"6"}>
                          <div className={classes.content}>
                            <strong>Language: </strong>
                            {item.language}
                            <br />
                            <strong>Location: </strong>
                            {item.location}
                            <br />
                            <strong>Service: </strong>
                            {item.serviceProvided}
                            <br />
                            <strong>Specialization: </strong>
                            <p>{item.specialization}</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <strong>Education/Training: </strong>
                            <p>{item.eduTraining}</p>
                            <strong>Experience with Musicians: </strong>
                            <p>{item.experienceWithMusicians}</p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </TabPanel>
                

                <TabPanel value={value} index={2} dir={theme.direction}>
                <div className={classes.controls}>
                      <IconButton aria-label="previous">
                        <SkipPreviousIcon />
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                      </IconButton>
                      <IconButton aria-label="next">
                        <SkipNextIcon />
                      </IconButton>
                    </div>
                </TabPanel>
              </SwipeableViews>
            </div>
          </Card>
        
          {index % 2 !== 0 ? (
            <div className={classes.cardImageContainer}>
              <div
                className={classes.cardImage}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <Button className={`btn-warning border-radius-0 `} style={{width:'100%'}}>
                Contact Info
              </Button>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
