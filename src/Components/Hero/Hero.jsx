import { useState } from 'react'
import './Hero.css';
import logo from '../../assets/logo.png';
import { Grid, Box, IconButton, Icon, Card } from '@mui/material';
import useResponsive from '../useResponsive';
function Hero() {
    const isDesktop = useResponsive('up', 'lg');
    return (<></>
    )
}
export default Hero
