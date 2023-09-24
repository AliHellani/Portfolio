import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import pc from '../images/laptopCode.png'
import './Header.css';

const useStyles = makeStyles(theme => ({
    image: {
        width: '80%',
        height: '80%',
        maxWidth: 200,
        borderRadius: '5%',
        marginTop: '4vh',
        marginBottom: '4vh',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        flexGrow: 1,
    },
    title: {
        flexGrow: 1
    },
     name:{
        fontSize: '2.2rem',
     }
}));

export default function Header() {
    const [theme, setTheme] = useState(true);
    const classes = useStyles();
    const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
    const appliedTheme = createMuiTheme(theme ? light : dark);
    return (
        <ThemeProvider theme={appliedTheme}>
            <Paper elevation={0}>
                <div className={classes.root} style={{ backgroundColor: appliedTheme.palette.background.default, 
                    color: appliedTheme.palette.text.primary }}>
                    <Typography className={classes.title} variant="h3">
                        <IconButton edge="start" aria-label="menu">
                            <img className={classes.image} src={pc} alt='LaptopCode' />
                        </IconButton>
                    </Typography>
                    <br /><br />
                    <Typography className={classes.name} component="div" sx={{ flexGrow: 1, fontSize: 50, fontFamily: 'Times New Roman', marginTop: '4vh', marginBottom: '4vh' }}>
                        Ali Hellani
                    </Typography>
                    <br /> <br />
                    <Typography component="div" sx={{ flexGrow: 1, fontSize: 30, fontFamily: 'Helvetica, Arial, sans-serif', marginTop: '4vh', marginBottom: '4vh' }}>
                        {"WEB DEVELOPER".split("").map((char, index) => (
                            <span key={index} className="bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                                {char}
                            </span>
                        ))}
                    </Typography>
                    <br /> <br />
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="mode"
                        onClick={() => setTheme(!theme)}
                    >
                        {icon}
                    </IconButton>
                    
                    <br/><br/>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export const light = {
    palette: {
        type: "light",
        background: {
            default: "beige"
        },
        text: {
            primary: "black"
        }
    }
};

export const dark = {
    palette: {
        type: "dark",
        background: {
            default: "gray"
        },
        text: {
            primary: "white" 
        }
    }
};
