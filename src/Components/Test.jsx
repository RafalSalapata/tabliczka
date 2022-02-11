import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";
import AnswerList from "./AnswerList";

const Test = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ currentQuestion, setCurrentQuestion ] = useState(1)
    const [ answer, setAnswer ] = useState('')
    const [ firstFactor, setFirstFactor ] = useState(0)
    const [ secondFactor, setSecondFactor ] = useState(0)

    useEffect( () => {
        let a = Math.floor(( state.diffLevelMax - state.diffLevelMin + 1 ) * Math.random() + state.diffLevelMin )
        let b = Math.floor(( state.diffLevelMax - a + 1 ) * Math.random() )
        
        if ( state.operation === 'multiplication' || state.operation === 'addition' || state.operation === 'subtraction' ) {
            setFirstFactor(a+b)
            setSecondFactor(a)
        } else {
            //division is treated differently as not every two numbers can by divided by themselves

            //all divisors of n
            const divisors = (n) => {
                return [...Array(n+1).keys()].slice(1).filter( i => n % i === 0)
            }

            //this is to avoid the situations where a=b or b=1 as much as possible for a given range of diffLevelMin and diffLevelMax
            if ( divisors(a).length > 2 ) {
                b = divisors(a)[Math.floor((divisors(a).length - 2) * Math.random() + 1)]
            } else if ( state.diffLevelMax < 4 ) {
                b = divisors(a)[Math.floor((divisors(a).length) * Math.random())]
            } else if ( a === state.diffLevelMax ) {
                a--
                b = divisors(a)[Math.floor((divisors(a).length - 2) * Math.random() + 1)]
            } else {
                a++
                b = divisors(a)[Math.floor((divisors(a).length - 2) * Math.random() + 1)]
            }

            setFirstFactor(a)
            setSecondFactor(b)
        }
    }, [currentQuestion, state.diffLevelMax, state.diffLevelMin, state.operation])

    let result = 0
    let operationSign = ''
    switch (state.operation) {
        case 'multiplication':
            operationSign = ' x '
            result = firstFactor * secondFactor
            break;
        case 'addition':
            operationSign = ' + '
            result = firstFactor + secondFactor
            break;
        case 'subtraction':
            operationSign = ' - '
            result = firstFactor - secondFactor
            break;
        case 'division':
            operationSign = ' : '
            result = firstFactor / secondFactor
            break;
        default:
            break;
    }

    const nextQuestion = (e) => {
        e.preventDefault()
        setAnswer('')


        const isCorrect = result === Number(answer)
        dispatch({ type: "addAnswer", value: {
            id : currentQuestion,
            firstFactor : firstFactor,
            secondFactor : secondFactor,
            result: result,
            answer : answer,
            isCorrect : isCorrect
        }})

        if (isCorrect) dispatch({ type: 'increaseCorrectCounter'})

        if (currentQuestion < state.questionsNo) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            dispatch({ type: 'setStage', value: 'summary' })
        }
    }

    const answerChange = (e) => {
        if (!e.target.validity.badInput) {
            setAnswer(e.target.value)
        }
    }

    return (
        <div className='test'>
            <h1 className='section-title'>{ localization.testQuestNo + currentQuestion }</h1>
            <form onSubmit={nextQuestion}>
                <div className='input'>
                    <label> {firstFactor + operationSign + secondFactor} = </label>
                    <input 
                        type="number"
                        //pattern="/^[0-9]$/"
                        name="questionsNo"
                        value={answer}
                        autoFocus
                        onChange={(e) => answerChange(e)}
                    />
                </div>
                <button type='submit'>{ localization.testNext }</button>
                <AnswerList />
            </form>
        </div>
    );
}

export default Test;