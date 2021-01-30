import React, {useState} from 'react'
import { Radio } from 'antd';

const Question = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [value, setValue] = useState(null);
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const onChange = e => {
    answerUser(e.target.value, question.id)
    setValue(e.target.value);
  }
  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
  }

  return (
    <>
      {
        arrQuestion &&
        <p className="takeTest__right__question--numberQuestion">Câu hỏi: {index + 1} </p>
      }
      <p className="takeTest__right__question--question">{question.question}</p>

      <div className="takeTest__right__question--answer">
        {
          question && question.typeID === 1 &&
          (
            <Radio.Group onChange={onChange} value={listAnswerUser[question.id] ? listAnswerUser[question.id] : value} >
              <div className="row">
                <div className="col-6 item"><Radio value={question.answer.a}> {question.answer.a}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.b}> {question.answer.b}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.c}> {question.answer.c}</Radio></div>
                <div className="col-6 item"><Radio value={question.answer.d}> {question.answer.d}</Radio></div>
              </div>
            </Radio.Group>
          )
        }
      </div>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if(item.typeID === 1) {
              return (
                <button key={index} onClick={() => clickQuestion(item,index)}>Câu: {index + 1}</button>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Question
