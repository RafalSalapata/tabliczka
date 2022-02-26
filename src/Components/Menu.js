import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Menu = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ badInputs, setBadInputs ] = useState(false) //false when all inputs make sense
    const [ errorMsg, setErrorMsg ] = useState('') //error message shown whenever inputs are incorrect
    const [ operation, setOperation ] = useState(state.operation) //it stores the type of operation, like: multiplication, subtruction, etc...

    //checking inputs correctness and setting error message 
    useEffect( () => {
        const inputsCheck = () => {
            const arePositive = state.questionsNo > 0 && state.diffLevelMax > 0 && state.diffLevelMin > 0
            const diffLevelOK = state.diffLevelMax > state.diffLevelMin

            if (!arePositive) {
                setErrorMsg(localization.menuErrMsgPositive)
                setBadInputs(true)
            } else if (!diffLevelOK) {
                setErrorMsg(localization.menuErrMsgIncrease)
                setBadInputs(true)
            } else {
                setBadInputs(false)
            } 
        }
    
        inputsCheck()
    }, [state.questionsNo, state.diffLevelMax, state.diffLevelMin, localization])

    //it's launched whenever any numerical input changes
    const paramsChange = (e) => {
        let newValue = Number(e.target.value)
        let name = e.target.name

        if (name === "questionsNo") dispatch({ type: 'setQuestionsNo', value: newValue}) 
        else if (name === "rangeMax") dispatch({ type: 'setDiffLevelMax', value: newValue})
        else dispatch({ type: 'setDiffLevelMin', value: newValue})
    }

    const startTest = () => {
        dispatch({ type: 'setOperation', value: operation })
        if (!badInputs) dispatch({ type: 'setStage', value: 'test'})
    }

    return (
        <div>
            <h1 className='section-title'>{ localization.menuSettings }</h1>
            <div className="inputs">
                <label>{ localization.menuQuestNo }</label>
                <input 
                    type="number"
                    min='1'
                    //max='100'
                    name="questionsNo" 
                    defaultValue={ state.questionsNo }
                    onChange={ paramsChange }
                />
                <label>{localization.menuOperation}</label>
                <select defaultValue={ operation } onChange={ e => setOperation( e.target.value ) }>
                    <option value="multiplication">{ localization.menuMultiplication }</option>
                    <option value="addition">{ localization.menuAddition }</option>
                    <option value="subtraction">{ localization.menuSubtraction }</option>
                    <option value="division">{ localization.menuDivision }</option>
                </select>
                <label>{ localization.menuRange }</label>
                <div className="range">
                    <span>{ localization.menuRangeMin }</span>:
                    <input 
                        type="number" 
                        name="rangeMin" 
                        min='1'
                        //max='9999'
                        defaultValue={ state.diffLevelMin }
                        onChange={ paramsChange }
                    />
                    <span>{localization.menuRangeMax}</span>:
                    <input 
                        type="number" 
                        name="rangeMax" 
                        min='2'
                        //max='10000'
                        defaultValue={ state.diffLevelMax }
                        onChange={ paramsChange }
                    />
                </div>
            </div>
            {badInputs 
                ? <p className="error-msg">{errorMsg}</p> 
                : <button onClick={startTest} autoFocus>Start</button>
            }
        </div>
    );
}

export default Menu;