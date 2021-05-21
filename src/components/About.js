import styled from 'styled-components';

import aboutPic from '../img/aboutpic.png';

export const About = () => {
    return (
        <main>
            <MainContent>
                <FlexBox>
                    <AboutText>
                        <Text>D. Simcock and Son is a family run business which has been operating since 1986 through 3 generations of the Simcock family. based in the Yorkshire area.</Text>
                        <Text>Starting as a simple building company, doing extensions and maintenance, we have steadily grown bigger and better to where we are now, doing complete new builds and capturing large industrial contracts.</Text>
                        <Text>Our client base is largely in the industrial area, working with Grampian Country Foods and Green Core Grocery, to which we offer a full building maintenance service.</Text>
                        <Text>Capita Simmons is a large contract to which we have entered, for whom we have built full office areas, office refurbs, and car parks. We also carry out work in many aspects of retail and shopping areas, for big names such as Wilkinson, Next, and Paragon Foods.</Text>
                        <Text>Any aspect of building or maintenance that you require, from industrial, office, and retail, to new builds and extensions, we offer an excellent service throughout, with which we are sure you will be thrilled.</Text>
                    </AboutText>
                    <ImageContainer>
                        <Image src={aboutPic} alt=""/>
                    </ImageContainer>
                </FlexBox>
            </MainContent>
            <SecondaryContent>
                <Quote>
                    <Blockquote>
                        <TextQuote>"The project was handled professionally from start to finish, with helpful insight along the way. Dave and his team have completely transformed our home!"</TextQuote>
                        <Cite>Mr & Mrs Peebles, Kitchen Fit, Sheffield</Cite>
                    </Blockquote>
                </Quote>
                <Quote>
                    <Blockquote>
                        <TextQuote>"Excellent service throughout the build. Felt at ease all the way. Thrilled with the end result and would definitely recommend."</TextQuote>
                        <Cite>Mr & Mrs Wentworth, Dorma Conversion, Rotherham</Cite>
                    </Blockquote>
                </Quote>
                <Quote>    
                    <Blockquote>
                        <TextQuote>"Very high standard of workmanship. Overall an excellent service with a personal touch."</TextQuote>
                        <Cite>Mr & Mrs Emerson, 4 Bedroom New Build, Doncaster</Cite>
                    </Blockquote>
                </Quote>
                <Quote>    
                    <Blockquote>
                        <TextQuote>"Professionally managed and finished on time! Great standard of work, really happy with the job."</TextQuote>
                        <Cite>Mr & Mrs Goldberg, 4 Bedroom Refurbishment, Doncaster</Cite>
                    </Blockquote>
                </Quote>
            </SecondaryContent>
        </main>
    )
};

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

const AboutText = styled.div`
    width: 40%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
`;

const Text = styled.p`
    line-height: 1.4em;
    color: #3a3a87;

    @media only screen and (max-width: 480px) {
        font-size: 1em;
    }
`;

const ImageContainer = styled.div`
    width: 57%;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    margin: auto;
    align-self: center;
`;

const SecondaryContent = styled(MainContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;

    @media only screen and (max-width: 1000px) {
        justify-content: center;
    }
`;

const Quote = styled.div`
    margin-bottom: 0.65em;
    width: 50%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }

    @media only screen and (max-width: 480px) {
        margin-bottom: 2em;

        &:last-child{
            margin-bottom: 1em;
        }
    }
`;

const Blockquote = styled.blockquote`
    margin: 0.65em;
`;

const Cite = styled.cite`
    font-style: normal;
    font-weight: bold;
`;

const TextQuote = styled(Text)`
    font-size: medium;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
        flex-flow: wrap;
        justify-content: center;
    }
`;