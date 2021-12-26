import {React,useState} from 'react';
import { getImperialInitialValues } from './InitialValues';
import InputGroup from './InputGroup';
import {getRegex, validateNumber, validateRange} from './validation';



const ImperialInput = ({recalculateData}) => {
    const [values,setValues] = useState(getImperialInitialValues)

    //Checks if the inputted value follows its validation criteria (regex & range)
    function validate(event) {
        
        let {value,name,min,max} = event.target;
        //Use getAttribute to get custom attribute
        let type = event.target.getAttribute('typeof')
        
        //convert input string to number
        value = +value
        min = +min
        max = +max

        //If inputted value follows the regex and is in the range, set the new inputted value and update calculated values
        if ( validateNumber(value,getRegex(type)) === true) {
            value = validateRange(value,min,max)
            setValues({
                ...values,
                [name]: value,
              });
        
            recalculateData(values.mastery,values.cp)
        }
        
    }


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
                    onChange={validate}
                   
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
                    onChange={validate}
                   
                    />
                }
            />
        </div>
    )
}

export default ImperialInput