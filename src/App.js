import { useContext } from 'react';
import { AppContext } from './Helpers/Context';
import { lightTheme, darkTheme } from './Helpers/consts';

//components
import MainApp from './Components/MainApp/MainApp';

//styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './StyledComponents/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ChoosePage from './Components/ChoosePage/ChoosePage';

function App() {
  const { state } = useContext(AppContext)

  return (
    <ThemeProvider theme={ state.theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes >
            <Route path='/' element={<ChoosePage />} />
            <Route path='/nauka-liczenia' element={<MainApp />} />
            <Route path='/nauka-angielskiego' element={<MainApp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;