import React, { Fragment, useEffect, useState } from "react";
import {
    Container,
    Box,
} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const TapeSection = () => {

    const words = [
        "Accessible",
        "Reliable",
        "Scalable",
        "Maintainable",
        "Search Optimized",
        "Reusable",
        "Secure",
        "Responsive",
        "User Friendly",
        "Interactive"
    ]

    return (
        <Container disableGutters maxWidth='none' sx={{ paddingY: 10, overflowX: 'clip' }}>
            <Box sx={{ background: "linear-gradient(to right, #00ff99, #1f8053)", transform: 'rotate(-3deg)', marginX: '-4px' }}>
                <Box sx={{ display: 'flex', maskImage: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0, 0.9), transparent)" }}>
                    <Box sx={{
                        display: 'flex',
                        flex: 'none',
                        gap: 4,
                        paddingY: 3,
                        animation: 'moveLeft 1s linear infinite',
                        animationDuration: '20s',
                        "@keyframes moveLeft": {
                            "0%": { transform: "translateX(0%)" },
                            "100%": { transform: "translateX(-50%)" },
                        },
                    }}>
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {
                                    words.map((word) => (
                                        <Box key={word} sx={{ display: 'inline-flex', gap: 4, alignItems: 'center', width: 'fit-content' }}>
                                            <span style={{ color: '#212121', fontWeight: 700, fontSize: 17, textTransform: 'uppercase' }}>{word}</span>
                                            <AutoAwesomeIcon sx={{ color: '#212121' }} />
                                        </Box>
                                    ))
                                }
                            </Fragment>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default TapeSection
