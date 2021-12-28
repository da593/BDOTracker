import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const SuggestionFeedback = ({setFeedbackType,feedbackType}) => {

    return (
        <FeedbackLayout prompt={"What is your suggestion?"} setFeedbackType={setFeedbackType} feedbackType={feedbackType}/>
    )

}

export default SuggestionFeedback
