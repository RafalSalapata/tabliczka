import './App.css';
import { useState } from 'react';
import Menu from './Components/Menu';
import Test from './Components/Test';
import Summary from './Components/Summary';
import { AppContext } from './Helpers/Context';

function App() {

  const [ stage, setStage ] = useState('menu')
  const [ questionsNo, setQuestionsNo ] = useState(11)
  const [ diffLevelMax, setDiffLevelMax ] = useState(8)
  const [ diffLevelMin, setDiffLevelMin ] = useState(2)
  const [ correctCounter, setCorrectCounter ] = useState(0)
  const [ answersList, setAnswersList ] = useState([])

  return (
    <div className="App">
      <h1 className='title'>Nauka liczenia</h1>
      <div className='main-container'>
        <AppContext.Provider value={{ 
          stage, 
          setStage, 
          questionsNo, 
          setQuestionsNo, 
          diffLevelMax, 
          setDiffLevelMax, 
          diffLevelMin, 
          setDiffLevelMin, 
          correctCounter, 
          setCorrectCounter,
          answersList, 
          setAnswersList
        }}>
          {stage === 'menu' && <Menu/> }
          {stage === 'test' && <Test/> }
          {stage === 'summary' && <Summary/> }
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;