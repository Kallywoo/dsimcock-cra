import { Link } from '@reach/router';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <StyledFooter>
            <Navigation>
                <List>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><StyledLink to="/about">About Us</StyledLink></ListItem>
                    <ListItem><StyledLink to="/work">Our Work</StyledLink></ListItem>
                    <ListItem><StyledLink to="/contact">Contact Us</StyledLink></ListItem>
                    <ListItem><StyledLink to="/about#testimonials">Testimonials</StyledLink></ListItem>

                    <ListItem><StyledLink to="/work/residential">Residential Examples</StyledLink></ListItem>
                    <ListItem><StyledLink to="/work/industrial">Industrial Examples</StyledLink></ListItem>

                    <ListItem><StyledLink to="/sitemap">Sitemap</StyledLink></ListItem>
                </List>
            </Navigation>
        </StyledFooter>
    )
};

const StyledFooter = styled.footer`
    background-color: #303080;
    padding: 0.32em;
`;

const Navigation = styled.nav`
    margin: auto;
    width: 72%;
    max-width: 940px;
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    display: inline-flex;
    flex-flow: column wrap;
    align-content: flex-start;
    width: 100%;
    height: 95px;

    @media only screen and (max-width: 480px) {
        display: block;
        text-align: center;
        height: auto;
    }
`;

const ListItem = styled.li`
    margin-right: 2.6em;

    &:last-child{
        margin-top: auto;
    }

    @media only screen and (max-width: 480px) {
        margin-top: 0.8em;
        margin-right: 0em;

        &:nth-child(1n + 6) {
            display: none;
        }
    }
`;

const StyledLink = styled(Link)`
    font-family: "Calibri";
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: white;
    opacity: 1;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    }

    @media only screen and (max-width: 480px) {
        font-size: 2em;
    }
`;