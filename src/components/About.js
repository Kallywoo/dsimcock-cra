import aboutPic from '../img/aboutpic.png';

export const About = () => {
    return (
        <main>
            <div className="main-content">
                <div className="flex-container">
                    <div className="about-text">
                        <p>D. Simcock and Son is a family run business which has been operating since 1986 through 3 generations of the Simcock family. based in the Yorkshire area.</p>
                        <p>Starting as a simple building company, doing extensions and maintenance, we have steadily grown bigger and better to where we are now, doing complete new builds and capturing large industrial contracts.</p>
                        <p>Our client base is largely in the industrial area, working with Grampian Country Foods and Green Core Grocery, to which we offer a full building maintenance service.</p>
                        <p>Capita Simmons is a large contract to which we have entered, for whom we have built full office areas, office refurbs, and car parks. We also carry out work in many aspects of retail and shopping areas, for big names such as Wilkinson, Next, and Paragon Foods.</p>
                        <p>Any aspect of building or maintenance that you require, from industrial, office, and retail, to new builds and extensions, we offer an excellent service throughout, with which we are sure you will be thrilled.</p>
                    </div>
                    <div className="about-image">
                        <img src={aboutPic} alt="" className="full-size"/>
                    </div>
                </div>
            </div>
            <div id="testimonials" className="secondary-content testimonial-content flex-container wrap">
                <div className="quote">
                    <blockquote><p>"The project was handled professionally from start to finish, with helpful insight along the way. Dave and his team have completely transformed our home!"</p> <cite>Mr & Mrs Peebles, Kitchen Fit, Sheffield</cite></blockquote>
                </div>
                <div className="quote">
                    <blockquote><p>"Excellent service throughout the build. Felt at ease all the way. Thrilled with the end result and would definitely recommend."</p> <cite>Mr & Mrs Wentworth, Dorma Conversion, Rotherham</cite></blockquote>
                </div>
                <div className="quote">    
                    <blockquote><p>"Very high standard of workmanship. Overall an excellent service with a personal touch."</p> <cite>Mr & Mrs Emerson, 4 Bedroom New Build, Doncaster</cite></blockquote>
                </div>
                <div className="quote">    
                    <blockquote><p>"Professionally managed and finished on time! Great standard of work, really happy with the job."</p> <cite>Mr & Mrs Goldberg, 4 Bedroom Refurbishment, Doncaster</cite></blockquote>
                </div>
            </div>
        </main>
    )
};