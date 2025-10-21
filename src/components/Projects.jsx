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
    IconButton,
} from "@mui/material";

import "aos/dist/aos.css";

import CircularProgress from '@mui/material/CircularProgress';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { GithubIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Projects = () => {

    const navigate = useNavigate();
    const projects = [
        {
            type: 'personal',
            title: "Full-stack Social & Blogging Application",
            description: `A full-stack social media application inspired by Instagram, built with React and Express.js, using MongoDB for a live database. The platform allows users to share photos, follow others, and interact through likes and comments. It also features user authentication, admin role management, and a responsive interface for creating, moderating, and managing content.`,
            languages: ['ExpressJS', 'NodeJS', 'JWT', 'MongoDB', 'ReactJS', 'Material UI'],
            link: "https://blog-frontend-4cy2.onrender.com/signup",
            github: 'https://github.com/maxl09/blog-backend',
            mainImage: '/images/screenshot-2.png',
        },
        {
            type: 'work',
            title: "Productive Cloud Solutions",
            description: '',
            languages: ['WordPress', 'Cornerstone', 'HTML', 'CSS', 'JavaScript'],
            link: "https://productivecloudsolutions.com",
            mainImage: '/images/pcs.png',
        },
        {
            type: 'work',
            title: "Black Researcher",
            description: '',
            languages: ['ReactJS', 'JavaScript', 'CSS', 'Material UI', 'GraphQL'],
            link: "https://blackresearcher.com",
            mainImage: '/images/blackresearcher.png',
        },
        {
            type: 'work',
            title: "ALICE AI Systems",
            description: '',
            languages: ['WordPress', 'Cornerstone', 'HTML', 'CSS', 'JavaScript'],
            link: "https://aliceaisystems.com",
            mainImage: '/images/aliceai.png',
        },
        {
            type: 'work',
            title: "The Band Melange",
            description: '',
            languages: ['WordPress', 'Cornerstone', 'HTML', 'CSS', 'JavaScript'],
            link: "https://thebandmelange.com",
            mainImage: '/images/thebandmelange.png',
        },
        {
            type: 'work',
            title: "Money In The Trailer",
            description: '',
            languages: ['WordPress', 'Cornerstone', 'HTML', 'CSS', 'JavaScript'],
            link: "https://moneyinthetrailer.com",
            mainImage: '/images/moneyinthetrailer.png',
        },
        {
            type: 'work',
            title: "Ridgecrest Ventures",
            description: '',
            languages: ['WordPress', 'Cornerstone', 'HTML', 'CSS', 'JavaScript'],
            link: "https://ridgecrestventures.com",
            mainImage: '/images/ridgecrest.png',
        },
        // {
        //     title: "Project #2",
        //     description: "Pending...",
        //     languages: ['WordPress'],
        //     link: "#",
        //     github: '',
        // },
        // {
        //     title: "Project #3",
        //     description: "Pending...",
        //     languages: ['HTML', 'CSS', 'JavaScript'],
        //     link: "#",
        //     github: '',
        // }
        // ,
        // {
        //     title: "Project #4",
        //     description: "Pending...",
        //     languages: ['Flutter', 'Dart'],
        //     link: "#",
        //     github: '',
        // },
    ];

    return (
        <Container id="projects" sx={{ width: '100%', paddingTop: 15, minHeight: '100vh' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 3, textAlign: 'center' }} >
                <span style={{
                    background: 'linear-gradient(90deg, #00ff99, #1f8053)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Featured Projects
                </span>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
                <span style={{
                    background: 'linear-gradient(180deg,  #1f8053, #00ff99)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Personal Projects
                </span>
            </Typography>
            <Grid container spacing={3}>
                {projects.filter(project => project.type === 'personal').map((project, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index} data-aos="zoom-in">
                        <Card sx={{
                            cursor: 'pointer',
                            height: "100%",
                            backgroundColor: 'background.default',
                            border: '2px solid rgba(31, 128, 83, 0.55)',
                            borderRadius: '10px',
                            padding: '10px',
                            transition: '0.7s scale ease, 0.5s border-color ease, 0.5s background-color ease',
                            '&:hover': {
                                scale: '1.04',
                                borderColor: 'rgba(31, 128, 83, 1)',
                                bgcolor: 'rgba(31, 128, 83, 0.13)'
                            }
                        }}>
                            <CardContent>
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    style={{ width: '100%', objectFit: 'cover', border: '2px solid rgba(31, 128, 83, 0.55)', borderRadius: '5px', marginBottom: '20px' }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 1 }}>
                                    {project.title}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                                    <Typography variant="body2" color="inherit" sx={{ color: 'rgb(201, 201, 201)' }}>
                                        {project.description}
                                    </Typography>
                                    {project.description.toLowerCase().includes('pending') &&
                                        <CircularProgress size={20} />}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                    {project.languages.map((lang) => (
                                        <Box sx={{ backgroundColor: 'rgb(12, 22, 17)', borderRadius: '15px', width: 'fit-content', padding: '3px 12px' }}>
                                            <Typography sx={{ color: 'rgb(63, 208, 140)' }}>
                                                {lang}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '10px' }}>
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: 'rgb(48, 245, 153)',
                                        textTransform: 'capitalize',
                                        border: '1px solid rgb(48, 245, 153)',
                                        borderRadius: '25px',
                                        paddingX: '20px',
                                        '&:hover': {
                                            color: 'white',
                                            borderColor: 'white'
                                        }
                                    }}
                                >
                                    View Project
                                    <KeyboardDoubleArrowRightIcon />
                                </Button>

                                <IconButton component='a' href={project.github} target="_blank" sx={{ border: '1px solid rgb(143, 143, 143)' }}>
                                    <GithubIcon strokeWidth={2.75} stroke="white" />
                                </IconButton>

                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" sx={{ fontWeight: 700, marginTop: 7, marginBottom: 2 }}>
                <span style={{
                    background: 'linear-gradient(180deg,  #1f8053, #00ff99)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Work Projects
                </span>
            </Typography>
            <Grid container spacing={3}>
                {projects.filter(project => project.type === 'work').map((project, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index} data-aos="zoom-in">
                        <Card sx={{
                            cursor: 'pointer',
                            height: "100%",
                            backgroundColor: 'background.default',
                            border: '2px solid rgba(31, 128, 83, 0.55)',
                            borderRadius: '10px',
                            padding: '10px',
                            transition: '0.7s scale ease, 0.5s border-color ease, 0.5s background-color ease',
                            '&:hover': {
                                scale: '1.04',
                                borderColor: 'rgba(31, 128, 83, 1)',
                                bgcolor: 'rgba(31, 128, 83, 0.13)'
                            }
                        }}>
                            <CardContent>
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    style={{ width: '100%', objectFit: 'cover', border: '2px solid rgba(31, 128, 83, 0.55)', borderRadius: '5px', marginBottom: '20px' }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 1 }}>
                                    {project.title}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                                    <Typography variant="body2" color="inherit" sx={{ color: 'rgb(201, 201, 201)' }}>
                                        {project.description}
                                    </Typography>
                                    {project.description.toLowerCase().includes('pending') &&
                                        <CircularProgress size={20} />}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                    {project.languages.map((lang) => (
                                        <Box sx={{ backgroundColor: 'rgb(12, 22, 17)', borderRadius: '15px', width: 'fit-content', padding: '3px 12px' }}>
                                            <Typography sx={{ color: 'rgb(63, 208, 140)' }}>
                                                {lang}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '10px' }}>
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: 'rgb(48, 245, 153)',
                                        textTransform: 'capitalize',
                                        border: '1px solid rgb(48, 245, 153)',
                                        borderRadius: '25px',
                                        paddingX: '20px',
                                        '&:hover': {
                                            color: 'white',
                                            borderColor: 'white'
                                        }
                                    }}
                                >
                                    View Project
                                    <KeyboardDoubleArrowRightIcon />
                                </Button>
                                {/* <IconButton component='a' href={project.github} target="_blank" sx={{ border: '1px solid rgb(143, 143, 143)' }}>
                                    <GithubIcon strokeWidth={2.75} stroke="white" />
                                </IconButton> */}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                color="inherit"
                href="#contact"
                sx={{
                    width: 'fit-content',
                    marginTop: 5,
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
                }}>
                Contact <ArrowDownwardIcon className="downward-icon" sx={{ width: '20px', marginLeft: 0.5, marginBottom: 0.3 }} />
            </Button>
        </Container >
    )
}

export default Projects
