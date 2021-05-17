import { Link } from '@reach/router';
import styled from 'styled-components';

export const Sitemap = () => {
    return (
        <main>
            <MainContent>
                <nav>
                    <List>
                        <ListItem><StyledLink to="/index">Home</StyledLink></ListItem>
                        <ListItem><StyledLink to="/about">About Us</StyledLink></ListItem>
                        <ListItem><StyledLink to="/work">Our Work</StyledLink></ListItem>

                        <ListItem><StyledLink to="/residential">Residential Work</StyledLink></ListItem>
                        <ListItem><StyledLink to="/industrial">Industrial Work</StyledLink></ListItem>

                        <ListItem><StyledLink to="/contact">Contact Us</StyledLink></ListItem>
                    </List>
                </nav>
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
        width: auto;
    }
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 1.3em;
`;

const StyledLink = styled(Link)`
    color: black;
    font-weight: normal;
`;