import {
  GET_QUESTION,
  GET_QUESTION_FILL_OUT,
  SET_QUESTION_EXAM_TEST
} from '../actionType'

const initialState = {
  listQuestionsTrueFalse: [],
  listQuestionsFillOut: [],
  listQuestionExamTest: []
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
    case SET_QUESTION_EXAM_TEST : {
      return {
        ...state,
        listQuestionExamTest: action.payload
      }
    }
    default:
      return state
  }
}

export default questionReducer
