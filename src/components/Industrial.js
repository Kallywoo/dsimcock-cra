import { Accordion } from './Accordion.js';
import {industrialArray as array} from './WorkArrays.js';

export const Industrial = () => {
    
    let keyInit = "acc-"
    let keyGen = 0;

    return (
        <main>
            <div className="main-content">
                <ul className="accordion-container">
                    {array.map((item) => <li key={keyInit + keyGen++}><Accordion>{item}</Accordion></li>)}
                </ul>
            </div>
        </main>
    )
};