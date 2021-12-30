
import {React} from 'react';

import InputGroup from './InputGroup';
import {validateNumber, validateRange} from './validation';

/*Returns all inputs needed for the Cooking & alchemy page */
const ImperialInput = ({setValue,values}) => {
  
    return (
        <div className="input-grid">
            <InputGroup 
                label="Mastery"
                input={
                    <input 
                    typeof="integer"
                    name="mastery"
                    min={0}
                    max={2000}
                    value={values.mastery}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                   
                    />
                }
            />
            <InputGroup 
                label="CP"
                input= {
                    <input
                    typeof="integer"
                    name="cp"
                    min={0}
                    max={5000}
                    value={values.cp}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                   
                    />
                }
            />
        </div>
    )
}

export default ImperialInput