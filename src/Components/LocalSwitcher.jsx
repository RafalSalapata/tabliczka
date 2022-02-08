import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Helpers/Context";

const LocalSwitcher = () => {
    const { state, dispatch } = useContext(AppContext)
    const [ lang, setLang ] = useState(state.lang)
    
    useEffect( () => {
        document.documentElement.setAttribute("lang", lang)
        dispatch({ type: 'setLang', value: lang })
    },[lang, dispatch])

    let title = ''
    const changeLang = (ln) => {
        setLang(ln)

        if (ln === 'pl') title = 'Nauka liczenia'
        else title = 'Učit se počítat'

        document.title = title
        localStorage.setItem('lang', ln)
    }

    return (
        <div className="lang-buttons">
            <button className={"lang-button" + (lang === 'cz' ? ' active' : '')} onClick={() => changeLang('cz')}>CZ</button>
            <button className={"lang-button" + (lang === 'pl' ? ' active' : '')} onClick={() => changeLang('pl')}>PL</button>
        </div>
    );
}
 
export default LocalSwitcher;