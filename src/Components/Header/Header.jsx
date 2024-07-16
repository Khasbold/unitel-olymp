import './Header.css';
import logo from '../../assets/logo.png';
import { Grid, Box, Card, Icon } from '@mui/material';
import useResponsive from '../useResponsive';
import CardHero from '../Card/Card';

import SVGButton from '../../assets/button.svg';
function Header() {
    const isDesktop = useResponsive('up', 'lg');
    return (
        <>
            <div className={!isDesktop ? 'hero-mobile' : 'hero'}>
                <Box style={{ position: 'fixed', width: '100%', zIndex: '99999' }}>
                    <Grid container padding={!isDesktop ? 4 : 7}>
                        <Grid item xs={6} md={6} lg={6} >
                            <img src={logo} alt="" style={{ width: !isDesktop ? '100px' : '190px' }} />
                        </Grid>
                        <Grid xs={6} md={6} lg={6} sx={{ textAlign: 'right' }}>
                            <div style={{ fontSize: !isDesktop ? '10px' : '23px' }}><b>ХАМТДАА</b> ТҮРҮҮЛЖ АЛХАНА</div>
                        </Grid>
                    </Grid>
                </Box>
                <Grid xs={12} md={12} lg={12}>
                    <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '32px', paddingTop: '140px' }}>Юнител групп ололт амжилтыг дэмждэг</div>
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    {isDesktop ? (
                        <div style={{ textAlign: 'center', lineHeight: '90px', fontSize: !isDesktop ? '15px' : '83px' }}><b>ХАМТДАА</b> ЧАДНА</div>
                    ) : (
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: !isDesktop ? '50px' : '83px' }}><div style={{ lineHeight: 0.7 }}><b>ХАМТДАА</b></div><div>ЧАДНА</div></div>
                    )}
                </Grid>
                <Grid xs={12} md={12} lg={12} >
                    <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '24px', color: 'white', paddingTop: '500px' }}>Бид өнөөг хүртэл Олимпын түүхэндээ нийт 5 спортын төрлүүдээр амжилт гаргаж байв.</div>
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '24px', color: 'white' }}>Тэгвэл анхны гэх тодотголтой Олимпын медалиудтай хамтдаа танилцацгаая</div>
                </Grid>

                <Box sx={{ width: '100%' }}>
                    {/* <Grid xs={12} md={12} lg={12}> */}
                    <div style={{ textAlign: 'center' }}>
                        <div className='icon'>
                            <img src={SVGButton} alt="My Icon" width={70} height={70} />
                        </div>
                        <Card sx={{ height: '100px', alignItems: 'flex-start', borderTopLeftRadius: '80px', borderTopRightRadius: '80px', display: 'flex', justifyContent: 'center', background: '#F6F6F6' }}>
                            <div className='space' >
                            </div>
                        </Card>
                        <div style={{ background: '#F6F6F6', alignItems: 'flex-start', textAlign: 'center' }}>
                            <Grid container>
                                <Grid xs={1} md={1} lg={2} >
                                </Grid>
                                <Grid xs={10} md={10} lg={8} >
                                    <CardHero />
                                </Grid>
                                <Grid xs={1} md={1} lg={2} >
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    {/* </Grid> */}
                </Box >
            </div>
        </>
    )
}
export default Header
