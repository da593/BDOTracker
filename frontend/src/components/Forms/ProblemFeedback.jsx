import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const ProblemFeedback = ({setFeedbackType,feedbackType}) => {

    return (
        <FeedbackLayout prompt={"What is the problem?"} setFeedbackType={setFeedbackType} feedbackType={feedbackType} />
    )

}

export default ProblemFeedback
