//import { ImageCarousel } from './ImageCarousel.js';
//import { Testimonials } from './Testimonials.js';

import { Carousel } from './Carousel.js';

import experience from '../img/experience.png';

export const Main = () => {
    return (
        <main>
            <div className="main-content">
                <div className="flex-container">
                    <Carousel type="img" duration="5000"/>
                    <div className="main-text">
                        <h2 className="welcome">Welcome to<br/>D.Simcock & Son</h2>
                        <p>We are a family run building and construction business based in Doncaster, established over 25 years ago.</p>
                        <p>We take on all aspects of building, from new builds to renovations, residential to commerical to industrial. We have captured many large industrial maintenance contracts, but are still small enough to care about individual home improvements.</p>
                        <p>Whatever work you require, contact us now and talk us through your requirements. We are Doncaster and South Yorkshire's most reliable builders!</p>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="secondary-text">
                        <h3>Environment</h3>
                        <p>At D.Simcock and Son we are always conscious of the environment, and are as sustainable as is possible in our work. We always locally source the best materials and products required for all of our projects. All scrap is disposed of accordingly. Doncaster's environmentally aware builders.</p></div>
                    <div className="secondary-text">
                        <h3>Experience</h3>
                        <p>Established in 1986, we have over 25 years of experience in the construction industry. We are now into our 3rd generation of builders in the family, gaining vast knowledge along the way in all aspects of the building and construction trade. You can confidently trust us with any project.</p>
                    </div>
                    <div className="secondary-text box-3">
                        <img src={experience} alt="" className="full-size"></img>
                    </div>
                </div>
            </div>

            <div className="secondary-content flex-container no-wrap center">
                <Carousel type="text" duration="6000"/>
                <div className="areas">
                    <h3>Residential</h3>
                    <p>We do work across various home projects. Whatever you need, from complete new builds or extensions, to interior renovations or room fittings, we will do it. We always take care with our finishes and have worked across a vast range of projects in our many years of work.</p>
                    <h3>Industrial</h3>
                    <p>Over the years, we have managed to capture some very large industrial contracts. We work on various industrial areas for whatever is required. We have building maintenance contracts, but also cover areas such as office/shop interior fittings and large area concreting.</p>
                </div>
            </div>
        </main>
)};