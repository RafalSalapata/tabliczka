import { useReducer } from 'react';
import { AppContext } from './Helpers/Context';
import { appReducer } from './Helpers/appReducer';
import { language } from './TextObjects/language';

//components
import Menu from './Components/Menu';
import Test from './Components/Test';
import Summary from './Components/Summary';
import LocalSwitcher from './Components/LocalSwitcher';

//styles
import './App.css';

const initialState = {
  stage: 'menu',
  questionsNo: 10,
  diffLevelMax: 10,
  diffLevelMin: 2,
  correctCounter: 0,
  answersList: [],
  operation: 'multiplication',
  lang: 'pl'
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    let localLang = localStorage.getItem('lang')
    return localLang === null ? initialState : {...initialState,
      lang: localLang
    }
  })

  let localization = null
  if (state.lang === 'pl') localization = language.pl
  else localization = language.cz

  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch, localization }}>
        <div className="topbar">
          <h1 className='title'>{localization.appName}</h1>
          <LocalSwitcher />
        </div>
        <div className='main-container'>
          {state.stage === 'menu' && <Menu/> }
          {state.stage === 'test' && <Test/> }
          {state.stage === 'summary' && <Summary/> }
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;