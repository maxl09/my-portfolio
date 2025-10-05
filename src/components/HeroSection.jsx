import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HeroSection = () => {
    return (
        <Box
            id='home'
            sx={{
                textAlign: "center",
                py: 0,
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
            data-aos="fade-up"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            >
                <source src="/video-bg/hero-section.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay for Readability */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 1,
                }}
            />

            {/* Top Fade (to blend with header) */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    zIndex: 2,
                }}
            />

            {/* Bottom Fade (to blend with next section) */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    background:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    zIndex: 2,
                }}
            />
            {/* Foreground Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: "bold", whiteSpace: "pre", fontSize: { xs: '40px', sm: '55px' } }}>
                    <Typewriter
                        words={["Hi, it's Phuoc"]}
                        loop={1}
                        cursor={false}
                        cursorStyle="|"
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>

                <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 4, fontWeight: 700 }}>
                    I'm a <span style={{
                        background: "linear-gradient(90deg, #00ff99, #1f8053)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>Front-End Web Developer</span>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button href="https://github.com/maxl09" target="_blank" sx={{ padding: 1, minWidth: 0, border: '1px solid #1f8053', borderRadius: '50%', transition: '0.3s ease-in-out', ":hover": { color: 'white', borderColor: '#1f8053', background: '#1f8053', boxShadow: '0 0 25px #1f8053', transform: 'translateY(-5px)scale(1.2)' } }}>
                        <GitHubIcon />
                    </Button>
                    <Button href="https://www.linkedin.com/in/max-ly/" target="_blank" sx={{ padding: 1, minWidth: 0, border: '1px solid #1f8053', borderRadius: '50%', transition: '0.3s ease-in-out', ":hover": { color: 'white', borderColor: '#1f8053', background: '#1f8053', boxShadow: '0 0 25px #1f8053', transform: 'translateY(-5px)scale(1.2)' } }}>
                        <LinkedInIcon />
                    </Button>
                    <Button href="mailto:maxdev925@gmail.com" target="_blank" sx={{ padding: 1, minWidth: 0, border: '1px solid #1f8053', borderRadius: '50%', transition: '0.3s ease-in-out', ":hover": { color: 'white', borderColor: '#1f8053', background: '#1f8053', boxShadow: '0 0 25px #1f8053', transform: 'translateY(-5px)scale(1.2)' } }}>
                        <EmailIcon />
                    </Button>
                </Box>
                <Button color="inherit" href="#about" sx={{
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
                }}>About Me <ArrowDownwardIcon className="downward-icon" sx={{ width: '20px', marginLeft: 0.5, marginBottom: 0.3 }} /></Button>
            </Box>

        </Box>
    )
}

export default HeroSection
