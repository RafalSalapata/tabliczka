import { useReducer } from 'react';
import { AppContext } from './Helpers/Context';
import { appReducer } from './Helpers/appReducer';
import { language } from './TextObjects/language';
import { lightTheme, darkTheme } from './Helpers/consts';

//components
import Menu from './Components/Menu';
import Test from './Components/Test';
import Summary from './Components/Summary';
import Navbar from './Components/Navbar';

//styles
import { ThemeProvider } from 'styled-components';
import { MainStyled } from './Components/StyledComponents/Main.styled';
import GlobalStyles from './Components/StyledComponents/GlobalStyles';

let initialState = {
  stage: 'menu',
  questionsNo: 10,
  diffLevelMax: 10,
  diffLevelMin: 2,
  correctCounter: 0,
  answersList: [],
  operation: 'multiplication',
  lang: 'pl',
  theme: 'light'
}

function App() {
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

  let localization = null
  if (state.lang === 'pl') localization = language.pl
  else localization = language.cz

  return (
    <ThemeProvider theme={ state.theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <div className="App">
        <AppContext.Provider value={{ state, dispatch, localization }}>
          <Navbar/>
          <MainStyled>
            {state.stage === 'menu' && <Menu/> }
            {state.stage === 'test' && <Test/> }
            {state.stage === 'summary' && <Summary/> }
          </MainStyled>
        </AppContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;