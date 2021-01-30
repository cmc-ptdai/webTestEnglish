import React, {useState} from 'react'

const Rewrite = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  console.log(listAnswerUser[question.id]);
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
          question &&
          question.question.map((item, index) => {})
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

export default Rewrite
