import { useState } from 'react';

export const Accordion = ({children}) => {

    const [active, setActive] = useState(false);

    const toggle = () => {    
        setActive(!active);

        console.log(":)");
    };
    
    let {title, images} = children;

    // needs better key system? every image-set in an accordion is 0+, so every accordion has a dupe image key set

    // slide open/close animation needs adjusting, animation is too fast on open and too slow on close due to set size of container height

    return (
        <>
            <button className={`${"accordion"} ${active ? "active" : ""}`} onClick={toggle}>{title}</button>
            {active &&
                <div className={"panel"}>
                    {images.map((image, i) => <a key={"img-" + i} target="_blank" rel="noreferrer" href={image.src}>
                        <img src={image.thumb} alt={image.alt}/>
                    </a>)}
                </div>
            }
        </>
    );
};