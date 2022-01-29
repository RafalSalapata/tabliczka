import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Menu = () => {
    const { setStage, questionsNo, setQuestionsNo, diffLevelMax, setDiffLevelMax, diffLevelMin, setDiffLevelMin } = useContext(AppContext)
    const [ badInputs, setBadInputs ] = useState(false)

    useEffect( () => {
        const inputsCheck = () => {
            if (questionsNo > 0 && diffLevelMax > 0 && diffLevelMin > 0) {
                setBadInputs(false)
            } else {
                setBadInputs(true)
            } 
        }
    
        inputsCheck()
    }, [questionsNo, diffLevelMax, diffLevelMin])

    const handleChange = (e) => {
        let value = Number(e.target.value)
        let name = e.target.name

        if (name === "questionsNo") setQuestionsNo(value)
        else if (name === "rangeMax") setDiffLevelMax(value)
        else setDiffLevelMin(value)
    }

    const startTest = (e) => {
        if (!badInputs) setStage('test')
    }

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
                        defaultValue={questionsNo}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <label>Działanie</label>
                    <select name="operation" id="operation">
                        <option value="multiplication">Mnożenie</option>
                        <option value="addition">Dodawanie</option>
                        <option value="subtraction">Odejmowanie</option>
                        <option value="division">Dzielenie</option>
                    </select>
                </div>
                <label className="text-row">Zakres działania </label>
                <div className="input range-input">
                    od:
                    <input 
                        type="number" 
                        min='1'
                        max='20'
                        name="rangeMin" 
                        defaultValue={diffLevelMin}
                        onChange={handleChange}
                    />
                    do:
                    <input 
                        type="number" 
                        min='1'
                        max='20'
                        name="rangeMax" 
                        defaultValue={diffLevelMax}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={startTest} autoFocus>Start</button>
            {badInputs && <p>Parametry muszą być liczbami większymi od zera!</p>}
        </div>
    );
}

export default Menu;
