import React from "react";
import { Typography } from '@mui/material';
import { DiJava } from 'react-icons/di';
import { DiPhp } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { SiHibernate } from 'react-icons/si';
import { DiIntellij } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { VscSourceControl } from 'react-icons/vsc';
import { DiResponsive } from 'react-icons/di';
import './Skills.css';

const skills = [
    { name: 'Java', Icon: DiJava },
    { name: 'PHP', Icon: DiPhp },
    { name: 'SpringBoot', Icon: SiSpringboot },
    { name: 'Hibernate', Icon: SiHibernate },
    { name: 'IntelliJ', Icon: DiIntellij },
    { name: 'HTML5', Icon: DiHtml5 },
    { name: 'CSS3', Icon: DiCss3 },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Angular', Icon: SiAngular },
    { name: 'React', Icon: SiReact },
    { name: 'MSSQL', Icon: SiMicrosoftsqlserver },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Git', Icon: VscSourceControl },
    { name: 'Responsive', Icon: DiResponsive },
];

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-header">
                <Typography sx={{ fontSize: 25, paddingTop: '7vh', textAlign: 'center', fontFamily: 'monospace' }} color="white">
                    Skills
                </Typography>
            </div>
            <div className="skills-page">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <skill.Icon className="skill-icon" />
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};
