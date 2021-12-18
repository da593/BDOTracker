import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const SuggestionFeedback = ({setFeedbackType}) => {

    return (
        <FeedbackLayout prompt={"What is your suggestion?"} setFeedbackType={setFeedbackType}/>
    )

}

export default SuggestionFeedback
