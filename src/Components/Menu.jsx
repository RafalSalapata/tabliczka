import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const Menu = () => {
    const { setStage, questionsNo, setQuestionsNo, diffLevel, setDiffLevel } = useContext(AppContext)

    const [ badInputs, setBadInputs ] = useState(false)

    const handleChange = (e) => {
        if (e.target.name === "questionsNo") setQuestionsNo(Number(e.target.value))
        else setDiffLevel(Number(e.target.value))
    }

    useEffect( () => {
        const inputsCheck = () => {
            if (questionsNo > 0 && diffLevel > 0) {
                setBadInputs(false)
            } else {
                setBadInputs(true)
            } 
        }
    
        inputsCheck()
    }, [questionsNo, diffLevel])

    const startTest = (e) => {
        if (!badInputs) setStage('test')
    }

    return (
        <div className='menu'>
            <h1 className='section-title'>Ustawienia</h1>
            <div className="input">
                <label>Liczba pytań: </label>
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
                <label>Zakres mnożenia: </label>
                <input 
                    type="number" 
                    min='1'
                    // max='20'
                    name="range" 
                    defaultValue={diffLevel}
                    onChange={handleChange}
                />
            </div>
            <button onClick={startTest} autoFocus>Start</button>
            {badInputs && <p>Parametry muszą być liczbami większymi od zera!</p>}
        </div>
    );
}

export default Menu;
