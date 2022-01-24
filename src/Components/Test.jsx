import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Test = () => {
    const { setStage, questionsNo, diffLevel, correctCounter, setCorrectCounter } = useContext(AppContext)

    const [ currentQuestion, setCurrentQuestion ] = useState(1)
    const [ answer, setAnswer ] = useState('')
    const [ firstFactor, setFirstFactor ] = useState(0)
    const [ secondFactor, setSecondFactor ] = useState(0)


    useEffect( () => {
        setFirstFactor(Math.floor(diffLevel * Math.random() + 1))
        setSecondFactor(Math.floor(diffLevel * Math.random() + 1))
    }, [currentQuestion])

    const nextQuestion = (e) => {
        e.preventDefault()
        setAnswer('')

        const isCorrect = firstFactor * secondFactor === Number(answer)
        if (isCorrect) setCorrectCounter(correctCounter+1)

        if (currentQuestion < questionsNo) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setStage('summary')
        }
    }

    const answerChange = (e) => {
        console.log('badInput = ' + e.target.validity.badInput)
        if (!e.target.validity.badInput) {
            setAnswer(e.target.value)
        }
    }

    return (
        <div className='test'>
            <h1 className='section-title'>Pytanie nr { currentQuestion }</h1>
            <form onSubmit={nextQuestion}>
                <div className='input'>
                    <label> {firstFactor} x {secondFactor} = </label>
                    <input 
                        type="number"
                        //pattern="/^[0-9]$/"
                        name="questionsNo"
                        value={answer}
                        autoFocus
                        // onInput={(e) => answerChange(e)}
                        onChange={(e) => answerChange(e)}
                    />
                </div>
                <button type='submit'>Następne pytanie</button> 
            </form>
        </div>
    );
}

export default Test;