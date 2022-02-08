import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Menu = () => {
    const { state, dispatch, localization } = useContext(AppContext)

    const [ badInputs, setBadInputs ] = useState(false) //false when all inputs make sense
    const [ errorMsg, setErrorMsg ] = useState('') //error message shown whenever inputs are incorrect
    const [ operation, setOperation ] = useState(state.operation) // it stores the operation like: multiplication, subtruction, etc...

    useEffect( () => {
        const inputsCheck = () => {
            const arePositive = state.questionsNo > 0 && state.diffLevelMax > 0 && state.diffLevelMin > 0
            const diffLevelOK = state.diffLevelMax > state.diffLevelMin

            if (!arePositive) {
                setErrorMsg(localization.menuErrMsgPositive)
                setBadInputs(true)
            } else if (!diffLevelOK) {
                setErrorMsg(localization.menuErrMsgIcrease)
                setBadInputs(true)
            } else {
                setBadInputs(false)
            } 
        }
    
        inputsCheck()
    }, [state, localization.menuErrMsgIcrease, localization.menuErrMsgPositive])

    const handleChange = (e) => {
        let value = Number(e.target.value)
        let name = e.target.name

        if (name === "questionsNo") dispatch({ type: 'setQuestionsNo', value: value}) 
        else if (name === "rangeMax") dispatch({ type: 'setDiffLevelMax', value: value})
        else dispatch({ type: 'setDiffLevelMin', value: value})
    }

    const startTest = () => {
        dispatch({ type: 'setOperation', value: operation })
        if (!badInputs) dispatch({ type: 'setStage', value: 'test'})
    }

    return (
        <div className='menu'>
            <h1 className='section-title'>{localization.menuSettings}</h1>
            <div className="inputs">
                <div className="input">
                    <label>{localization.menuQuestNo}</label>
                    <input 
                        type="number"
                        min='1'
                        // max='20'
                        name="questionsNo" 
                        defaultValue={ state.questionsNo }
                        onChange={ handleChange }
                    />
                </div>
                <div className="input">
                    <label>{localization.menuOperation}</label>
                    <select name="operation" id="operation" defaultValue={operation} onChange={ e => setOperation( e.target.value )}>
                        <option value="multiplication">{localization.menuMultiplication}</option>
                        <option value="addition">{localization.menuAddition}</option>
                        <option value="subtraction">{localization.menuSubtraction}</option>
                        <option value="division">{localization.menuDivision}</option>
                    </select>
                </div>
                <label className="text-row">{localization.menuRange}</label>
                <div className="input range-input">
                    {localization.menuRangeMin}:
                    <input 
                        type="number" 
                        name="rangeMin" 
                        defaultValue={state.diffLevelMin}
                        onChange={handleChange}
                    />
                    {localization.menuRangeMax}:
                    <input 
                        type="number" 
                        name="rangeMax" 
                        defaultValue={state.diffLevelMax}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={startTest} autoFocus>Start</button>
            {badInputs && <p>{errorMsg}</p>}
        </div>
    );
}

export default Menu;