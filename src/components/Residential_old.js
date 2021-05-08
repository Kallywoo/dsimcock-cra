import Accordion from "./Accordion.js";

const Residential = () => {
    
    const array = [
        {
            title: 'Dorma Bungalow - Bawtry Road',
            images: [
                {
                    thumb: '../img/temp1.png',
                    src: '../img/temp2.png',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Dorma Bungalow Extension - Bessacarr',
            images: [
                {
                    thumb: '../img/temp3.png',
                    src: '../img/temp4.png',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'New Build - Bawtry Rd',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Kitchen Fit - Crookes, Sheffield',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Extension - Branton',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'New Build - Warning Tongue Drive',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Extension - Leeds',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Extension - Ranskill',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Fitted Kitchen',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'New Build - Walton Lodge',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Extension - Misson',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Housing Development - Beeford',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        },
        {
            title: 'Other',
            images: [
                {
                    thumb: '',
                    src: '',
                    alt: ':)'
                }
            ]
        }
    ];

    const accordionItems = Accordion(array);
    
    return (
        <main>
            <div className="main-content">
                <ul className="accordion-container">
                    {accordionItems.map((accordion) => accordion)}
                </ul>
            </div>
        </main>
    )
};

export default Residential;