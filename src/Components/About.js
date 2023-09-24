import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import myImage from '../images/me.JPG';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: '5vh',
        marginTop: 0,
        padding: 'auto',
        gap: '16px',
    },
    image: {
        width: '100%',
        height: '250px',
        maxWidth: 200,
        borderRadius: '5%',
    },
    icons: {
        display: 'flex',
        gap: '16px',
    },
    aboutme: {
        paddingTop: '7vh',
        textAlign: 'center',
    },

    cardImg: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '22vw',
        wordWrap: 'breakWord',
        backgroundClip: 'border-box',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '.25rem',
        marginRight: '10vw',
        marginTop: '3vh',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    },
    cardText: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        wordWrap: 'breakWord',
        backgroundClip: 'border-box',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '1.5rem',
        lineHeight: '4vh',
        boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
    

    },
}));

export default function About( ) {
    const classes = useStyles();
    return (
        <Box >
            <Box >
                <Typography sx={{fontSize: 20, paddingTop: '7vh',textAlign: 'center',fontFamily:'monospace'}} color="black">
                    ABOUT ME
                </Typography>
            </Box>
            <Box className={classes.root} >
                <Box className={classes.cardImg} >
                    <img className={classes.image} src={myImage} alt='Me' />
                    <Box className={classes.icons}>
                        <Icon
                            icon={angularIcon}
                            style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                        />
                        <Icon
                            icon={reactIcon}
                            style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                        />
                    </Box>
                </Box>
                <Typography variant="body1">
                    <Card className={classes.cardText} sx={{ miniWidth: 275, marginTop:'4vh',marginBottom:'4vh' }}>
                        <CardContent>
                            <Typography sx={{ fontFamily:'cursive', fontSize:20 }} color="black" gutterBottom>
                                Hi :)
                            </Typography>
                            <Typography  sx={{ fontFamily:'Georgia',fontSize:15 }}>
                            👋 Hello, I’m Ali Hellani.I specialize in working with the latest front-end frameworks like Angular and React.
                             What you’re seeing now is a portfolio template. If you find this portfolio template useful,
                             please give it a ⭐ to make it more recognizable for other users. Thank you for your support! 💜

                            </Typography>
                        </CardContent>
                    </Card>
                </Typography>
            </Box>
        </Box>

    )
};
