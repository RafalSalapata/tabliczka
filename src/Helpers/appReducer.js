export const appReducer = (state, action) => {
    switch (action.type) {
      case 'setQuestionsNo': return { ...state, 
          questionsNo: action.value
      }
      case 'setDiffLevelMax': return { ...state, 
          diffLevelMax: action.value
      }
      case 'setDiffLevelMin': return { ...state, 
          diffLevelMin: action.value
      }
      case 'setStage': return { ...state, 
        stage: action.value
      } 
      case 'addAnswer': return { ...state,
        answersList: [...state.answersList,
          action.value
        ]
      }
      case 'resetAnswerList': return { ...state,
        answersList: []
      }    
      case 'increaseCorrectCounter': return { ...state, 
        correctCounter: state.correctCounter + 1
      } 
      case 'resetCorrectCounter': return { ...state, 
        correctCounter: 0
      } 
      case 'setOperation': return { ...state, 
        operation: action.value
      } 
      case 'setLang': return { ...state, 
        lang: action.value
      } 
      case 'changeTheme': return { ...state, 
        theme: action.value
      }
      case 'startNewTest': return { ...state,
        answersList: [],
        stage: 'menu',
        correctCounter: 0
      }   
      default:
        break
    }
    return state
  }