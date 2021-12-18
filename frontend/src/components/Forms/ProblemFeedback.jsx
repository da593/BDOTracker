import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const ProblemFeedback = ({setFeedbackType}) => {

    return (
        <FeedbackLayout prompt={"What is the problem?"} setFeedbackType={setFeedbackType}/>
    )

}

export default ProblemFeedback
