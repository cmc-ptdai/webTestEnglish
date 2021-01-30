import {GET_QUESTION, GET_QUESTION_FILL_OUT} from '../actionType'

const initialState = {
  listQuestionsTrueFalse: [],
  listQuestionsFillOut: []
}

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION: {
      return {
        ...state,
        listQuestionsTrueFalse: action.payload
      }
    }
    case GET_QUESTION_FILL_OUT: {
      return {
        ...state,
        listQuestionsFillOut: action.payload
      }
    }
    default:
      return state
  }
}

export default questionReducer
