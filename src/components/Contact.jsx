import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material'
import React, { use, useState } from 'react'
import emailjs from "@emailjs/browser";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                setMessageSent(true);
                setFormData({ name: '', email: '', message: '' })
            }).catch((error) => {
                alert('Something went wrong. Please try again');
                console.log(error);
            });
    }

    return (
        <Container id="contact" sx={{ paddingTop: 20, height: '100vh' }} data-aos="fade-left">
            <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center' }} gutterBottom>
                <span style={{
                    background: 'linear-gradient(90deg, #00ff99, #1f8053)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Contact</span>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '70%' }}>
                    <TextField
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        helperText={false}
                        required placeholder="Name" sx={{ borderColor: 'green', background: 'rgba(70, 70, 70, 0.39)' }} />
                    <TextField
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        helperText={false} required placeholder="example@example.com" sx={{ borderColor: 'green', background: 'rgba(70, 70, 70, 0.39)' }} />
                    <TextField
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        helperText={false} required multiline minRows={3} placeholder="Your Message" sx={{ borderColor: 'green', background: 'rgba(70, 70, 70, 0.39)' }} />
                    <Button type='submit' variant='contained' sx={{ fontWeight: 700 }}>Send Message</Button>
                    {messageSent &&
                        <Typography variant='h7'>
                            Thank you! We have received your message and follow up shortly.
                        </Typography>}

                </form>
            </Box>
        </Container>
    )
}

export default Contact
