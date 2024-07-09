import React, { useState } from 'react';
import './Card.css';
import { Stack, Grid } from '@mui/material';
import styled from 'styled-components';
import useResponsive from '../useResponsive';
import MedalPlaceholder from '../../assets/MedalPlaceholder.svg';
import Icon1 from '../../assets/icon1.png';
import Medal from '../MedalFinal2/MedalFinal2';
const TabsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const Tab = styled.li`
  margin-right: 10px;
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
        <Wrap>
            <TabsContainer className="tabs group">
                <Tab>
                    <TabLink
                        href="#/one"
                        className={activeTab === '#/one' ? 'active' : ''}
                        onClick={(e) => handleClick(e, '#/one')}
                    >
                        <img src={MedalPlaceholder} alt="My Icon" width={40} height={40} />
                        <span >
                            1968
                        </span>
                    </TabLink>
                </Tab>
                <Tab>
                    <TabLink
                        href="#/two"
                        className={activeTab === '#/two' ? 'active' : ''}
                        onClick={(e) => handleClick(e, '#/two')}
                    >
                        1980
                    </TabLink>
                </Tab>
                <Tab>
                    <TabLink
                        href="#/three"
                        className={activeTab === '#/three' ? 'active' : ''}
                        onClick={(e) => handleClick(e, '#/three')}
                    >
                        1988
                    </TabLink>
                </Tab>
                <Tab>
                    <TabLink
                        href="#/four"
                        className={activeTab === '#/four' ? 'active' : ''}
                        onClick={(e) => handleClick(e, '#/four')}
                    >
                        1992
                    </TabLink>
                </Tab>
                <Tab>
                    <TabLink
                        href="#/five"
                        className={activeTab === '#/five' ? 'active' : ''}
                        onClick={(e) => handleClick(e, '#/five')}
                    >
                        2008
                    </TabLink>
                </Tab>
            </TabsContainer>
            <Content id="content">
                <TabContent active={activeTab === '#/one'} id="one">
                    <Grid container padding={2}>
                        <Grid item xs={6} md={6} lg={6} >
                            {activeTab === '#/one' && (<Medal tab={activeTab} />)}
                        </Grid>
                        <Grid xs={6} md={6} lg={6} sx={{ textAlign: 'left' }}>
                            <div style={{ fontSize: !isDesktop ? '10px' : '40px' }}><b>Монголын анхны медаль</b></div>
                            <div style={{ fontSize: !isDesktop ? '10px' : '10px' }}><i>Мехикогийн медаль</i></div>
                            <Stack direction={'row'}>
                                <img src={Icon1} alt="My Icon" width={52} height={52} />
                                <div style={{ fontSize: !isDesktop ? '10px' : '20px' }}><b>Чөлөөт бөх</b></div>
                            </Stack>
                            <div style={{ fontSize: !isDesktop ? '11px' : '11px' }}><div>Мөнхөд дурсагдах амжилтыг</div></div>
                            <div style={{ fontSize: !isDesktop ? '11px' : '11px' }}><div>Мөрөөдлөөрөө жигүүрлэн дэлхийд анх таниулав</div></div>
                            <div style={{ fontSize: !isDesktop ? '11px' : '11px' }}><div>Медалийн эзэн: Ж.Мөнхбат</div></div>
                        </Grid>
                    </Grid>
                </TabContent>
                <TabContent active={activeTab === '#/two'} id="two">
                    222222222
                </TabContent>
                <TabContent active={activeTab === '#/three'} id="three">
                    Tabs, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur modi quod quo iureq
                </TabContent>
            </Content>
        </Wrap >
    );
};

export default Tabs;