import { useContext } from "react";
import { AppContext } from "../Helpers/Context";

const Summary = () => {

    const { state, dispatch } = useContext(AppContext)

    const newTest = () => {
        dispatch({ type: 'setStage', value: 'menu'}) 
        dispatch({ type: 'resetAnswerList'}) 
        dispatch({ type: 'resetCorrectCounter'})
    }

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

    const endMsg = state.correctCounter/state.questionsNo > 0.9 ? 'Mistrzunio!' : (state.correctCounter/state.questionsNo > 0.8 ? 'Mogło być lepiej' : 'Cienizna :(') 
        
    return (
        <div className='summary'>
            <h1 className='section-title'>Twój wynik to</h1>
            <h1>{ state.correctCounter } / { state.questionsNo } &ndash; { endMsg }</h1>
            <button onClick={newTest} autoFocus>Rozpocznij nowy test</button>
            <p>Twoje odpowiedzi:</p>
            <ol className="answers-list">
                {state.answersList.map( item => (
                    <li key={item.id} className={item.isCorrect ? "" : "incorrect"}>
                        {item.firstFactor + operationSign + item.secondFactor} = {item.answer} 
                        <span>{item.isCorrect ? " " : " powinno być " + item.result}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Summary;