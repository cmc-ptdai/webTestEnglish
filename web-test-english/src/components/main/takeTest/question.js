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
            <div className="row">
              <Radio.Group onChange={onChange} value={value}>
                <div className="col-6 item"><Radio value={question.answer.b}>{question.answer.b}</Radio></div>
              </Radio.Group>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Question
