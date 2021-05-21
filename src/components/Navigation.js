import { Link } from '@reach/router';
import styled from 'styled-components';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <List>
                <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                <ListItem><StyledLink to="/about">About Us</StyledLink></ListItem>
                <ListItem><StyledLink to="/work">Our Work</StyledLink></ListItem>
                <ListItem><StyledLink to="/contact">Contact Us</StyledLink></ListItem>
            </List>
        </StyledNavigation>
)};

const StyledNavigation = styled.nav`
    background-color: #303080;
    padding: 0.32em;
    
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 0.32em;
    text-align: center;
`;

const ListItem = styled.li`
    display: inline;
    margin: 0 0.65em;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: larger;
    text-decoration: none;
    color: white;
    opacity: 1;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;