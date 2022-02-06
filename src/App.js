import './App.css';
import { useReducer } from 'react';
import Menu from './Components/Menu';
import Test from './Components/Test';
import Summary from './Components/Summary';
import { AppContext } from './Helpers/Context';
import { appReducer } from './Helpers/appReducer';

const initialState = {
  stage: 'menu',
  questionsNo: 10,
  diffLevelMax: 10,
  diffLevelMin: 2,
  correctCounter: 0,
  answersList: [],
  operation: 'multiplication'
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState )

  return (
    <div className="App">
      <h1 className='title'>Nauka liczenia</h1>
      <div className='main-container'>
        <AppContext.Provider value={{ state, dispatch }}>
          {state.stage === 'menu' && <Menu/> }
          {state.stage === 'test' && <Test/> }
          {state.stage === 'summary' && <Summary/> }
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;