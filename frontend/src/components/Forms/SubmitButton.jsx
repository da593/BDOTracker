import {React} from 'react';


const SubmitButton = ({setFeedbackType}) => {
    return (
        <button className="submit-button" type="submit" onClick={setFeedbackType}>Submit</button>
    )
}

export default SubmitButton