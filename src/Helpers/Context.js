import {createContext, useReducer} from 'react'
import { useLocation } from 'react-router-dom'
import { language } from '../TextObjects/language'
import { appReducer } from './appReducer'

export const AppContext = createContext()

export const AppContextProvider = props => {
    const location = useLocation();
    const initStage = location.pathname === '/tabliczka' ? 'home' : 'menu'
    const initTestType = location.pathname === '/tabliczka/nauka-liczenia' ? 'calc' : 'english'

    let initialState = {
        stage: initStage,
        testType: initTestType,
        questionsNo: 10,
        diffLevelMax: 10,
        diffLevelMin: 2,
        correctCounter: 0,
        answersList: [],
        operation: 'multiplication',
        lang: 'pl',
        theme: 'light',
        enTestSubject: 'colors',
    }

    const [state, dispatch] = useReducer(appReducer, initialState, () => {
        let localStorageLang = localStorage.getItem('lang')
        let localStorageTheme = localStorage.getItem('theme')
      
        if (localStorageLang) initialState = { ...initialState,
          lang: localStorageLang
        }
      
        if (localStorageTheme) initialState = { ...initialState,
          theme: localStorageTheme
        }
      
        return initialState
    })

    let localization = state.lang === 'pl' ? language.pl : language.cz

    return (
        <AppContext.Provider value={{ state, dispatch, localization }}>
            {props.children}
        </AppContext.Provider>
    )
}