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
        maxWidth: 400,
        transition: "0.14s",
        boxShadow: "0 8px 16px -10px rgba(0,0,0,0.4)",
        "&:hover": {
            boxShadow: "0 10px 23px -11.125px rgba(0,0,0,0.95)"
        },
        margin: "25px auto",
        border:'6px solid #f2f2f2',
        borderRadius: 0
    },
    media: {
        paddingTop: "110%"
    },
    content: {
        textAlign: "left",
        padding: "10px"
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
    }
}))


const PortfolioCardStyled = (props) => {
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
                            <div className="hov_content_details hov_fadeIn_bottom">
                                <h3 className="hov_content_title"> </h3>
                                <p className="hov_content_text_director">{props.bio}</p>
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
                    >
                        <u>{props.name}</u>
                    </Typography>
                    <Divider className={classes.divider} dark />
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"p"}
                    >
                        {props.qualification}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default PortfolioCardStyled
