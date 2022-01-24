import './App.css';
import { useState } from 'react';
import Menu from './Components/Menu';
import Test from './Components/Test';
import Summary from './Components/Summary';
import { AppContext } from './Helpers/Context';

function App() {

  const [ stage, setStage ] = useState('menu')
  const [ questionsNo , setQuestionsNo ] = useState(10)
  const [ diffLevel , setDiffLevel ] = useState(8)
  const [ correctCounter , setCorrectCounter ] = useState(0)

  return (
    <div className="App">
      <h1 className='title'>Tabliczka mnożenia</h1>
      <div className='main-container'>
        <AppContext.Provider value={{ stage, setStage, questionsNo, setQuestionsNo, diffLevel, setDiffLevel, correctCounter, setCorrectCounter }}>
          {stage === 'menu' && <Menu/> }
          {stage === 'test' && <Test/> }
          {stage === 'summary' && <Summary/> }
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
