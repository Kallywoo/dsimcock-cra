import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { images } from './Images.js';
import { quotes } from './Quotes.js';

export const Carousel = ({type, duration}) => {

    const [currentIndex, setIndex] = useState(0);
    const [fadeOut, setFade] = useState(false);

    // images
    const [nextIndex, setNextIndex] = useState(1);

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [alt, setAlt] = useState();

    const [nextImage, setNextImage] = useState();

    // quotes
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    let handle = "";
        
    useEffect(() => {
        slideShow(); // play once immediately
    }, []);

    useEffect(() => {

        handle = setTimeout(slideShow, duration);

        return () => {
            clearTimeout(handle);
        }

    });

    const slideShow = () => {
        
        setFade(true);

        setTimeout(function() {

            //console.log(":(");
            setFade(false);

            if(type === "img") {
                setImage(images[currentIndex].src);
                setTitle(images[currentIndex].title);
                setAlt(images[currentIndex].alt);

                setNextImage(images[nextIndex].src);
            } else if(type === "text") {
                setQuote(quotes[currentIndex].quote);
                setAuthor(quotes[currentIndex].author);
            }

        }, 500);

        setIndex(currentIndex + 1);
        setNextIndex(nextIndex + 1);

        if (nextIndex === images.length - 1)
        { setNextIndex(0); }

        if ((type === "img" && currentIndex === images.length - 1)
        || (type === "text" && currentIndex === quotes.length - 1)) 
        { setIndex(0); }
    };
    
    const pauseSlides = () => {
        //console.log(":)");
        clearTimeout(handle);
    };
    
    const resumeSlides = () => {
        //console.log(":D");
        handle = setTimeout(slideShow, duration);
    };

    if(type === "img") {
        return (
            <ImageContainer onMouseEnter={pauseSlides} onMouseLeave={resumeSlides}>
                <Image 
                    id="slide-img" 
                    src={image} 
                    title={title} 
                    alt={alt} 
                    fade={fadeOut ? true : false}
                />
                <HiddenImage 
                    src={nextImage} // loads the next image to prevent occasional delayed swap issue
                />
            </ImageContainer>
        );
    } else if (type === "text") {
        return (
            <QuoteContainer>
                <StyledLink to="/about#testimonials">
                    <Blockquote id="slide-text" fade={fadeOut ? true : false}>
                        <Paragraph>
                            <Span>“ </Span>{quote}<Span> ”</Span>
                        </Paragraph> 
                        <Cite>{author}</Cite>
                    </Blockquote>
                </StyledLink>
            </QuoteContainer>
        );
    };

};

const ImageContainer = styled.div`
    width: 64%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 95%;
    opacity: ${props => props.fade ? "0" : "1"};
    transition: opacity 0.5s;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const HiddenImage = styled.img`
    display: none;
`

const QuoteContainer = styled.div`
    min-width: 33%;
    font-size: larger;
    margin-right: 1.3em;
`;

const Blockquote = styled.blockquote`
    margin: 0.65em;
    text-align: center;
    opacity: ${props => props.fade ? "0" : "1"};
    transition: opacity 0.5s;
`;

const Paragraph = styled.p`
    margin-top: 0;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: normal;
    font-size: larger;
    letter-spacing: 0.1em;
    line-height: 100%;
    color: #3a3a87;
`;

const Cite = styled.cite`
    margin-top: 0;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: normal;
    letter-spacing: 0.1em;
    line-height: 100%;
    color: black;
    font-size: large;
    font-style: normal;
`;

const Span = styled.span`
    font-family: 'Times New Roman';
    color: #A496FF;

    &:first-child {
        font-size: 4em;
        position: relative;
        top: 0.3em;
    }

    &:last-child {
        font-size: 6em;
        opacity: 0.4;
        vertical-align: middle;
        float: right;
        padding-top: 0.4em;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:active {
        color: black;
    }
`;