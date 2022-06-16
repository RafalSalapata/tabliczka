import { useContext } from "react";
import { AppContext } from "../../Helpers/Context";
import { MainStyled } from "../../StyledComponents/Main.styled";

import Settings from "../Settings";
import Summary from "../Summary";
import Test from "../Test";
import EnTest from "../EnTest";

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