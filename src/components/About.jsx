import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const About = () => {
    return (
        <Container id="about" sx={{ padding: { xs: 5, sm: 20 }, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-aos="fade-right">
            <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                <span style={{
                    background: 'linear-gradient(90deg, #00ff99, #1f8053)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>About Me</span>
            </Typography>
            <Typography sx={{ typography: { xs: 'body2', md: 'h6' } }} color="inherit">
                I’m a passionate <span style={{ fontWeight: 700 }}>Front-End Web Developer</span> with over <span style={{ fontWeight: 700 }}>3 years</span> of experience building modern, responsive, and user-centric websites and applications. My core expertise lies in <span style={{ fontWeight: 700 }}>HTML, CSS, and JavaScript</span>, with advanced proficiency in <span style={{ fontWeight: 700 }}>ReactJS</span> for creating dynamic, component-driven interfaces, <span style={{ fontWeight: 700 }}>Flutter</span> for developing high-quality cross-platform mobile apps, and <span style={{ fontWeight: 700 }}>WordPress</span> for versatile content management solutions.
            </Typography>
            <Typography sx={{ typography: { xs: 'body2', md: 'h6' }, marginY: 3 }} color="inherit">
                I specialize in crafting visually <span style={{ fontWeight: 700 }}>appealing, intuitive, and performance-optimized digital experiences</span> that work seamlessly across <span style={{ fontWeight: 700 }}>devices and browsers</span>. From translating complex UI/UX designs into clean, maintainable code to integrating <span style={{ fontWeight: 700 }}>APIs</span> and optimizing loading times, I approach each project with an emphasis on <span style={{ fontWeight: 700 }}>usability, accessibility, and scalability</span>.
            </Typography>
            <Typography sx={{ typography: { xs: 'body2', md: 'h6' } }} color="inherit">
                With a strong eye for detail and a problem-solving mindset, I bridge the gap between design and development, turning creative ideas into functional products that engage and delight users. Whether it’s building from scratch, enhancing existing platforms, or ensuring smooth deployment, I’m committed to delivering high-quality results that align with both business goals and user needs.
            </Typography>
            <Button color="inherit" href="#skills" sx={{
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
            }}>Skills <ArrowDownwardIcon className="downward-icon" sx={{ width: '20px', marginLeft: 0.5, marginBottom: 0.3 }} /></Button>
        </Container>
    )
}

export default About
