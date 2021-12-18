import {React} from 'react'
import FeedbackLayout from './FeedbackLayout'

const LikeFeedback = ({setFeedbackType}) => {

    return (
        <FeedbackLayout prompt={"What did you like?"} setFeedbackType={setFeedbackType}/>
    )

}

export default LikeFeedback
