import {React} from 'react';
import DefaultFeedback from './DefaultFeedback';
import LikeFeedback from './LikeFeedback';
import SuggestionFeedback from './SuggestionFeedback'
import ProblemFeedback from './ProblemFeedback';
import SubmitPrompt from './SubmitPrompt';
import ErrorPrompt from './ErrorPrompt';

/*If PopupLayout is visible by button click, return the corresponding Popup component */
const FeedbackFactory = ({feedbackType, setFeedbackType}) => {

    switch (feedbackType) {
        case "like":
            return <LikeFeedback  setFeedbackType={setFeedbackType} feedbackType={feedbackType}/>
        case "suggestion":
            return <SuggestionFeedback setFeedbackType={setFeedbackType} feedbackType={feedbackType}/>
        case "problem":
            return <ProblemFeedback  setFeedbackType={setFeedbackType} feedbackType={feedbackType}/>
        case "submit":
            return <SubmitPrompt/>
        case "feedback":
            return <DefaultFeedback setFeedbackType={setFeedbackType}/>
        case "error":
            return <ErrorPrompt/>
        default:
            return <DefaultFeedback  setFeedbackType={setFeedbackType}/>
    }

}

export default FeedbackFactory