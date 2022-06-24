import { createGlobalStyle } from "styled-components";

//createGlobalStyle doesn't work properly with @import, 
//hence below fonts are imported in index.html file accordingly to styled-components team recommendation
//@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Quicksand:wght@300;400;500;600;700&display=swap');

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.fontColor};
        transition: background 0.2s linear;
    }

    .App {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }
`

export default GlobalStyles