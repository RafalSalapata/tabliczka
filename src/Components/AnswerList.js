import { useContext } from "react";
import { AppContext } from "../Helpers/Context";
import { AnswerListStyled } from "./StyledComponents/AnswerList.styled";

const AnswerList = () => {
    const { state, localization } = useContext(AppContext)

    return (
        <AnswerListStyled>
            <p>{ localization.summaryYourAns }</p>
            <ol className="answers-list">
                {state.answersList.map( item => (
                    <li key={item.id} className={item.isCorrect ? "" : "incorrect"}>
                        {item.firstFactor + item.operationSign + item.secondFactor} = {item.answer} 
                        <span>{item.isCorrect ? "" : localization.summarySholdBe + item.result}</span>
                    </li>
                ))}
            </ol>
        </AnswerListStyled>
    );
}
 
export default AnswerList;