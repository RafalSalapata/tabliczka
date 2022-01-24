import { useContext } from "react";
import { AppContext } from "../Helpers/Context";

const Summary = () => {

    const { setStage, questionsNo, correctCounter, setCorrectCounter } = useContext(AppContext)

    const newTest = () => {
        setStage('menu')
        setCorrectCounter(0)
    }

    const endMsg = correctCounter/questionsNo > 0.8 ? 'Mistrzunio!' : (correctCounter/questionsNo > 0.6 ? 'Mogło być lepiej' : 'Cienizna :(') 
        
    return (
        <div className='summary'>
            <h1 className='section-title'>Twój wynik to</h1>
            <h1>{ correctCounter } / { questionsNo }</h1>
            <h2>{ endMsg }</h2>
            <button onClick={newTest} autoFocus>Rozpocznij nowy test</button>
        </div>
    );
}

export default Summary;