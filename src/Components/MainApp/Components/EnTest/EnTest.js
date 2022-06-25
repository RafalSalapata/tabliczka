import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../Helpers/Context";
import AnswerList from "../../../AnswerList";

const EnTest = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ currentQuestion, setCurrentQuestion ] = useState(1) //index of the current question
    const [ answer, setAnswer ] = useState('') //user's answer to the current question
    const [ phrases, setPhrases ] = useState([{}]) //array of phrases that the user needs to translate
    const [ currentPhrase, setCurrentPhrase ] = useState('') //current phrase that the user needs to translate
    const [ currentPhraseEn, setCurrentPhraseEn ] = useState('') //correct translation of current phrase

    useEffect(() => {
        const importEnTest = async () => {
            const { test } = await import(`../../../../TextObjects/english-tests/${state.enTestSubject}`)
            return test
        }

        importEnTest().then( res => {
            return res.sort( () => Math.random() - 0.5 )
        }).then( test => {
            setPhrases(test)
            dispatch({ type: 'setQuestionsNo', value: test.length })
        }).catch( err => {
            console.log(err)
        })

    }, [dispatch, state.enTestSubject])

    //setting up the result of current question
    useEffect(() => {
        if (state.lang === 'pl') setCurrentPhrase(phrases[currentQuestion-1].pl)
        else if (state.lang === 'cz') setCurrentPhrase(phrases[currentQuestion-1].cz)

        setCurrentPhraseEn(phrases[currentQuestion-1].en)

    }, [currentQuestion, phrases, state.lang])

    //it's fired when moving to the next question or, when it was the last one, to the summary stage
    const nextQuestion = () => {
        //this validates user's answer, attaches it to the answer object and add it to answer list
        let answerCleaned = answer.trim()
        let isCorrect = currentPhraseEn === answerCleaned
        dispatch({ type: "addAnswer", value: {
            id : currentQuestion,
            currentPhrase: currentPhrase,
            currentPhraseEn: `"${currentPhraseEn}"`,
            answer : `"${answerCleaned}"`,
            isCorrect : isCorrect,
        }})

        if (isCorrect) dispatch({ type: 'increaseCorrectCounter'})

        if (currentQuestion < phrases.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            dispatch({ type: 'setStage', value: 'summary' })
        }

        setAnswer('')
    }

    const handlePressEnter = (e) => {
        if (e.charCode === 13 && answer !== '') nextQuestion(e)
    }

    return (
        <div className='test'>
            <h1 className='section-title'>{ localization.testQuestNo + currentQuestion }</h1>
            <div className="inputs">
                <div className='en-input'>
                    <label> { currentPhrase } = </label>
                    <input 
                        type="text"
                        //name="questionsNo"
                        autoCapitalize='none'
                        value={answer}
                        autoFocus
                        onChange={(e) => setAnswer(e.target.value)}
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

export default EnTest;