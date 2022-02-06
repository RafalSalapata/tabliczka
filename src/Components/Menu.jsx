import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Menu = () => {
    const { state, dispatch } = useContext(AppContext)

    const [ badInputs, setBadInputs ] = useState(false) //false when all inputs make sense
    const [ errorMsg, setErrorMsg ] = useState('') //error message shown whenever inputs are incorrect
    const [ operation, setOperation ] = useState(state.operation) // it stores the operation like: multiplication, subtruction, etc...

    useEffect( () => {
        const inputsCheck = () => {
            const arePositive = state.questionsNo > 0 && state.diffLevelMax > 0 && state.diffLevelMin > 0
            const diffLevelOK = state.diffLevelMax > state.diffLevelMin

            if (!arePositive) {
                setErrorMsg('Parametry muszą być większe od zera!')
                setBadInputs(true)
            } else if (!diffLevelOK) {
                setErrorMsg('Pole "od" musi być mniejsze od pola "do"')
                setBadInputs(true)
            } else {
                setBadInputs(false)
            } 
        }
    
        inputsCheck()
    }, [state])//[questionsNo, diffLevelMax, diffLevelMin])

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

    // const operationChange = (valu) => {
    //     setOperation(valu)
    // useEffect( () => {
    //     switch (operation) {
    //         case 'multiplication':
    //             dispatch({ type: 'setDiffLevelMax', value: 10 })
    //             dispatch({ type: 'setDiffLevelMin', value: 2 })
    //             console.log('multiplication', state.diffLevelMax, state.diffLevelMin)
    //             break;
    //         case 'addition':
    //             dispatch({ type: 'setDiffLevelMax', value: 20 })
    //             dispatch({ type: 'setDiffLevelMin', value: 1 })
    //             console.log('addition', state.diffLevelMax, state.diffLevelMin)
    //             break;
    //         case 'subtraction':
    //             dispatch({ type: 'setDiffLevelMax', value: 30 })
    //             dispatch({ type: 'setDiffLevelMin', value: 4 })
    //             console.log('subtraction', state.diffLevelMax, state.diffLevelMin)
    //             break;
    //         case 'division':
    //             dispatch({ type: 'setDiffLevelMax', value: 50 })
    //             dispatch({ type: 'setDiffLevelMin', value: 4 })
    //             console.log('division', state.diffLevelMax, state.diffLevelMin)
    //             break;
    //         default:
    //             break;
    //     }
    // }, [operation])

    return (
        <div className='menu'>
            <h1 className='section-title'>Ustawienia</h1>
            <div className="inputs">
                <div className="input">
                    <label>Liczba pytań </label>
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
                    <label>Działanie</label>
                    <select name="operation" id="operation" defaultValue={operation} onChange={ e => setOperation( e.target.value )}>
                        <option value="multiplication">Mnożenie</option>
                        <option value="addition" >Dodawanie</option>
                        <option value="subtraction">Odejmowanie</option>
                        <option value="division">Dzielenie</option>
                    </select>
                </div>
                <label className="text-row">Zakres działania </label>
                <div className="input range-input">
                    od:
                    <input 
                        type="number" 
                        // min='1'
                        // max={state.diffLevelMax}
                        name="rangeMin" 
                        defaultValue={state.diffLevelMin}
                        onChange={handleChange}
                    />
                    do:
                    <input 
                        type="number" 
                        // min={state.diffLevelMin}
                        // max='20'
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