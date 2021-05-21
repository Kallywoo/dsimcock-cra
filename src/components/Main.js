import styled from 'styled-components';

import { Carousel } from './Carousel.js';
import experience from '../img/experience.png';

export const Main = () => {
    return (
        <main>
            <MainContent>
                <FlexBox>
                    <Carousel type="img" duration="5000"/>
                    <MainText>
                        <Welcome>Welcome to<br/>D.Simcock & Son</Welcome>
                        <Text>We are a family run building and construction business based in Doncaster, established over 25 years ago.</Text>
                        <Text>We take on all aspects of building, from new builds to renovations, residential to commerical to industrial. We have captured many large industrial maintenance contracts, but are still small enough to care about individual home improvements.</Text>
                        <Text>Whatever work you require, contact us now and talk us through your requirements. We are Doncaster and South Yorkshire's most reliable builders!</Text>
                    </MainText>
                </FlexBox>
                <FlexBox>
                    <SecondaryText>
                        <TertiaryHeader>Environment</TertiaryHeader>
                        <p>At D.Simcock and Son we are always conscious of the environment, and are as sustainable as is possible in our work. We always locally source the best materials and products required for all of our projects. All scrap is disposed of accordingly. Doncaster's environmentally aware builders.</p>
                    </SecondaryText>
                    <SecondaryText>
                        <TertiaryHeader>Experience</TertiaryHeader>
                        <p>Established in 1986, we have over 25 years of experience in the construction industry. We are now into our 3rd generation of builders in the family, gaining vast knowledge along the way in all aspects of the building and construction trade. You can confidently trust us with any project.</p>
                    </SecondaryText>
                    <SecondaryText collapse>
                        <SecondaryImage src={experience} alt=""/>
                    </SecondaryText>
                </FlexBox>
            </MainContent>

            <SecondaryContent>
                <Carousel type="text" duration="6000"/>
                <Areas>
                    <TertiaryHeader>Residential</TertiaryHeader>
                    <p>We do work across various home projects. Whatever you need, from complete new builds or extensions, to interior renovations or room fittings, we will do it. We always take care with our finishes and have worked across a vast range of projects in our many years of work.</p>
                    <TertiaryHeader>Industrial</TertiaryHeader>
                    <p>Over the years, we have managed to capture some very large industrial contracts. We work on various industrial areas for whatever is required. We have building maintenance contracts, but also cover areas such as office/shop interior fittings and large area concreting.</p>
                </Areas>
            </SecondaryContent>
        </main>
)};

const MainContent = styled.div`
    background-color: #ECEBFF;
    margin: 1.3em auto;
    padding: 0.975em;
    width: 70%;
    max-width: 940px;

    @media only screen and (max-width: 480px) {
        width: auto;
    }
`;

const MainText = styled.div`
    width: 34%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }

    @media only screen and (max-width: 480px) {
        font-size: 1.25em;
        margin-top: 1em;
    }
`;

const Welcome = styled.h2`
    letter-spacing: 3px;
    margin-top: 0;
    color: #303080;

    @media only screen and (max-width: 1000px) {
        margin-top: 0.5em;
    }

    @media only screen and (max-width: 480px) {
        margin-top: 0;
    }
`;

const Text = styled.p`
    line-height: 1.4em;

    @media only screen and (max-width: 1200px) {
        line-height: normal;
    }

    @media only screen and (max-width: 480px) {
        font-size: 0.75em;
    }
`;

const TertiaryHeader = styled.h3`
    letter-spacing: 0.5px;
`;

const SecondaryContent = styled(MainContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        justify-content: center;
        flex-flow: nowrap;
    }

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const SecondaryText = styled.div`
    flex: 1;
    margin-top: 1.3em;
    width: 30%;
    border-top: 2px solid #303080;
    text-align: center;
    overflow: hidden;
    height: 12.5em;

    &:nth-of-type(2) {
        margin-left: 1.3em;
        margin-right: 1.3em;
    }

    @media only screen and (max-width: 1200px) {
        display: ${props => props.collapse ? "none" : "block"};
        height: auto;

        &:nth-of-type(2) {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const SecondaryImage = styled.img`
    width: 100%;
    margin: auto;
    align-self: center;
    padding-top: 0.85em;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
        flex-flow: wrap;
        justify-content: center;
    }
`;

const Areas = styled.div`
    @media only screen and (max-width: 1000px) {
        text-align: center;
        max-width: 50%;
    }
`;