import React, {useState, useEffect} from 'react'

const FormFillOut = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const onHandleInput = e => {
    answerUser(e.target.value, question.id)
  }

  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
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
      <p className="takeTest__right__question--question">
        {
          question &&
          question.question.map((item, index) => {
            if (item === "__" ||
            item === "___" || item === "____" || item === "____"||
            item === "____" || item === "____" || item === "_____"
            || item === "______" || item === "_______" || item === "________"
            ) {
              return (
                <span key={index}><input
                  type="text"
                  name={'value'+ index}
                  value={listAnswerUser[question.id] ? listAnswerUser[question.id] : ''}
                  onChange={onHandleInput}
                /></span>
              )
            }
            return (
              <span key={index} >{item}</span>
            )
          })
        }
      </p>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if(item.typeID === 2) {
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

export default FormFillOut
