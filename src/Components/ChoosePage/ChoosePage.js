import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Helpers/Context'
import { MainPageStyled } from './ChoosePage.styled'

const ChoosePage = () => {
    const { dispatch, localization } = useContext(AppContext)
    const navigate = useNavigate()

    const goToCalcTest = () => {
        dispatch( {type: 'setTestType', value: 'calc'} )
        navigate('/nauka-liczenia')
    }

    const goToEnglishTest = () => {
        dispatch( {type: 'setTestType', value: 'english'} )
        navigate('/nauka-angielskiego')
    }

    return (
        <MainPageStyled>
            <h1 className='section-title'>Wybierz lekcję</h1>
            <button className='' onClick={goToCalcTest}>
                Nauka liczenia
            </button>
            <button className='' onClick={goToEnglishTest}>
                Nauka angielskiego
            </button>
        </MainPageStyled>
    );
}
 
export default ChoosePage;