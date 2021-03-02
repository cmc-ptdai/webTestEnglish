import React, {useState, useEffect} from 'react'

const QuestionListen = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const [listAnswer, setListAnswer] = useState({a: '', b: '', c: '', d: ''})

  const onHandleInputA = event => {
    const value = {
      ...listAnswer,
      a: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputB = e => {
    const value = {
      ...listAnswer,
      b: e.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputC = e => {
    const value = {
      ...listAnswer,
      c: e.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputD = e => {
    const value = {
      ...listAnswer,
      d: e.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }



  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
    setListAnswer({})
  }

  useEffect(() => {
    setIndex('')
    setQuestion('')
    setListAnswer({})
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
              <audio
                className="audio"
                controls
                src={question.question}>
              </audio>
            </>
          )
        }
      </p>
      <div className="takeTest__right__question--answer">
        {
          question && (
            <div className="row">
              <div className="col-3 img">
                <img src={question.answer.a} alt='imgA'/>
                <input
                  type="text"

                  onChange={onHandleInputA}
                />
              </div>
              <div className="col-3 img">
                <img src={question.answer.b} alt='imgB'/>
                <input
                  type="text"

                  onChange={onHandleInputB}
                />
              </div>
              <div className="col-3 img">
                <img src={question.answer.c} alt='imgC'/>
                <input
                  type="text"

                  onChange={onHandleInputC}
                />
              </div>
              <div className="col-3 img">
                <img src={question.answer.d} alt='imgD'/>
                <input
                  type="text"

                  onChange={onHandleInputD}
                />
              </div>
            </div>
          )
        }
      </div>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if (item.typeID === 5) {
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

export default QuestionListen
