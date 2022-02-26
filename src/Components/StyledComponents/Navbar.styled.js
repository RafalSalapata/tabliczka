import styled from "styled-components";
import { styleConsts } from '../../Helpers/consts'

const midWidth = styleConsts.midWidth
const minWidth = styleConsts.minWidth
const navButtonsHeight = styleConsts.navButtonsHeight
const navButtonsWidth = styleConsts.navButtonsWidth
const navButtonsRadius = styleConsts.navButtonsRadius 

export const NavbarStyled = styled.header`
    width: 100%;
    max-width: 700px;
    border-bottom: 3px solid ${props => props.theme.headerColor};

    #navbar-container-checkbox, .hidden {
        display: none;
    }

    @media (max-width: ${midWidth}) {
        #navbar-container-checkbox:checked ~ div {
            padding-bottom: 50px;
            height: 107px;
            transition: all 0.5s ease-in-out;
        }
    }

    .navbar-container{
        height: 67px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        transition: all 0.5s ease-in-out 200ms;

        @media (max-width: ${midWidth}) {
            height: 57px;
        }

        .logo {
            font-size: 40px;
            text-shadow: 1px 1px 3px black;
            margin-left: 15px;
            color: ${props => props.theme.headerColor};

            @media (max-width: ${midWidth}) {
                font-size: 34px;
            }

            @media (max-width: ${minWidth}) {
                font-size: 30px;
                margin-left: 5px;
            }
        }

        /* hamburger switch */
        #hamburger-wrapper {
            display: none;

            @media (max-width: ${midWidth}) {
                margin-right: 15px;
                width: 50px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            @media (max-width: ${minWidth}) {
                margin-right: 5px;
            }
        }

        .hamburger,
        .hamburger::after,
        .hamburger::before {
            content: '';
            display: block;
            background-color: ${props => props.theme.headerColor};
            height: 3px;
            width: 35px;
            border-radius: 2px;
            transition: all ease-in-out 400ms;
        }

        .hamburger::before {
            transform: translateY(-9px);
        }

        .hamburger::after {
            transform: translateY(6px);
        }

        #hamburger-checkbox {
            display: none;
        }

        #hamburger-checkbox:checked ~ .hamburger {
            transform: rotate(45deg);
        }
        
        #hamburger-checkbox:checked ~ .hamburger::before {
            transform: rotate(-90deg);
        }
        
        #hamburger-checkbox:checked ~ .hamburger::after {
            opacity: 0;
        }

        /* navigation buttons styles */
        #nav-buttons-checkbox {
            display: none;
        }

        @media (max-width: ${midWidth}) {
            #nav-buttons-checkbox:checked ~ nav {
                transform: scale(1, 0);
                transform-origin: top;
                transition: transform 400ms ease-in-out;
            }
        }

        .nav-buttons {
            margin-right: 7px;
            display: flex;
            flex-direction: row;
            align-items: center;
            transform: scale(1, 1);
            transform-origin: top;
            transition: transform 400ms ease-in-out 200ms;

            @media (max-width: ${midWidth}) {
                position: absolute;
                top: 57px;
                right: 0px;
            }

            select, button, label {
                height: ${navButtonsHeight};
                width: ${navButtonsWidth};
                margin-right: 8px;
                background-color: white;
                font-weight: 700;
                font-family: Quicksand, Arial, Helvetica, sans-serif;
                border: 2px solid ${props => props.theme.headerColor};
                border-radius: ${navButtonsRadius};
                transition: 0.4s;
                cursor: pointer;

                :hover {
                    box-shadow: inset 0px 0 10px ${props => props.theme.headerColor};
                }
            }

            label:active, select:active, button:active {
                box-shadow: 0 0 15px 3px ${props => props.theme.headerColor};
                transition: 0.5s;
            }

            select {
                padding-left: 5px;
                font-size: 22px;
            }

            option {
                font-size: 20px;
            }

            button {
                font-size: 35px;
                position: relative;
                
                span {
                    position: absolute;
                    top: 1px;
                    left: 14px;
                }
            }

            /* theme toggle styled */
            #theme-toggle {
                display: none;
            }

            #theme-toggle-label {
                color: black;
                position: relative;

                span {
                    position: absolute;
                    top: 6px;
                    font-size: 24px;
                }

                .moon {
                    right: 4px;
                    font-weight: 800;
                }

                .sun {
                    left: 5px;
                }
                
                .ball {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: white;
                    border: 1px solid ${props => props.theme.headerColor};
                    position: absolute;
                    top: 5px;
                    left: 6px;
                    transition: transform 0.2s linear;
                }
            }

            #theme-toggle:checked + label .ball  {
                transform: translateX(24px);
            }
        }
    }
`