import {React,useState,useRef,useEffect} from 'react';
import ImperialInput from './ImperialInput';
import FarmingInput from './FarmingInput';

/*Returns type of input component base on page and also re-renders the page whenever an input field is change  */
const InputFactory = ({type,recalculateData,inputValues,setInputValues}) => {
    const [values,setValues] = useState(JSON.parse(inputValues))
    var didMount = useRef(false)
    
    //re-render when input value changes and update the new input values. To set the input values, they must be stringified for local storage
    useEffect(()=>{
        if (didMount.current) {
            setInputValues(JSON.stringify(values))
            
        }
        else{
            didMount.current = true
        }
    },[values])


    function setValue(name,value) {
        
        setValues({
            ...values,
            [name]: value,
          });
    }

    function setProfessionalLevel(selectValue,pValue) {
        setValues({
            ...values,
            "pSelect": selectValue,
            "pLevel": pValue,
          });
    }

    

    switch (type) {
        case "/cooking":
            return <ImperialInput recalculateData={recalculateData} setValue={setValue} values={values}/>
        case "/alchemy":
            return <ImperialInput recalculateData={recalculateData} setValue={setValue} values={values}/>
        case "/farming":
            return <FarmingInput recalculateData={recalculateData} setValue={setValue} setProfessionalLevel={setProfessionalLevel} values={values}/>
        default:
            return <div></div>
    }

}

export default InputFactory