import React, {useState} from 'react'

const ChangeSentence = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const onHandleInput = e => {
    answerUser(e.target.value, question.id)
    console.log(e.target.value);
  }
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
            <>
              <p>{question.question}</p>
              <span key={index}><input
                type="text"
                value={listAnswerUser[question.id] ? listAnswerUser[question.id] : ''}
                onChange={onHandleInput}
                className="questionChangeSentence"
              /></span>
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
            }
          })
        }
      </div>
    </>
  )
}

export default ChangeSentence
