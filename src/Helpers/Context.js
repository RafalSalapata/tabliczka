import {createContext, useReducer} from 'react'
import { language } from '../TextObjects/language'
import { appReducer } from './appReducer'

export const AppContext = createContext()

export const AppContextProvider = props => {
    let initialState = {
        stage: 'home',
        testType: '',
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