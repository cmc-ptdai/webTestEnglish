import React, {useState, useEffect} from 'react'

const ChangeSentence = ({arrQuestion,answerUser,listAnswerUser}) => {
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
        <p className="takeTest__right__question--numberQuestion">Câu hỏi {index + 1}: điền vào chỗ trống</p>
      }
      <p className="takeTest__right__question--question">
        {
          question && (
            <>
              <span>{question.question}</span>
              <input
                type="text"
                value={listAnswerUser[question.id] ? listAnswerUser[question.id] : ''}
                onChange={onHandleInput}
                className="questionChangeSentence"
              />
            </>
          )
        }
      </p>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if(item.typeID === 4  ) {
              return (
                <button key={index} onClick={() => clickQuestion(item,index)}>Câu: {index + 1}</button>
              )
            } else {
              return null
            }
          })
        }
      </div>
    </>
  )
}

export default ChangeSentence
