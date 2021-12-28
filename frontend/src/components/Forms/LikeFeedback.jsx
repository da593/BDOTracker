import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const LikeFeedback = ({setFeedbackType,feedbackType}) => {

    return (
        <FeedbackLayout prompt={"What did you like?"} setFeedbackType={setFeedbackType} feedbackType={feedbackType}/>
    )

}

export default LikeFeedback
