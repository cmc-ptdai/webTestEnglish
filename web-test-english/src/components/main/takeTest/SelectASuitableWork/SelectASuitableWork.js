import React, {useState, useEffect} from 'react'
import { Select } from 'antd';

const { Option } = Select;

const SelectASuitableWork = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
  }

  function onChange(value) {
    answerUser(value,question.id);
  }


  useEffect(() => {
    setIndex('')
    setQuestion('')
  },[arrQuestion])

  return (
    <>
      {
        question &&
        <p className="takeTest__right__question--numberQuestion">Câu hỏi {index + 1}:<span>điền vào chỗ trống</span></p>
      }
      <div className="takeTest__right__question--question">
        {
          question &&
          question.question.map((item, index) => {
            if (item === "__" ||
            item === "___" || item === "____" || item === "____"||
            item === "____" || item === "____" || item === "_____"
            || item === "______" || item === "_______" || item === "________"
            ) {
              return (
                <span key={index}>
                  <Select
                    style={{ width: 150, margin: 5} }
                    placeholder="Select a answer"
                    onChange={onChange}
                    value={listAnswerUser[question.id] ? listAnswerUser[question.id] : null}
                  >
                    {
                      question.answer.map((item,index) => {
                        return (
                          <Option value={item} key={index}>{item}</Option>
                        )
                      })
                    }
                  </Select>
                </span>
              )
            }
            return (
              <span key={index} >{item}</span>
            )
          })
        }
      </div>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if(item.typeID === 7) {
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

export default SelectASuitableWork
