import { useState } from 'react';
import { Link } from '@reach/router';
import styled, { keyframes } from 'styled-components';

import mobileNav from '../img/MobileNav.png';

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const openNav = () => {
        setOpen(!open);
    }

    // needs fade-in/fade-out

    return (
        <MobileNav>
            <MobileHeader>
                <Button onClick={openNav}>
                    <Hamburger src={mobileNav} alt=""/>
                </Button>
            </MobileHeader>
            {open &&
                <NavigationDiv>
                    <nav>
                        <List>
                            <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                            <ListItem><StyledLink to="/about">About Us</StyledLink></ListItem>
                            <ListItem><StyledLink to="/work">Our Work</StyledLink></ListItem>
                            <ListItem><StyledLink to="/contact">Contact Us</StyledLink></ListItem>
                        </List>
                    </nav>
                </NavigationDiv>
            }
        </MobileNav>
    )
};

const MobileNav = styled.div`
    display: none;

    @media only screen and (max-width: 480px) {
        display: block;
        position: fixed;
        width: 100%;
        z-index: 1;
        text-align: right;
    }
`;

const MobileHeader = styled.div`
    background-color: #303080;
    border-bottom: 4px solid #8186f3;
    padding: 0.5em;
`;

const Button = styled.button`
    padding: 0;
    padding-left: 0.4em;
    background-color: #303080;
    border-style: none;
    border-left: 1px solid #28286e;

    &:active img {
        opacity: 0.75;
        background-color: #1a1a53;
        border-radius: 5px;
    }
`;

const Hamburger = styled.img`
    vertical-align: middle;
`;

const NavAnimation = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const NavigationDiv = styled.div`
    background-color: #303080;
    border-radius: 0.5em;
    width: 75%;
    margin: 0.5em;
    margin-left: auto;
    padding: 0.4em;
    animation-name: ${NavAnimation};
    animation-duration: 0.175s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 0.32em;
    text-align: center;
`;

const ListItem = styled.li`
    display: block;
    border-bottom: 3px solid white;
    font-size: 2.5em;
    padding: 0.2em;
    margin: 0 0.65em;

    &:last-child {
        border-bottom: none;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    opacity: 1;
    transition: 0.3s;
    color: #CCE8FF;

    &:hover {
        opacity: 0.7;
    }
`;