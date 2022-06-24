//libraries
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//internal
import { AppContext } from '../../Helpers/Context'

//style
import { MainPageStyled } from './ChoosePage.styled'

const ChoosePage = () => {
    const { dispatch, localization } = useContext(AppContext)
    const navigate = useNavigate()

    const goToCalcTest = () => {
        dispatch( {type: 'setTestType', value: 'calc'} )
        dispatch( {type: 'setStage', value: 'menu'} )
        navigate('/nauka-liczenia')
    }

    const goToEnglishTest = () => {
        dispatch( {type: 'setTestType', value: 'english'} )
        dispatch( {type: 'setStage', value: 'menu'} )
        navigate('/nauka-angielskiego')
    }

    return (
        <MainPageStyled>
            <h1 className='section-title'>{ localization.chooseLesson }</h1>
            <button className='' onClick={goToCalcTest}>
                { localization.chooseCalcLesson }
            </button>
            <button className='' onClick={goToEnglishTest}>
                { localization.chooseEnLesson }
            </button>
        </MainPageStyled>
    );
}
 
export default ChoosePage;