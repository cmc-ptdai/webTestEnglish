import {
  GET_QUESTION,
  GET_QUESTION_FILL_OUT,
  SET_QUESTION_EXAM_TEST
} from '../actionType'

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

export const setQuestionExamTest = (payload) => {
  return {
    type: SET_QUESTION_EXAM_TEST ,
    payload
  }
}

