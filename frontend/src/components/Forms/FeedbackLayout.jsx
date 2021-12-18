import {React} from 'react';
import BackButton from './BackButton';
import SubmitButton from './SubmitButton';

const FeedbackLayout = ({setFeedbackType,prompt}) => {
    return (
        <div className="flex-bottom">
            <BackButton setFeedbackType={setFeedbackType}/>
            <div className="bottom-prompt">
                {prompt}
            </div>
            <div className="text-box">
                <textarea placeholder="Enter a minimum of 10 characters..."/>
            </div>
            <SubmitButton setFeedbackType={setFeedbackType}/>
        </div>

    )
}

export default FeedbackLayout