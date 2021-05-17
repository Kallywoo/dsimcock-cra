import styled from 'styled-components';

import { ContactForm } from './ContactForm.js';

export const Contact = () => {
    return (
        <main>
            <MainContent>
                <FlexBox>
                    <ContactInfo>
                        <List>
                            <ListItem>Tel: <Details href="tel:01302-710302">01302 710302</Details></ListItem>
                            <ListItem>Mobile One: <Details href="tel:07836-527-331">07836 527331</Details></ListItem>
                            <ListItem>Mobile Two: <Details href="tel:07939-329-831">07939 329831</Details></ListItem>
                            <ListItem>Email: <Details href="mailto:dsimcock@aol.com">dsimcock@aol.com</Details></ListItem>
                        </List>
                        <Text>Contact us by phone or get in touch using the form. We will endeavour to respond within 24 hours.</Text>
                    </ContactInfo>

                    <ContactForm/>

                </FlexBox>
            </MainContent>
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
        padding: 0;
        width: auto;
    }
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
        flex-flow: wrap;
        justify-content: center;
    }
`;

const ContactInfo = styled.div`
    width: 40%;
    padding: 1.3em;

    @media only screen and (max-width: 1000px) {
        text-align: center;
        width: auto;
        padding: 0;
    }

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const ListItem = styled.li`
    font-family: 'Bebas Neue', sans-serif;
    color: #303080;
    font-size: large;
    letter-spacing: 0.1em;
    font-weight: bold;
    margin-bottom: 0.65em;
`;

const Text = styled.p`
    font-family: 'Bebas Neue', sans-serif;
    color: #303080;
    font-size: large;
    letter-spacing: 0.1em;
    font-weight: bold;
`;

const Details = styled.a`
    font-family: "Calibri";
    color: black;
    text-decoration: none;
    transition: 0.3s;
    font-weight: normal;
    letter-spacing: normal;

    &:hover {
        color: #4f34b3;
    }
`;