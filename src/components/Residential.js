import Accordion from "./Accordion.js";
import {residentialArray as array} from './WorkArrays.js';

const Residential = () => {

    return (
        <main>
            <div className="main-content">
                <ul className="accordion-container">
                    {array.map((item, i) => <li key={"acc-" + i}><Accordion>{item}</Accordion></li>)}
                </ul>
            </div>
        </main>
    )
};

export default Residential;