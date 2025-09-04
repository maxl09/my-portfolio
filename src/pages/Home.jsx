import React, { Fragment, useEffect, useState } from "react";
import {
    Typography,
    Container,
    Box,
} from "@mui/material";

import AOS from "aos";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import TapeSection from "../components/TapeSection";
import Skills from "../components/Skills";

function Home() {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <Container disableGutters maxWidth={false}>
            {/* Navbar */}
            <NavBar />

            {/* Hero */}
            <HeroSection />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Tape Section */}
            <TapeSection />

            {/* Projects */}
            <Projects />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Box sx={{ backgroundColor: "background.default", py: 3, textAlign: "center" }}>
                <Typography variant="body1" color="white">
                    © {new Date().getFullYear()} Max Ly. All Rights Reserved.
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;