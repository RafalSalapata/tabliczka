//libraries
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrSun } from 'react-icons/gr'
import { RiMoonFill, RiHome2Line } from 'react-icons/ri'
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'

//internal
import { AppContext } from "../../Helpers/Context";

//styles
import { NavbarStyled } from "./Navbar.styled";

const Navbar = () => {
    const { state, dispatch, localization } = useContext(AppContext)
    const [ lang, setLang ] = useState(state.lang)
    const [ navButtonsVisble, setNavButtonsVisble ] = useState(false)
    const navigate = useNavigate()

    useEffect( () => {
        document.documentElement.setAttribute("lang", lang)
        document.title = localization.appName
        localStorage.setItem('lang', lang)
        dispatch({ type: 'setLang', value: lang })
    },[lang, dispatch, localization])

    const newTest = () => {
        dispatch({ type: 'startNewTest'})
    }

    const changeTheme = (e) => {
        let theme = e.target.checked ? 'light' : 'dark'
        localStorage.setItem( 'theme', theme )
        dispatch({ type: 'changeTheme', value: theme })
    }

    const goHome = () => {
        dispatch({ type: 'goHome'})
        navigate('/')
    }

    return (
        <NavbarStyled>
            <input 
                type="checkbox"
                id="navbar-container-checkbox"
                checked={navButtonsVisble}
                onChange={()=>{}}
            />
            <div className="navbar-container">
                <h1 className="logo">{ localization.appName }</h1>
                <label htmlFor="hamburger-checkbox" id="hamburger-wrapper">
                    <input 
                        type="checkbox"
                        id="hamburger-checkbox" 
                        onChange={(e) => setNavButtonsVisble(e.target.checked)}
                    />
                    <div className="hamburger" title='hamburger'></div>
                </label>
                <input
                    type="checkbox" 
                    id="nav-buttons-checkbox"
                    checked={!navButtonsVisble}
                    onChange={()=>{}}
                />
                <nav className="nav-buttons">
                    <button className={ state.stage === 'home' ? 'hidden' : 'home-button' } onClick={goHome}>
                        <span> <RiHome2Line/> </span>
                    </button>
                    <button onClick={ newTest } className={ state.stage === 'menu' || state.stage === 'home' ? 'hidden' : '' }> 
                        <span> <MdOutlineSettingsBackupRestore/> </span>
                    </button>
                    <input 
                        type="checkbox" 
                        id="theme-toggle" 
                        onChange={ changeTheme }
                        checked={ state.theme === 'light' ? true : false }
                    />
                    <label htmlFor="theme-toggle" id="theme-toggle-label" data-testid="theme-toggle-label">
                        <span className="sun"> <GrSun/> </span> {/* &#9789; &#9728; &#9788; */}
                        <span className="moon"> <RiMoonFill/> </span>
                        <div className="ball"></div>
                    </label>
                    <select value={ lang } onChange={(e) => setLang( e.target.value )}> 
                        <option value="pl">PL</option>
                        <option value="cz">CZ</option>
                    </select>
                </nav>
            </div>
        </NavbarStyled>
    );
}
 
export default Navbar;