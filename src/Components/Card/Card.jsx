import React, { useState } from 'react';
import './Card.css';
import { Stack, Grid } from '@mui/material';
import styled from 'styled-components';
import useResponsive from '../useResponsive';
import MedalPlaceholder from '../../assets/MedalPlaceholder.svg';
import Medal1968 from '../../assets/Medal-1968.svg';
import Medal1980 from '../../assets/Medal-1980.svg';
import Medal1988 from '../../assets/Medal-1988.svg';
import Medal1992 from '../../assets/Medal-1992.svg';
import Medal2008 from '../../assets/Medal-2008.svg';
import buhIcon from '../../assets/buh-icon.svg';
import Medal from '../MedalFinal2/MedalFinal2';
import { isDesktop } from 'react-device-detect';
const TabsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const Tab = styled.li`
  wdith: 100%;
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
    width: ${!isDesktop ? '' : '900px'};
  }
`;

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('#/one');

    const handleClick = (event, tab) => {
        event.preventDefault();
        setActiveTab(tab);
    };
    const isDesktop = useResponsive('up', 'lg');

    return (
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
                        <Grid item xs={12} md={12} lg={6} >
                            {activeTab === '#/one' && (<Medal tab={activeTab} path="1968_mexicooo.glb" />)}
                        </Grid>
                        <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                            <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Монголын анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Мехикогийн медаль</div>
                            <Stack direction={'row'}>
                                <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={45} height={45} />
                                <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '25px', paddingLeft: '10px' }}><b>Чөлөөт бөх</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px', paddingTop: '20px' }}><div>Мөнхөд дурсагдах амжилтыг</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Мөрөөдлөөрөө жигүүрлэн дэлхийд анх таниулав</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Медалийн эзэн: Ж.Мөнхбат</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
                <TabContent active={activeTab === '#/two'} id="two" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                    <Grid container padding={2}>
                        <Grid item xs={12} md={12} lg={6} >
                            {activeTab === '#/two' && (<Medal tab={activeTab} path="1980_moskva_silver.glb" />)}
                        </Grid>
                        <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                            <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Жүдогийн анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Москвагийн Олимп</div>
                            <Stack direction={'row'}>
                                <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={45} height={45} />
                                <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '25px', paddingLeft: '10px' }}><b>Жүдо</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px', paddingTop: '20px' }}><div>Уран мэхийг уралдуулж</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Урагш тэмүүлэх амжилтыг түгээв</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Медалийн эзэн: Ц.Дамдин</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
                <TabContent active={activeTab === '#/three'} id="three" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                    <Grid container padding={2}>
                        <Grid item xs={12} md={12} lg={6} >
                            {activeTab === '#/three' && (<Medal tab={activeTab} path="1988_seoul_bronze.glb" />)}
                        </Grid>
                        <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                            <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Боксын анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Сөүлийн Олимп</div>
                            <Stack direction={'row'}>
                                <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={45} height={45} />
                                <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '25px', paddingLeft: '10px' }}><b>Бокс</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px', paddingTop: '20px' }}><div>Тэсвэр тэвчээрийг шандас болгож</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Тэнүүн их амжилтыг эх орондоо авчрав</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Медалийн эзэн: Н.Энхбат</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
                <TabContent active={activeTab === '#/four'} id="four" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                    <Grid container padding={2}>
                        <Grid item xs={12} md={12} lg={6} >
                            {activeTab === '#/four' && (<Medal tab={activeTab} path="1992_barcelona_bronze.glb" />)}
                        </Grid>
                        <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                            <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Буудлагын анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Барселонагийн Олимп</div>
                            <Stack direction={'row'}>
                                <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={45} height={45} />
                                <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: '25px', paddingLeft: '10px' }}><b>Буудлагын төрөл</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px', paddingTop: '20px' }}><div>Салхи сөрөн нисгэсэн сум</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Саруул түмний минь итгэл найдварыг бадраав</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Медалийн эзэн: Д.Мөнхбаяр</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
                <TabContent active={activeTab === '#/five'} id="five" sx={{ height: !isDesktop ? '500px' : '700px' }}>
                    <Grid container padding={2}>
                        <Grid item xs={12} md={12} lg={6} >
                            {activeTab === '#/five' && (<Medal tab={activeTab} path="beijing_v3.glb" />)}
                        </Grid>
                        <Grid xs={12} md={12} lg={5} padding={5} sx={{ textAlign: 'left', paddingTop: !isDesktop ? '20px' : '65px' }}>
                            <div style={{ fontSize: !isDesktop ? '32px' : '60px', lineHeight: !isDesktop ? '30px' : '60px' }}><b>Байт харваагийн анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '24px', fontWeight: 300, lineHeight: '50px', color: 'grey' }}>Бээжингийн Олимп</div>
                            <Stack direction={'row'}>
                                <img style={{ paddingLeft: '5px', paddingTop: '15px', paddingBottom: '15px' }} src={buhIcon} alt="My Icon" width={45} height={45} />
                                <div style={{ fontSize: !isDesktop ? '15px' : '24px', paddingTop: !isDesktop ? '10px' : '25px', paddingLeft: '10px' }}><b>Байт харваагийн төрөл</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px', paddingTop: '20px' }}><div>Амжилтын гараа хэцүү байсан ч</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Түүхэнд үлдэх гавьяат үйлийг бүтээв</div></div>
                            <div style={{ fontSize: !isDesktop ? '16px' : '18px' }}><div>Медалийн эзэн: Д.Баатаржав</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
            </Content>
            <Grid container>
                <Grid xs={12} md={12} lg={5} sx={{ fontSize: '12px', textAlign: 'left', paddingTop: '60px' }}>
                    Монголын тамирчид Парисын Олимпоос медаль авах бүрд Unitel апп-аас үйлчилгээ авсан хэрэглэгчдэдээ зориулаад 2024MB датаг үржүүлэн бэлэглэх болно.
                </Grid>
                <Grid xs={12} md={12} lg={7}>
                </Grid>
            </Grid>
        </Wrap >
    );
};

export default Tabs;