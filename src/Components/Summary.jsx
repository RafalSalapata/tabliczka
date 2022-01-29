import { useContext } from "react";
import { AppContext } from "../Helpers/Context";

const Summary = () => {

    const { setStage, questionsNo, correctCounter, setCorrectCounter, answersList, setAnswersList } = useContext(AppContext)

    const newTest = () => {
        setStage('menu')
        setAnswersList([])
        setCorrectCounter(0)
    }

    const endMsg = correctCounter/questionsNo > 0.9 ? 'Mistrzunio!' : (correctCounter/questionsNo > 0.8 ? 'Mogło być lepiej' : 'Cienizna :(') 
        
    return (
        <div className='summary'>
            <h1 className='section-title'>Twój wynik to</h1>
            <h1>{ correctCounter } / { questionsNo } &ndash; { endMsg }</h1>
            <button onClick={newTest} autoFocus>Rozpocznij nowy test</button>
            <p>Twoje odpowiedzi:</p>
            <ol className="answers-list">
                {answersList.map( item => (
                    <li key={item.id} className={item.isCorrect ? "" : "incorrect"}>
                        {item.firstFactor} x {item.secondFactor} = {item.answer} 
                        <span>{item.isCorrect ? " " : " powinno być " + item.firstFactor * item.secondFactor}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Summary;