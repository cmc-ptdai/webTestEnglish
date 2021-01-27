import React from 'react'

const Question = ({question,index}) => {
  return (
    <>
      <p className="takeTest__right__question--numberQuestion">Câu hỏi: {index + 1} </p>
      <p className="takeTest__right__question--question">{question.question}</p>

      <div className="takeTest__right__question--answer">
        {
          question &&
          (
            <div className="row">
              <div className="col-6 item">A, {question.answer.a}</div>
              <div className="col-6 item">B, {question.answer.b}</div>
              <div className="col-6 item">C, {question.answer.c}</div>
              <div className="col-6 item">D, {question.answer.d}</div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Question
