import { useState, useEffect } from 'react';
import {Link} from '@reach/router';

const Testimonials = () => {

    const quotes = [
        {
            quote: 'The project was professionally handled from start to finish.',
            author: 'Mr & Mrs Peebles, Sheffield'
        },
        {
            quote: 'Thrilled with the end result and would definitely recommend.',
            author: 'Mr & Mrs Wentworth, Rotherham',
        },
        {
            quote: 'Overall an excellent service with a personal touch.',
            author: 'Mr & Mrs Emerson, Doncaster',
        },
        {
            quote: 'Great standard of work, really happy with the job.',
            author: 'Mr & Mrs Goldberg, Doncaster'
        }
    ];

    const [currentIndex, setIndex] = useState(0);
    const [fadeOut, setFade] = useState(false);
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
        
    useEffect(() => {
        slideShow(); // play once immediately
    }, []);

    useEffect(() => {
        
        let mounted = true;

        if (mounted) {
            const handle = setTimeout(slideShow, 6000);

            return () => {
                clearTimeout(handle);
            }
        }

        return function cleanup() {
            mounted = false;
        }

    });

    const slideShow = () => {
        
        setFade(true);

        setTimeout(function() {
            console.log(":(");
            setFade(false);
            setQuote(quotes[currentIndex].quote);
            setAuthor(quotes[currentIndex].author);
        }, 500);

        setIndex(currentIndex + 1);

        if (currentIndex === quotes.length - 1) { setIndex(0); }
    };

    return (
        <div className="testimonials">
            <Link to="/about.html#testimonials">
                <blockquote id="slide-text" className={fadeOut ? "fadeOut" : ""}><p><span>“ </span>{quote}<span> ”</span></p> <cite>{author}</cite></blockquote>
            </Link>
        </div>
        );
    };

export default Testimonials;