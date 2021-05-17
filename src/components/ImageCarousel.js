import { images } from './Images.js';
import { useState, useEffect } from 'react';

export const ImageCarousel = () => {

    const [currentIndex, setIndex] = useState(0);
    const [fadeOut, setFade] = useState(false);
    const [image, setImage] = useState();
    const [title, setTitle] = useState("");
    const [alt, setAlt] = useState("");

    let handle = "";
        
    useEffect(() => {
        slideShow(); // play once immediately
    }, []);

    // probably needs a rewrite, seems hacky - look into animation libraries?
    // maybe with library mount/dismount every 5 and set fade on both events instead?

    useEffect(() => {

        handle = setTimeout(slideShow, 5000);

        return () => {
            clearTimeout(handle);
        }

    });

    // slideshow occasionally does not visually update from old image for a second after fade-in
    // html shows it did already update to new src prior though, so perhaps browser / some kind of cache issue rather than code?

    const slideShow = () => {
        
        setFade(true);

        setTimeout(function() {
            console.log(":(");
            setFade(false);
            setImage(images[currentIndex].src);
            setTitle(images[currentIndex].title);
            setAlt(images[currentIndex].alt);
        }, 500);

        setIndex(currentIndex + 1);

        if (currentIndex === images.length - 1) { setIndex(0); }
    };
    
    const pauseSlides = (event) => {
        console.log(":)");
        clearTimeout(handle);
    };
    
    const resumeSlides = (event) => {
        console.log(":D");
        handle = setTimeout(slideShow, 5000);
    };

    return (
            <div className="main-image" onMouseEnter={pauseSlides} onMouseLeave={resumeSlides}>
                <img id="slide-img" src={image} title={title} alt={alt} className={fadeOut ? "fadeOut" : ""}/>
            </div>
        );
    };