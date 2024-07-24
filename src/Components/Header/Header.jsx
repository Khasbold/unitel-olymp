import './Header.css';
import React, { useRef } from 'react';
import logo from '../../assets/logo.png';
import { Grid, Box, Card, Icon } from '@mui/material';
import useResponsive from '../useResponsive';
import CardHero from '../Card/Card';
import SVGButton from '../../assets/button.svg';
function Header() {
    const isDesktop = useResponsive('up', 'lg');
    const targetRef = useRef(null);
    const smoothScrollTo = (endPos, duration) => {
        const startPos = window.pageYOffset;
        const distance = endPos - startPos;
        let startTime = null;

        const animateScroll = (currentTime) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const scrollPosition = easeInOut(elapsedTime, startPos, distance, duration);
            window.scrollTo(0, scrollPosition);

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        const easeInOut = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateScroll);
    };

    const handleScroll = () => {
        if (targetRef.current) {
            smoothScrollTo(targetRef.current.offsetTop, 1500); // Adjust duration as needed
        }
    };
    return (
        <>
            <div className={!isDesktop ? 'hero-mobile' : 'hero'}>
                <Box style={{ width: '100%', zIndex: '3', paddingBottom: '0px !important' }}>
                    <Grid container padding={!isDesktop ? 4 : 7} sx={{ paddingBottom: '0px !important' }}>
                        <Grid item xs={6} md={6} lg={6} >
                            <img src={logo} alt="" style={{ width: !isDesktop ? '100px' : '190px' }} />
                        </Grid>
                        <Grid xs={6} md={6} lg={6} sx={{ textAlign: 'right', paddingTop: '4px' }}>
                            <div style={{ fontSize: !isDesktop ? '10px' : '23px' }}><b>ХАМТДАА</b> ТҮРҮҮЛЖ АЛХАНА</div>
                        </Grid>
                    </Grid>
                </Box>
                <Grid xs={12} md={12} lg={12}>
                    <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '32px', paddingTop: !isDesktop ? '50px' : '30px' }}>Юнител групп ололт амжилтыг дэмждэг</div>
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    {isDesktop ? (
                        <div style={{ textAlign: 'center', lineHeight: '90px', fontSize: !isDesktop ? '15px' : '83px' }}><b>ХАМТДАА</b> ЧАДНА</div>
                    ) : (
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: !isDesktop ? '50px' : '83px' }}><div style={{ lineHeight: 0.7 }}><b>ХАМТДАА</b></div><div>ЧАДНА</div></div>
                    )}
                </Grid>
                <Grid xs={12} md={12} lg={12} >
                    <div style={{ textAlign: 'center', paddingLeft: !isDesktop ? '40px' : '0px', paddingRight: !isDesktop ? '40px' : '0px', fontSize: !isDesktop ? '15px' : '24px', color: 'white', paddingTop: !isDesktop ? '340px' : '500px' }}>Бид Олимпын түүхэндээ чамгүй амжилт гаргасан.</div>
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <div style={{ paddingBottom: '20px', textAlign: 'center', paddingLeft: !isDesktop ? '40px' : '0px', paddingRight: !isDesktop ? '40px' : '0px', fontSize: !isDesktop ? '15px' : '24px', color: 'white' }}>Спортын төрөл бүрээс амжилт гаргасан анхны таван медальтай хамтдаа танилцъя</div>
                </Grid>
                <Box sx={{ width: '100%' }} ref={targetRef}>
                    <div style={{ textAlign: 'center' }}>
                        <div className='icon' onClick={handleScroll}>
                            <img src={SVGButton} alt="My Icon" width={70} height={70} />
                        </div>
                        <Card sx={{ height: '100px', borderRadius: 0, alignItems: 'flex-start', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', display: 'flex', justifyContent: 'center', background: '#F6F6F6' }}>
                            <div className='space' >
                            </div>
                        </Card>
                        <div style={{ background: '#F6F6F6', alignItems: 'flex-start', textAlign: 'center' }}>
                            <Grid container>
                                <Grid xs={1} md={1} lg={1} >
                                </Grid>
                                <Grid xs={10} md={10} lg={10} >
                                    <CardHero />
                                </Grid>
                                <Grid xs={1} md={1} lg={1} >
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Box >
            </div>
        </>
    )
}
export default Header
