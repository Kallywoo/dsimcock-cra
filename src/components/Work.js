import {Link} from '@reach/router';

const Work = () => {
    return (
        <main>
            <div className="main-content">
                <div className="work-examples">
                    <p>At D Simcock & Son we do work for both the residential and industrial sectors. Choose below to see examples of each.</p>
                    <Link to="/residential.html">Residential</Link>
                    <Link to="/industrial.html">Industrial</Link>
                </div>
            </div>
        </main>
    )
}

export default Work;