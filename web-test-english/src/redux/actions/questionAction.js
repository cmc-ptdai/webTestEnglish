import {GET_QUESTION, GET_QUESTION_FILL_OUT} from '../actionType'

export const getQuestion = (payload) => {
  return {
    type: GET_QUESTION,
    payload
  }
}

export const getQuestionFillOut = (payload) => {
  return {
    type: GET_QUESTION_FILL_OUT,
    payload
  }
}
