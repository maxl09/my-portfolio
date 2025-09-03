import { AppBar, Box, Button, Fade, Menu, MenuItem, Toolbar, Typography, Zoom } from '@mui/material'
import React, { use, useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [anchor, setAnchor] = useState(null);
    const menuItems = ['home', 'about', 'projects', 'contact'];

    const openMenu = (event) => {
        setAnchor(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchor(null);
    }

    return (
        <AppBar position="sticky" sx={{ background: 'rgb(0,0,0,0.5)', paddingX: { xs: '10px', sm: '10%' } }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <Typography variant="h4" color='inherit' component="a" href="#home" sx={{ fontWeight: 700, cursor: 'pointer', letterSpacing: 2, ":hover": { color: 'inherit' } }}>
                    max.<span style={{
                        background: "linear-gradient(90deg, #00ff99, #1f8053)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>ly</span>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, padding: '5px 2%' }}>
                    <Button color="inherit" href="#home" sx={{ fontSize: '18px', '&:hover': { color: 'primary.main', background: 'transparent' } }}>Home</Button>
                    <Button color="inherit" href="#about" sx={{ fontSize: '18px', '&:hover': { color: 'primary.main', background: 'transparent' } }}>About</Button>
                    <Button color="inherit" href="#projects" sx={{ fontSize: '18px', '&:hover': { color: 'primary.main', background: 'transparent' } }}>Projects</Button>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                    <Button color="inherit" href="#contact" sx={{
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
                            "& .outward-icon": {
                                animation: "arrowJumpOutward 0.5s ease forwards",
                            }
                        },
                        "& .outward-icon": {
                            display: "inline-block",
                        },
                        "@keyframes arrowJumpOutward": {
                            "0%": { transform: "translate(0, 0)", opacity: 1 },
                            "40%": { transform: "translate(10px, -10px)", opacity: 0 },
                            "60%": { transform: "translate(-10px, 10px)", opacity: 0 },
                            "100%": { transform: "translate(0, 0)", opacity: 1 },
                        },
                    }}>Contact <ArrowOutwardIcon className="outward-icon" sx={{ width: '20px', marginLeft: 0, marginBottom: 0.3 }} /></Button>
                </Box>
                <Box sx={{ display: { xs: 'relative', sm: 'none' }, }}>
                    <Button onClick={openMenu}>
                        <MenuIcon sx={{ color: 'white', fontSize: 30 }} />
                    </Button>
                </Box>

                <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={closeMenu} TransitionComponent={Zoom}>
                    {menuItems.map((item, key) => (
                        <MenuItem component='a' href={`#${item}`} sx={{ color: 'black', textTransform: 'capitalize', fontWeight: 500, fontSize: '20px' }}>{item}</MenuItem>
                    ))}
                </Menu>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
