import './Header.css';
import logo from '../../assets/logo.png';
import { Grid, Box, Card, Icon } from '@mui/material';
import useResponsive from '../useResponsive';
import CardHero from '../Card/Card';
function Header() {

    const isDesktop = useResponsive('up', 'lg');
    return (
        <div className='hero'>
            <Box style={{ position: 'fixed', width: '100%' }}>
                <Grid container padding={3}>
                    <Grid item xs={6} md={6} lg={6} >
                        <img src={logo} alt="" style={{ width: !isDesktop ? '100px' : '180px' }} />
                    </Grid>
                    <Grid xs={6} md={6} lg={6} sx={{ textAlign: 'right', marginTop: '7px' }}>
                        <div style={{ fontSize: !isDesktop ? '10px' : '23px' }}><b>ХАМТДАА</b> ТҮРҮҮЛЖ АЛХАНА</div>
                    </Grid>
                </Grid>
            </Box>
            <Box >
                <Grid container padding={3}>
                    <Grid xs={12} md={12} lg={12}>
                        <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '32px', paddingTop: '120px' }}>Юнител групп ололт амжилтыг дэмждэг</div>
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        {isDesktop ? (
                            <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '87px' }}><b>ХАМТДАА</b> ЧАДНА</div>
                        ) : (
                            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: !isDesktop ? '50px' : '87px' }}><div style={{ lineHeight: 0.7 }}><b>ХАМТДАА</b></div><div>ЧАДНА</div></div>
                        )}
                    </Grid>
                    <Grid xs={12} md={12} lg={12} style={{ bottom: 5 }}>
                        <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '25px', paddingTop: '430px', color: 'white' }}>Бид өнөөг хүртэл Олимпын түүхэндээ нийт 5 спортын төрлүүдээр амжилт гаргаж байв.</div>
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <div style={{ textAlign: 'center', fontSize: !isDesktop ? '15px' : '25px', color: 'white' }}>Тэгвэл анхны гэх тодотголтой Олимпын медалиудтай хамтдаа танилцацгаая.</div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                    <div className='icon'>
                        <Icon sx={{ fontSize: 60 }}>expand_circle_down_icon</Icon>
                    </div>
                    {/* <Icon sx={{ fontSize: 80, color: '#46C800' }}>expand_circle_down_icon</Icon> */}
                    <Card sx={{ height: '800px', alignItems: 'flex-start', borderRadius: '80px', display: 'flex', justifyContent: 'center', background: '#F6F6F6' }}>
                        <div className='space'>
                            <CardHero />
                        </div>

                    </Card>
                </div>
            </Box >
            <Box>
            </Box>

        </div>
    )
}
export default Header
