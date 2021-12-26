import {React} from 'react';
import ImperialInput from './ImperialInput';
import FarmingInput from './FarmingInput';

/*If PopupLayout is visible by button click, return the corresponding Popup component */
const InputFactory = ({type,recalculateData}) => {

    switch (type) {
        case "/cooking":
            return <ImperialInput recalculateData={recalculateData}/>
        case "/alchemy":
            return <ImperialInput recalculateData={recalculateData}/>
        case "/farming":
            return <FarmingInput recalculateData={recalculateData}/>
        default:
            return <div>Error</div>
    }

}

export default InputFactory