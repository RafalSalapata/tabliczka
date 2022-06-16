import styled from "styled-components";
import { styleConsts } from '../Helpers/consts'

const midWidth = styleConsts.midWidth
const minWidth = styleConsts.minWidth

export const MainStyled = styled.div`
    max-width: 400px;
    width: 95%;
    text-align: center;
    font-weight: 500;

    .section-title {
        margin: 20px;
        color: ${props => props.theme.headerColor};
    }

    .inputs {
        margin-bottom: 25px;
    }

    label {
        margin-top: 20px;
        font-size: 22px;
        text-align: left;
        display: block;
    }

    select, input {
        font-family: Quicksand, Arial, Helvetica, sans-serif;
        width: 100%;
        padding: 6px 10px;
        margin: 5px 0 10px 0;
        font-size: 28px;
        font-weight: 500;
        border: 1px solid ${props => props.theme.headerColor};
        background-color: rgb(245, 245, 245);
        border-radius: 3px;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .range {
        font-size: 22px;
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
    }

    .range input {
        width: 40%;
        margin-left: 10px;
        margin-right: 0px;
    }

    .range span {
        margin-left: 15px;
    }

    button {
        font-size: 26px;
        width: 100%;
        margin-top: 15px;
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

    .error-msg {
        padding: 8px;
        margin-top: 10px;
        font-size: 19px;
        color: white;
        background-color: ${props => props.theme.headerColor};
        
        @media (max-width: ${midWidth}) {
            font-size: 17px;
        }

        @media (max-width: ${minWidth}) {
            font-size: 15px;
        }
    }

    .test .input {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .test input {
        width: 30%;
        height: 50px;
        margin: 0 50px 0 12px;
    }

    .test label {
        width: 50%;
        text-align: right;
        margin: 0;
        font-size: 26px;
    }

    .resultMsg {
        height: 50px;
        margin: 10px 0;
                
        @media (max-width: ${midWidth}) {
            font-size: 30px;
        }

        @media (max-width: ${minWidth}) {
            font-size: 26px;
        }
    }
`