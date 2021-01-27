import React from 'react'
import { Radio } from 'antd';

const Question = ({question,index}) => {
  const onChange = e => {
    console.log('radio checked', e.target.value);
  };
  return (
    <>
      {
        question &&
        <p className="takeTest__right__question--numberQuestion">Câu hỏi: {index + 1} </p>
      }
      <p className="takeTest__right__question--question">{question.question}</p>

      <div className="takeTest__right__question--answer">
        {
          question &&
          (
            <Radio.Group onChange={onChange} >
              <div className="row">
                <div className="col-6 item"><Radio value={question.answer.a}>{question.answer.a}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.b}>{question.answer.b}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.c}>{question.answer.c}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.d}>{question.answer.d}</Radio></div>
              </div>
            </Radio.Group>
          )
        }
      </div>
    </>
  )
}

export default Question
