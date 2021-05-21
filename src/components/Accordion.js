import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import arrow from '../img/down.png';

export const Accordion = ({children}) => {

    const [active, setActive] = useState(false);

    const toggle = () => {    
        setActive(!active);

        //console.log(":)");
    };
    
    let {title, images} = children;

    // needs better key system? every image-set in an accordion is 0+, so every accordion has a dupe image key set

    // slide open/close animation needs adjusting, animation is too fast on open and too slow on close due to set size of container height

    return (
        <>
            <Button active={active ? true : false} onClick={toggle}>{title}</Button>
            {active &&
                <Panel>
                    {images.map((image, i) => 
                    <ImageLink key={"img-" + i} target="_blank" rel="noreferrer" href={image.src}>
                        <Image src={image.thumb} alt={image.alt}/>
                    </ImageLink>)}
                </Panel>
            }
        </>
    );
};

const Button = styled.button`
    width: 100%;
    background-color: #ECEBFF;
    position: relative;
    overflow: hidden;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    padding: 2em 0em;
    text-align: left;
    transition: 0.4s;
    font-size: x-small;

    &:after {
        content: url(${arrow});
        position: relative;
        left: 6%;
        float: right;
        transform: ${props => props.active ? "rotate(180deg)" : "none"};
        transition: rotate 0.2s ease-in-out;

        @media only screen and (max-width: 680px) {
            left: 10%;
        }

        @media only screen and (max-width: 480px) {
            display: none;
        }
    }

    &:hover {
        color: #1693eb;
    }

    &:hover:after {
        left: 0%;
        transition: all 0.2s ease-in-out;
    }

    @media only screen and (max-width: 1000px) {
        text-align: center;
    }

    @media only screen and (max-width: 480px) {
        font-size: medium;
    }
`;

const PanelAnimation = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const Panel = styled.div`
    position: relative;
    top: 100%;
    width: 100%;
    background-color: #ECEBFF;
    text-align: left;
    animation-name: ${PanelAnimation};
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;

    @media only screen and (max-width: 1000px) {
        text-align: center;
    }
`;

const Image = styled.img`
    width: 150px;
    margin: 1.3em 0.65em;
`;

const ImageLink = styled.a`
    text-decoration: none;
`;