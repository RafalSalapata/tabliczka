import { useContext } from "react";
import { AppContext } from "../Helpers/Context";
import AnswerList from "./AnswerList";

const Summary = () => {

    const { state, dispatch, localization } = useContext(AppContext)

    const newTest = () => {
        dispatch({ type: 'setStage', value: 'menu'}) 
        dispatch({ type: 'resetAnswerList'}) 
        dispatch({ type: 'resetCorrectCounter'})
    }

    const endMsg = state.correctCounter/state.questionsNo > 0.9 ? localization.summaryMaster : (state.correctCounter/state.questionsNo > 0.8 ? localization.summaryCouldBeBett : localization.summaryPoor) 
        
    return (
        <div className='summary'>
            <h1 className='section-title'>{ localization.summaryYourResult }</h1>
            <h1>{ state.correctCounter } / { state.questionsNo } &ndash; { endMsg }</h1>
            <button onClick={newTest} autoFocus>{ localization.summaryNewTest }</button>
            <AnswerList />
        </div>
    );
}

export default Summary;