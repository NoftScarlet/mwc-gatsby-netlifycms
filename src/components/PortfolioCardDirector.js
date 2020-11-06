import React from "react";

import {makeStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((muiBaseTheme) => ({
    card: {
        maxWidth: 390,
        minWidth: 305,
        transition: "0.14s",
        boxShadow: "0 8px 16px -10px rgba(0,0,0,0.4)",
        "&:hover": {
            boxShadow: "0 10px 23px -11.125px rgba(0,0,0,0.95)"
        },
        margin: '20px auto',
        borderRadius: 0
    },
    media: {
        paddingTop: "110%"
    },
    content: {
        textAlign: "left",
        padding: "10px",
        backgroundColor: "#238686"
    },
    divider: {
        margin: `${muiBaseTheme.spacing.unit * 0.5}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -muiBaseTheme.spacing.unit
        }
    },
    smallP: {
        fontSize: "10.5pt",
        whiteSpace:"pre-wrap"
    }
}))


const PortfolioCardDirector = (props) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card } >
                {
                    props.bio
                        ?
                        <div className="hov_content">
                        <div className="hov_content_overlay"> </div>
                            <CardMedia
                                className={classes.media}
                                image={props.image}
                            />
                            <div className="hov_content_details">
                                <h3 className="hov_content_title"> </h3>
                                <div className={`${classes.smallP} hov_content_text text-white`}>
                                    <div className={`${classes.heading} text-white`}>Education/Training:</div>{props.bio.eduTraining}<br />
                                    {props.bio.researchInterest ? <><div className={`${classes.heading} text-white mt-1`}>Research Interest:</div>{props.bio.researchInterest} </>: ''}
                                    <div className={`${classes.heading} text-white mt-1`}>Contact: </div>{props.bio.contact}<br />
                                    <div className={`${classes.heading} text-white mt-1`}>For more information: </div><a href={props.bio.moreInfo}>Check here</a>
                                </div>
                            </div>
                        </div>
                        :
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                        />
                }
                <CardContent className={classes.content}>
                    <Typography
                        variant={"h5"}
                        gutterBottom
                        className={"text-white"}
                    >
                        <u>{props.name}</u>
                    </Typography>
                    <Divider className={classes.divider} dark />
                    <div
                        className={`${classes.smallP} text-white`}
                    >
                        {props.qualification}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default PortfolioCardDirector
