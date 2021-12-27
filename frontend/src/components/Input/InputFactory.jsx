import {React,useState,useRef,useEffect} from 'react';
import { getInitialValues } from './InitialValues';
import ImperialInput from './ImperialInput';
import FarmingInput from './FarmingInput';

/*If PopupLayout is visible by button click, return the corresponding Popup component */
const InputFactory = ({type,recalculateData}) => {
    const [values,setValues] = useState(getInitialValues(type))
    var didMount = useRef(false)
        
    //Call recalculateData when input changes to recalculate data and to re-render the data props of the table component
    useEffect(()=>{
        if (didMount.current) {
            recalculateData(values)
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