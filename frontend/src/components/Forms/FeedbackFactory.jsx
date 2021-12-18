import {React} from 'react';
import DefaultFeedback from './DefaultFeedback';
import LikeFeedback from './LikeFeedback';
import SuggestionFeedback from './SuggestionFeedback'
import ProblemFeedback from './ProblemFeedback';
import SubmitPrompt from './SubmitPrompt';

/*If PopupLayout is visible by button click, return the corresponding Popup component */
const FeedbackFactory = ({feedbackType, setFeedbackType}) => {

    switch (feedbackType) {
        case "like":
            return <LikeFeedback  setFeedbackType={setFeedbackType}/>
        case "suggestion":
            return <SuggestionFeedback setFeedbackType={setFeedbackType}/>
        case "problem":
            return <ProblemFeedback  setFeedbackType={setFeedbackType}/>
        case "submit":
            return <SubmitPrompt  setFeedbackType={setFeedbackType}/>
        case "feedback":
            return <DefaultFeedback setFeedbackType={setFeedbackType}/>
        default:
            return <DefaultFeedback  setFeedbackType={setFeedbackType}/>
    }

}

export default FeedbackFactory