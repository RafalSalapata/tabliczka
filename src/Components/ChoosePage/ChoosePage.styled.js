import styled from "styled-components";

export const MainPageStyled = styled.header`
    max-width: 400px;
    width: 95%;
    text-align: center;
    font-weight: 500;

    .section-title {
        margin: 20px 0;
        color: ${props => props.theme.headerColor};
    }

    button {
        font-size: 26px;
        width: 100%;
        margin-top: 25px;
        padding: 10px 15px;
        cursor: pointer;
        font-weight: 700;
        font-family: Quicksand;
        background-color: white;
        border: 2px solid ${props => props.theme.headerColor};
        border-radius: 5px;
        transition: 0.4s;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        :hover, :active {
            box-shadow: inset 0px 0 10px ${props => props.theme.headerColor};
            cursor: pointer;
        }
    }
`