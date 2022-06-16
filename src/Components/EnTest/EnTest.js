import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Helpers/Context";
import AnswerList from "../AnswerList";

const EnTest = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ currentQuestion, setCurrentQuestion ] = useState(1) //index of the current question
    const [ answer, setAnswer ] = useState('') //user's answer to the current question
    const [ phrases, setPhrases ] = useState([{ pl: ''}]) //array of phrases that the user needs to translate

    const colors = [
        {
            en: 'blue',
            pl: 'niebieski',
        },
        {
            en: 'red',
            pl: 'czerwony',
        },
        // {
        //     en: 'What is the color of the grass?',
        //     pl: 'Jaki jest kolor trawy?',
        // },
    ]

    useEffect(() => {
        setPhrases(colors.sort( () => Math.random() - 0.5 ))
        dispatch({ type: 'setQuestionsNo', value: colors.length })

        //let subject = state.enTestSubject
        //setPhrasesToTranslate(colors.sort( () => Math.random() - 0.5 ))
    }, [])

    //sets up the result of current question
    let currentPhrasePl = phrases[currentQuestion-1].pl
    let currentPhraseEn = phrases[currentQuestion-1].en

    //it's fired when moving to the next question or, when it was the last one, to the summary stage
    const nextQuestion = () => {
        //e.preventDefault()

        //this validates user's answer, attaches it to the answer object and add it to answer list
        const isCorrect = currentPhraseEn === answer
        dispatch({ type: "addAnswer", value: {
            id : currentQuestion,
            firstFactor : 0,
            secondFactor : 0,
            currentPhrasePl: currentPhrasePl,
            currentPhraseEn: currentPhraseEn,
            answer : answer,
            isCorrect : isCorrect,
            operationSign: ''
        }})

        if (isCorrect) dispatch({ type: 'increaseCorrectCounter'})

        if (currentQuestion < phrases.length) {
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

    const handleEnterPress = (e) => {
        if (e.code === 'Enter' && answer !== '') {
            nextQuestion(e)
        }
    }

    return (
        <div className='test'>
            <h1 className='section-title'>{ localization.testQuestNo + currentQuestion }</h1>
            <div className="inputs">
                <div className='input'>
                    {console.log(phrases)}
                    <label> {phrases[currentQuestion-1].pl} = </label>
                    <input 
                        type="text"
                        //name="questionsNo"
                        value={answer}
                        autoFocus
                        onChange={(e) => answerChange(e)}
                        onKeyPress={handleEnterPress}
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

export default EnTest;