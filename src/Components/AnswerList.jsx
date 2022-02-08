import { useContext } from "react";
import { AppContext } from "../Helpers/Context";

const AnswerList = () => {

    const { state, localization } = useContext(AppContext)

    let operationSign = ''
    switch (state.operation) {
        case 'multiplication':
            operationSign = ' x '
            break;
        case 'addition':
            operationSign = ' + '
            break;
        case 'subtraction':
            operationSign = ' - '
            break;
        case 'division':
            operationSign = ' : '
            break;
        default:
            break;
    }

    return (
        <div>
            <p>{ state.answersList.length === 0 ? "" : localization.summaryYourAns }</p>
            <ol className="answers-list">
                {state.answersList.map( item => (
                    <li key={item.id} className={item.isCorrect ? "" : "incorrect"}>
                        {item.firstFactor + operationSign + item.secondFactor} = {item.answer} 
                        <span>{item.isCorrect ? "" : localization.summarySholdBe + item.result}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
 
export default AnswerList;