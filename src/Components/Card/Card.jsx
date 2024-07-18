import React, { useEffect, useState } from 'react';
import './Card.css';
import { Stack, Grid, Card, Icon, Button } from '@mui/material';
import styled from 'styled-components';
import useResponsive from '../useResponsive';
import Medal1968 from '../../assets/Medal-1968.svg';
import Medal1980 from '../../assets/Medal-1980.svg';
import Medal1988 from '../../assets/Medal-1988.svg';
import Medal1992 from '../../assets/Medal-1992.svg';
import Medal2008 from '../../assets/Medal-2008.svg';
import Gold from '../../assets/Medal-Gold.svg';
import Silver from '../../assets/Medal-Silver.svg';
import Bronze from '../../assets/Medal-Bronze.svg';
import buhIcon from '../../assets/wrestling-icon.svg';
import shootingIcon from '../../assets/shooting-icon.svg';
import boxingIcon from '../../assets/boxing-icon.svg';
import bowIcon from '../../assets/bow-arrow-icon.svg';
import Medal from '../MedalFinal2/MedalFinal2';
import custStyled from "styled-components";
import SvgIcon from '@mui/material/SvgIcon';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { isDesktop } from 'react-device-detect';
const TabsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <FileDownloadIcon />
        </SvgIcon>
    );
}
const Tab = styled.li`
  wdith: 100%;
`;
const LiveNow = custStyled.span`
  padding: 13px;
  padding-left: ${!isDesktop ? '15px' : '30px'};
  padding-right: ${!isDesktop ? '15px' : '30px'};
  background: transparent linear-gradient(180deg, #58cd58 0%, #38d338 100%) 0%
    0% no-repeat padding-box;
  border-radius: 20px;
  font-size: ${!isDesktop ? '15px' : '20px'};
  font-weight: ${!isDesktop ? 400 : null};
  color: #fff;
  flex-grow: 0;
  z-index: 1;
  cursor: pointer;
  -webkit-animation: glowing 1300ms infinite;
  -moz-animation: glowing 1300ms infinite;
  -o-animation: glowing 1300ms infinite;
  animation: glowing 1300ms infinite;

  @-webkit-keyframes glowing {
    0% {
      background-color: #58cd58;
      -webkit-box-shadow: 0 0 3px #58cd58;
    }
    50% {
      background-color: #38d338;
      -webkit-box-shadow: 0 0 15px #38d338;
    }
    100% {
      background-color: #58cd58;
      -webkit-box-shadow: 0 0 3px #58cd58;
    }
  }
  @keyframes glowing {
    0% {
      background-color: #58cd58;
      box-shadow: 0 0 3px #58cd58;
    }
    50% {
      background-color: #38d338;
      box-shadow: 0 0 15px #38d338;
    }
    100% {
      background-color: #58cd58;
      box-shadow: 0 0 3px #58cd58;
    }
  }
`;
const TabLink = styled.a`
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  &.active {
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
`;

const Content = styled.div`
  padding: 10px;
`;

const TabContent = styled.p`
  display: ${props => (props.active ? 'block' : 'none')};
`;

const Wrap = styled.div`
  .group {
    display: flex;
    width: ${!isDesktop ? '100%' : '900px'};
  }
`;

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('#/one');
    const handleClick = (event, tab) => {
        if (activeTab === '#/one') localStorage.setItem('currentMedal', '1968.glb');
        if (activeTab === '#/two') localStorage.setItem('currentMedal', '1980.glb');
        if (activeTab === '#/three') localStorage.setItem('currentMedal', '1988.glb');
        if (activeTab === '#/four') localStorage.setItem('currentMedal', '1992.glb');
        if (activeTab === '#/five') localStorage.setItem('currentMedal', '2008.glb');

        event.preventDefault();
        setActiveTab(tab);
    };
    const goDownload = () => {
        window.open('https://link.unitel.mn/xxqa4', '_blank').focus();
    };
    const isDesktop = useResponsive('up', 'lg');
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
            <Wrap >
                <TabsContainer className='tabs group' >
                    <Tab>
                        <TabLink
                            href="#/one"
                            className={activeTab === '#/one' ? 'active' : ''}
                            onClick={(e) => handleClick(e, '#/one')}
                        >
                            {!isDesktop ? <Stack direction={'column'} sx={{ justifyContent: 'center', paddingTop: '' }}>
                                <b style={{ fontSize: '14px', fontWeight: '800' }}>
                                    1968
                                </b>
                                <img style={{ paddingLeft: '5px' }} src={Medal1968} alt="My Icon" width={60} height={60} />
                            </Stack> : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                                    <img style={{ paddingRight: '5px' }} src={Medal1968} alt="My Icon" width={60} height={60} />
                                    <b style={{ fontSize: '24px', fontWeight: '800', paddingTop: '12px' }}>
                                        1968
                                    </b>
                                </Stack>
                            )}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink
                            href="#/two"
                            className={activeTab === '#/two' ? 'active' : ''}
                            onClick={(e) => handleClick(e, '#/two')}
                        >
                            {!isDesktop ? <Stack direction={'column'} sx={{ justifyContent: 'center', paddingTop: '' }}>
                                <b style={{ fontSize: '14px', fontWeight: '800' }}>
                                    1980
                                </b>
                                <img style={{ paddingLeft: '5px' }} src={Medal1980} alt="My Icon" width={60} height={60} />
                            </Stack> : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                                    <img style={{ paddingRight: '5px' }} src={Medal1980} alt="My Icon" width={60} height={60} />
                                    <b style={{ fontSize: '24px', fontWeight: '800', paddingTop: '12px' }}>
                                        1980
                                    </b>
                                </Stack>
                            )}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink
                            href="#/three"
                            className={activeTab === '#/three' ? 'active' : ''}
                            onClick={(e) => handleClick(e, '#/three')}
                        >
                            {!isDesktop ? <Stack direction={'column'} sx={{ justifyContent: 'center', paddingTop: '' }}>
                                <b style={{ fontSize: '14px', fontWeight: '800' }}>
                                    1988
                                </b>
                                <img style={{ paddingLeft: '5px' }} src={Medal1988} alt="My Icon" width={60} height={60} />
                            </Stack> : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                                    <img style={{ paddingRight: '5px' }} src={Medal1988} alt="My Icon" width={60} height={60} />
                                    <b style={{ fontSize: '24px', fontWeight: '800', paddingTop: '12px' }}>
                                        1988
                                    </b>
                                </Stack>
                            )}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink
                            href="#/four"
                            className={activeTab === '#/four' ? 'active' : ''}
                            onClick={(e) => handleClick(e, '#/four')}
                        >
                            {!isDesktop ? <Stack direction={'column'} sx={{ justifyContent: 'center', paddingTop: '' }}>
                                <b style={{ fontSize: '14px', fontWeight: '800' }}>
                                    1992
                                </b>
                                <img style={{ paddingLeft: '5px' }} src={Medal1992} alt="My Icon" width={60} height={60} />
                            </Stack> : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                                    <img style={{ paddingRight: '5px' }} src={Medal1992} alt="My Icon" width={60} height={60} />
                                    <b style={{ fontSize: '24px', fontWeight: '800', paddingTop: '12px' }}>
                                        1992
                                    </b>
                                </Stack>
                            )}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink
                            href="#/five"
                            className={activeTab === '#/five' ? 'active' : ''}
                            onClick={(e) => handleClick(e, '#/five')}
                        >
                            {!isDesktop ? <Stack direction={'column'} sx={{ justifyContent: 'center', paddingTop: '' }}>
                                <b style={{ fontSize: '14px', fontWeight: '800' }}>
                                    2008
                                </b>
                                <img style={{ paddingLeft: '5px' }} src={Medal2008} alt="My Icon" width={60} height={60} />
                            </Stack> : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                                    <img style={{ paddingRight: '5px' }} src={Medal2008} alt="My Icon" width={60} height={60} />
                                    <b style={{ fontSize: '24px', fontWeight: '800', paddingTop: '12px' }}>
                                        2008
                                    </b>
                                </Stack>
                            )}
                        </TabLink>
                    </Tab>
                </TabsContainer>
                <Content id="content" className={!isDesktop && activeTab === '#/one' ? 'firstBorder' : !isDesktop && activeTab === '#/five' ? 'lastBorder' : 'allBorder'}>
                    <TabContent active={activeTab === '#/one'} id="one" sx={{ height: !isDesktop ? '500px' : '700px' }} >
                        <Grid container padding={2}>
                            <Grid item xs={12} md={12} lg={6} sx={{ paddingLeft: !isDesktop ? '' : '100px' }} >
                                {activeTab === '#/one' && (<Medal tab={activeTab} path="1968.glb" />)}
                            </Grid>
                            <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                                <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Монголын анхны медаль</b></div>
                                <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Мехикогийн Олимп</div>
                                <Stack direction={'row'}>
                                    <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={60} height={60} />
                                    <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '30px', paddingLeft: '10px' }}><b>Чөлөөт бөх</b></div>
                                </Stack>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px', paddingTop: '20px' }}><div>Мөнхөд дурсагдах амжилтыг</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Мөрөөдлөөрөө жигүүрлэн дэлхийд анх таниулав</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Медалийн эзэн: Ж.Мөнхбат</div></div>
                            </Grid>
                        </Grid>
                    </TabContent>
                    <TabContent active={activeTab === '#/two'} id="two" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                        <Grid container padding={2}>
                            <Grid item xs={12} md={12} lg={6} sx={{ paddingLeft: !isDesktop ? '' : '100px' }} >
                                {activeTab === '#/two' && (<Medal tab={activeTab} path="1980.glb" />)}
                            </Grid>
                            <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                                <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Жүдогийн анхны медаль</b></div>
                                <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Москвагийн Олимп</div>
                                <Stack direction={'row'}>
                                    <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={60} height={60} />
                                    <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '30px', paddingLeft: '10px' }}><b>Жүдо</b></div>
                                </Stack>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px', paddingTop: '20px' }}><div>Уран мэхийг уралдуулж</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Урагш тэмүүлэх амжилтыг түгээв</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Медалийн эзэн: Ц.Дамдин</div></div>
                            </Grid>
                        </Grid>
                    </TabContent>
                    <TabContent active={activeTab === '#/three'} id="three" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                        <Grid container padding={2}>
                            <Grid item xs={12} md={12} lg={6} sx={{ paddingLeft: !isDesktop ? '' : '100px' }} >
                                {activeTab === '#/three' && (<Medal tab={activeTab} path="1988.glb" />)}
                            </Grid>
                            <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                                <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Боксын анхны медаль</b></div>
                                <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Сөүлийн Олимп</div>
                                <Stack direction={'row'}>
                                    <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={boxingIcon} alt="My Icon" width={60} height={60} />
                                    <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '30px', paddingLeft: '10px' }}><b>Бокс</b></div>
                                </Stack>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px', paddingTop: '20px' }}><div>Тэсвэр тэвчээрийг шандас болгож</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Тэнүүн их амжилтыг эх орондоо авчрав</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Медалийн эзэн: Н.Энхбат</div></div>
                            </Grid>
                        </Grid>
                    </TabContent>
                    <TabContent active={activeTab === '#/four'} id="four" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                        <Grid container padding={2}>
                            <Grid item xs={12} md={12} lg={6} sx={{ paddingLeft: !isDesktop ? '' : '100px' }} >
                                {activeTab === '#/four' && (<Medal tab={activeTab} path="1992.glb" />)}
                            </Grid>
                            <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                                <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Буудлагын анхны медаль</b></div>
                                <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Барселонагийн Олимп</div>
                                <Stack direction={'row'}>
                                    <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={shootingIcon} alt="My Icon" width={60} height={60} />
                                    <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '30px', paddingLeft: '10px' }}><b>Буудлагын төрөл</b></div>
                                </Stack>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px', paddingTop: '20px' }}><div>Салхи сөрөн нисгэсэн сум</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Саруул түмний минь итгэл найдварыг бадраав</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Медалийн эзэн: Д.Мөнхбаяр</div></div>
                            </Grid>
                        </Grid>
                    </TabContent>
                    <TabContent active={activeTab === '#/five'} id="five" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                        <Grid container padding={2}>
                            <Grid item xs={12} md={12} lg={6} sx={{ paddingLeft: !isDesktop ? '' : '100px' }} >
                                {activeTab === '#/five' && (<Medal tab={activeTab} path="2008.glb" />)}
                            </Grid>
                            <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                                <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Байт харваагийн анхны медаль</b></div>
                                <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Бээжингийн Олимп</div>
                                <Stack direction={'row'}>
                                    <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={bowIcon} alt="My Icon" width={60} height={60} />
                                    <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: !isDesktop ? '10px' : '30px', paddingLeft: '10px' }}><b>Байт харваагийн төрөл</b></div>
                                </Stack>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px', paddingTop: '20px' }}><div>Амжилтын гараа хэцүү байсан ч</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Түүхэнд үлдэх гавьяат үйлийг бүтээв</div></div>
                                <div style={{ fontSize: !isDesktop ? '15px' : '18px' }}><div>Медалийн эзэн: Д.Баатаржав</div></div>
                            </Grid>
                        </Grid>
                    </TabContent>
                </Content>

            </Wrap >
            <div className={!isDesktop ? 'footer-image-mobile' : 'footer-image'}>
                <Grid container>
                    <Grid xs={12} md={12} lg={5} sx={{ fontSize: '16px', textAlign: 'left', paddingTop: !isDesktop ? '80px' : '200px', paddingLeft: !isDesktop ? '' : '80px' }}>
                        Монголын тамирчид Парисын Олимпоос медаль авах бүрд Unitel апп-аас үйлчилгээ авсан хэрэглэгчдэдээ зориулаад <br /><b>2024MB</b> датаг үржүүлэн бэлэглэх болно.
                    </Grid>
                    <Grid xs={12} md={12} lg={7}>
                    </Grid>
                    <Grid xs={12} md={10} lg={7} sx={{ fontSize: '16px', textAlign: 'left', paddingTop: '60px', paddingLeft: !isDesktop ? '' : '80px' }}>
                        <Stack container>
                            {!isDesktop ? (
                                <Stack direction={'column'} sx={{ justifyContent: 'center', paddingLeft: '20px' }} spacing={3} >
                                    <div style={{ fontSize: '35px', paddingTop: '10px', float: 'left', color: 'black' }}>
                                        <b>2024MB</b>
                                    </div>
                                    <div id="content" style={{ width: '35%', borderRadius: '30px', height: '60px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Gold} alt="My Icon" width={50} height={50} style={{ paddingTop: '5px' }} />
                                            <div style={{ fontSize: '30px', fontWeight: '600', marginLeft: '0px', marginRight: '10px', paddingTop: '8px' }}>
                                                x3
                                            </div>
                                        </Stack>
                                    </div>
                                    <div id="content" style={{ width: '35%', borderRadius: '30px', height: '60px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Silver} alt="My Icon" width={50} height={50} style={{ paddingTop: '5px' }} />
                                            <div style={{ fontSize: '30px', fontWeight: '600', marginLeft: '0px', marginRight: '10px', paddingTop: '8px' }}>
                                                x2
                                            </div>
                                        </Stack>
                                    </div>
                                    <div id="content" style={{ width: '35%', borderRadius: '30px', height: '60px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Bronze} alt="My Icon" width={50} height={50} style={{ paddingTop: '5px' }} />
                                            <div style={{ fontSize: '30px', fontWeight: '600', marginLeft: '0px', marginRight: '10px', paddingTop: '8px' }}>
                                                x1
                                            </div>
                                        </Stack>
                                    </div>
                                </Stack>
                            ) : (
                                <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                    <div style={{ fontSize: '55px', paddingTop: '10px' }}>
                                        <b>2024MB</b>
                                    </div>
                                    <div id="content" style={{ borderRadius: '30px', height: '100px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Gold} alt="My Icon" width={80} height={80} style={{ padding: '10px' }} />
                                            <div style={{ fontSize: '60px', fontWeight: '600', marginLeft: '0px', marginRight: '20px', paddingTop: '5px' }}>
                                                x3
                                            </div>
                                        </Stack>
                                    </div>
                                    <div id="content" style={{ borderRadius: '30px', height: '100px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Silver} alt="My Icon" width={80} height={80} style={{ padding: '10px' }} />
                                            <div style={{ fontSize: '60px', fontWeight: '600', marginLeft: '0px', marginRight: '20px', paddingTop: '5px' }}>
                                                x2
                                            </div>
                                        </Stack>
                                    </div>
                                    <div id="content" style={{ borderRadius: '30px', height: '100px' }}>
                                        <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={3}>
                                            <img src={Bronze} alt="My Icon" width={80} height={80} style={{ padding: '10px' }} />
                                            <div style={{ fontSize: '60px', fontWeight: '600', marginLeft: '0px', marginRight: '20px', paddingTop: '5px' }}>
                                                x1
                                            </div>
                                        </Stack>
                                    </div>
                                </Stack>
                            )}
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={2} lg={5}>
                    </Grid>
                    <Grid xs={12} md={12} lg={5} sx={{ fontSize: '15px', textAlign: 'left', paddingTop: '60px', paddingLeft: !isDesktop ? '10px' : '80px', color: !isDesktop ? '' : '' }}>
                        Эрхэм хэрэглэгч та бүх үйлчилгээг Unitel апп-аас аваад Олимпын урамшуулалдаа хамрагдаарай.
                    </Grid>
                    <Grid xs={12} md={12} lg={7}>
                    </Grid>
                    <Grid xs={12} md={12} lg={7} sx={{ fontWeight: !isDesktop ? 400 : null, fontSize: !isDesktop ? '15px' : '20px', textAlign: !isDesktop ? 'center' : 'left', paddingTop: '60px', paddingLeft: !isDesktop ? '0px' : '80px', paddingBottom: !isDesktop ? '100px' : '150px' }}>
                        <Button variant="contained" onClick={goDownload} sx={{
                            backgroundColor: 'primary.main', // initial background color
                            '&:hover': {
                                backgroundColor: '#24a93f', // hover background color
                            },
                            textTransform: 'none', fontFamily: 'Manrope, sans-serif', borderRadius: '40px', textColor: 'white', backgroundColor: '#53CE53',
                            // paddingTop: '10px !important',
                            padding: '10px',
                            paddingLeft: '30px',
                            paddingRight: '30px',
                        }} startIcon={<FileDownloadIcon />}>
                            Unitel апп татах
                        </Button>
                    </Grid>
                    <Grid xs={12} md={12} lg={5}>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Tabs;