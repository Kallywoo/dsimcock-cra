import { images } from './Images.js';
import { quotes } from './Quotes.js';

import { useState, useEffect } from 'react';
import { Link } from '@reach/router';

export const Carousel = ({type, duration}) => {

    const [currentIndex, setIndex] = useState(0);
    const [fadeOut, setFade] = useState(false);

    // images
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [alt, setAlt] = useState();

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
            } else if(type === "text") {
                setQuote(quotes[currentIndex].quote);
                setAuthor(quotes[currentIndex].author);
            }

        }, 500);

        setIndex(currentIndex + 1);

        if ((type === "img" && currentIndex === images.length - 1)
        || (type === "text" && currentIndex === quotes.length - 1)) 
        { setIndex(0); }
    };
    
    const pauseSlides = (event) => {
        //console.log(":)");
        clearTimeout(handle);
    };
    
    const resumeSlides = (event) => {
        //console.log(":D");
        handle = setTimeout(slideShow, duration);
    };

    if(type === "img") {
        return (
            <div className="main-image" onMouseEnter={pauseSlides} onMouseLeave={resumeSlides}>
                <img id="slide-img" src={image} title={title} alt={alt} className={fadeOut ? "fadeOut" : ""}/>
            </div>
        );
    } else if(type === "text") {
        return (
            <div className="testimonials">
                <Link to="/about#testimonials">
                    <blockquote id="slide-text" className={fadeOut ? "fadeOut" : ""}><p><span>“ </span>{quote}<span> ”</span></p> <cite>{author}</cite></blockquote>
                </Link>
            </div>
        );
    };

};