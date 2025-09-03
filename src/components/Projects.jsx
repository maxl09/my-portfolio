import React, { Fragment, useEffect, useState } from "react";
import {
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
} from "@mui/material";

import "aos/dist/aos.css";

import CircularProgress from '@mui/material/CircularProgress';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Projects = () => {

    const projects = [
        {
            title: "Project #1",
            description: "Pending...",
            languages: ['React', 'AWS'],
            link: "#"
        },
        {
            title: "Project #2",
            description: "Pending...",
            languages: ['WordPress'],
            link: "#"
        },
        {
            title: "Project #3",
            description: "Pending...",
            languages: ['HTML', 'CSS', 'JavaScript'],
            link: "#"
        }
        ,
        {
            title: "Project #4",
            description: "Pending...",
            languages: ['Flutter', 'Dart'],
            link: "#"
        },
    ];

    return (
        <Container id="projects" sx={{ width: '100%', paddingTop: 15, height: 'calc(100vh-250px)' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 5, textAlign: 'center' }} >
                <span style={{
                    background: 'linear-gradient(90deg, #00ff99, #1f8053)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Featured Projects</span>
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index} data-aos="zoom-in">
                        <Card sx={{
                            height: "100%",
                            backgroundColor: 'background.default',
                            border: '2px solid rgba(31, 128, 83, 0.55)',
                            borderRadius: '10px',
                            padding: '10px',
                            transition: '0.3s transform ease',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                                borderColor: 'rgba(31, 128, 83, 1)'
                            }
                        }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 700 }}>{project.title}</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                                    <Typography variant="h7" color="inherit" sx={{ color: 'rgb(183, 183, 183)' }}>
                                        {project.description}
                                    </Typography>
                                    {project.description.toLowerCase().includes('pending') &&
                                        <CircularProgress size={20} />}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1 }}>
                                    {project.languages.map((lang) => (
                                        <Box sx={{ backgroundColor: 'rgb(12, 22, 17)', borderRadius: '15px', width: 'fit-content', padding: '3px 12px' }}>
                                            <Typography sx={{ color: 'rgb(63, 208, 140)' }}>
                                                {lang}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgb(48, 245, 153)',
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            color: 'white',
                                        }
                                    }}
                                >
                                    View Project
                                    <KeyboardDoubleArrowRightIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects
