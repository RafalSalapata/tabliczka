//libraries
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';

//internal
import { AppContext } from './Helpers/Context';
import { lightTheme, darkTheme } from './Helpers/consts';

//components
import MainApp from './Components/MainApp/MainApp';
import Navbar from './Components/Navbar';
import ChoosePage from './Components/ChoosePage/ChoosePage';

//styles
import GlobalStyles from './StyledComponents/GlobalStyles';

function App() {
  const { state } = useContext(AppContext)

  return (
    <ThemeProvider theme={ state.theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Routes >
          <Route path='/tabliczka/' element={<ChoosePage />} />
          <Route path='/tabliczka/nauka-liczenia' element={<MainApp />} />
          <Route path='/tabliczka/nauka-angielskiego' element={<MainApp />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;