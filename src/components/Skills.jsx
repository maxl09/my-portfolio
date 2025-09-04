import React, { Fragment, useEffect, useState } from "react";
import {
    Typography,
    Button,
    Container,
    Grid,
    Divider,
} from "@mui/material";

import "aos/dist/aos.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Skills = () => {
    const skills =
    {
        'Frontend': [
            { id: 1, title: 'HTML', icon: '/images/html-icon.svg' },
            { id: 2, title: 'CSS', icon: '/images/css-icon.svg' },
            { id: 3, title: 'JavaScript', icon: '/images/js-icon.svg' },
            { id: 4, title: 'ReactJS', icon: '/images/react-icon.png' },
            { id: 5, title: 'Tailwind', icon: '/images/tailwind-icon.png' },
            { id: 6, title: 'MaterialUI', icon: '/images/materialui-icon.png' },
            { id: 7, title: 'Flutter', icon: '/images/flutter-icon.png' }
        ],
        'Backend': [
            { id: 1, title: 'NodeJS', icon: '/images/node-icon.png' },
            { id: 2, title: 'ExpressJS', icon: '/images/express-icon.svg' },
            { id: 3, title: 'Python', icon: '/images/python-icon.png' },
        ],
        'Infrastructure & Tools': [
            { id: 1, title: 'AWS', icon: '/images/aws-icon.png' },
            { id: 2, title: 'SQL', icon: '/images/sql-icon.svg' },
            { id: 3, title: 'MongoDB', icon: '/images/mongodb-icon.svg' },
        ],
    }

    return (
        <Container id="skills" sx={{ width: '100%', paddingTop: 15, minHeight: '100vh' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 5, textAlign: 'center' }} >
                <span style={{
                    background: 'linear-gradient(90deg, #00ff99, #1f8053)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Skills</span>
            </Typography>
            <Grid container spacing={4}>
                {Object.entries(skills).map(([category, items]) => (
                    <Grid size={{ xs: 12, md: 4 }} sx={{ background: 'rgb(12, 12, 12)', border: '1px solid rgb(42, 42, 42)', borderRadius: '10px', textAlign: 'center', paddingX: '20px', paddingTop: '30px', paddingBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h5" fontWeight={'bold'} data-aos="zoom-in"
                            sx={{
                                background: 'linear-gradient(90deg, #1f8053, #00ff99)',
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                            {category}
                        </Typography>
                        <Divider sx={{ background: '#00ff99', height: 2, width: '20%', marginTop: 2, marginBottom: 4 }} />
                        <Grid container spacing={{ xs: 3, sm: 5 }}>
                            {items.map((skill, index) => (
                                <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.2 }} data-aos="zoom-in">
                                    <img src={skill.icon} alt={skill.title} style={{ width: '30px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 400, color: 'white' }}>{skill.title}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Button color="inherit" href="#projects" sx={{
                width: 'fit-content',
                marginTop: 4,
                fontSize: '16px',
                border: '1px solid rgba(60,60,60,1)',
                borderRadius: '25px',
                paddingX: 3,
                background: 'rgba(60,60,60,0.2)',
                boxShadow: "0 0 15px #1f8053",
                transition: "box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out",
                '&:hover': {
                    borderColor: '#1f8053',
                    color: "inherit",
                    boxShadow: "0 0 25px #1f8053",
                    "& .downward-icon": {
                        animation: "arrowJumpDownward 0.5s ease forwards",
                    }
                },
                "& .downward-icon": {
                    display: "inline-block",
                },
                "@keyframes arrowJumpDownward": {
                    "0%": { transform: "translateY(0)", opacity: 1 },
                    "40%": { transform: "translateY(10px)", opacity: 0 },
                    "60%": { transform: "translateY(-10px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            }}>Projects <ArrowDownwardIcon className="downward-icon" sx={{ width: '20px', marginLeft: 0.5, marginBottom: 0.3 }} /></Button>
        </Container>
    )
}

export default Skills
