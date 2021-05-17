import { Link } from '@reach/router';
import styled from 'styled-components';

export const Work = () => {
    return (
        <main>
            <MainContent>
                <WorkExamples>
                    <Text>At D Simcock & Son we do work for both the residential and industrial sectors. Choose below to see examples of each.</Text>
                    <StyledLink to="/residential">Residential</StyledLink>
                    <StyledLink to="/industrial">Industrial</StyledLink>
                </WorkExamples>
            </MainContent>
        </main>
    )
}

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

const WorkExamples = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const Text = styled.p`
    font-size: medium;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    margin: 0.5em auto;
    color: #303080;
    text-decoration: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: xx-large;
    text-shadow: 1px 1px black;
    transition: 0.2s;

    &:hover {
        color: #C4C2CC;
    }
`;