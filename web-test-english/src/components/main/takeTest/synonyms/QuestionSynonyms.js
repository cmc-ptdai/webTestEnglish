import React, {useState, useEffect} from 'react'
import { Radio } from 'antd';

const QuestionSynonyms = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [value, setValue] = useState(null);
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const onChange = e => {
    answerUser(e.target.value, question.id)
    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(null)
    setIndex('')
    setQuestion('')
  },[arrQuestion])

  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
  }
  return (
    <>
      {
        question &&
        <p className="takeTest__right__question--numberQuestion">Câu hỏi {index + 1}: điền vào chỗ trống</p>
      }
      <p className="takeTest__right__question--question">
        {
          question && (
            <span>{
              question.question.map((item, index) => {
                if (index === 1) {
                  return (
                    <b key={index} className="takeTest__right__question--bold"> {item} </b>
                  )
                }
                return (
                  <span key={index}>{item}</span>
                )
              })
            }</span>
          )
        }
      </p>
      <div className="takeTest__right__question--answer">
        {
          question && question.typeID === 3 &&
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
            if(item.typeID === 3) {
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

export default QuestionSynonyms
