import { useContext } from "react";
import { AppContext } from "../../Helpers/Context";
import { MainStyled } from "../../StyledComponents/Main.styled";

import Settings from "./Components/Settings";
import Summary from "./Components/Summary";
import Test from "./Components/Test";
import EnTest from "./Components/EnTest";

const MainApp = () => {
    const { state } = useContext(AppContext)

    return (
        <MainStyled>
            {state.stage === 'menu' && <Settings/> }
            {state.stage === 'test' && <Test/> }
            {state.stage === 'en-test' && <EnTest/> }
            {state.stage === 'summary' && <Summary/> }
        </MainStyled>
    );
}

export default MainApp;