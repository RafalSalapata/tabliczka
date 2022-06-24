import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../Helpers/Context";
import AnswerList from "../../../AnswerList";

const Test = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ currentQuestion, setCurrentQuestion ] = useState(1) //index of the current question
    const [ answer, setAnswer ] = useState('') //user's answer to the current question
    const [ firstFactor, setFirstFactor ] = useState(0) //first factor of the operation
    const [ secondFactor, setSecondFactor ] = useState(0) //second factor of the operation

    //this one sets randomly first and second factors of the operation and is fired for each question in the test
    useEffect( () => {
        let a = Math.floor(( state.diffLevelMax - state.diffLevelMin + 1 ) * Math.random() + state.diffLevelMin )
        let b = Math.floor(( state.diffLevelMax - a + 1 ) * Math.random() )
        
        //division is treated differently as not every two numbers can by divided by themselves
        if ( state.operation !== 'division' ) {
            setFirstFactor(a+b)
            setSecondFactor(a)
        } else {
            //all divisors of n
            const divisors = (n) => {
                return [...Array(n+1).keys()].slice(1).filter( i => n % i === 0)
            }

            //this is to avoid division by 1 or the situations where firstFactor=secondFactor 
            //as much as possible for a given range of diffLevelMin and diffLevelMax
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

    //maps operation to a corresponding sign and sets up the result of current opperation
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

    //it's fired when moving to the next question or, when it was the last one, to the summary stage
    const nextQuestion = (e) => {
        e.preventDefault()

        //this validates user's answer, attach it to the answer object and add it to answer list
        const isCorrect = result === Number(answer)
        dispatch({ type: "addAnswer", value: {
            id : currentQuestion,
            firstFactor : firstFactor,
            secondFactor : secondFactor,
            result: result,
            answer : answer,
            isCorrect : isCorrect,
            operationSign: operationSign
        }})

        if (isCorrect) dispatch({ type: 'increaseCorrectCounter'})

        if (currentQuestion < state.questionsNo) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            dispatch({ type: 'setStage', value: 'summary' })
        }
        
        setAnswer('')
    }

    const answerChange = (e) => {
        if (!e.target.validity.badInput) {
            setAnswer(e.target.value)
        }
    }

    const handlePressEnter = (e) => {
        if (e.charCode === 13 && answer !== '') nextQuestion(e)
    }

    return (
        <div className='test'>
            <h1 className='section-title'>{ localization.testQuestNo + currentQuestion }</h1>
            <div className="inputs">
                <div className='input'>
                    <label> {firstFactor + operationSign + secondFactor} = </label>
                    <input 
                        type="number"
                        name="questionsNo"
                        value={answer}
                        autoFocus
                        onChange={(e) => answerChange(e)}
                        onKeyPress={handlePressEnter}
                    />
                </div>
            </div>
            <button disabled={answer === '' ? true : false } onClick={nextQuestion}>
                { localization.testNext }
            </button>
            {state.answersList.length > 0 && <AnswerList />}
        </div>
    );
}

export default Test;