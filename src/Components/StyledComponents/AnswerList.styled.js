import styled from "styled-components";
import { styleConsts } from '../../Helpers/consts'

const minWidth = styleConsts.minWidth
const midWidth = styleConsts.midWidth

export const AnswerListStyled = styled.div`
    p {
        font-size: 22px;
        margin: 20px 0 5px 0;
        text-align: left;
    }

    .answers-list {
        list-style-type: none;
        counter-reset: answers;
    }

    .answers-list li::before {
        display: inline-block;
        width: 30px;
        content: counter(answers) ". ";
        counter-increment: answers;
        margin-right: 12px;
        text-align: right;
        
        @media (max-width: ${minWidth}) {
            width: 25px;
            margin-right: 7px;
        }
    }

    .answers-list li {
        display: inline-block;
        width: 100%;
        padding: 4px 5px;
        margin: 3px 0px;
        font-size: 20px;
        text-align: left;

        @media (max-width: ${midWidth}) {
            font-size: 18px;
        }

        @media (max-width: ${minWidth}) {
            font-size: 17px;
        }
    }

    .incorrect {
        background-color: lightpink;
        color: black;
    }
`