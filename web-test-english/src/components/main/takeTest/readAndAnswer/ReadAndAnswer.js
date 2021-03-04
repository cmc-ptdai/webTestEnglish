import React, {useState, useEffect} from 'react'

const QuestionListen = ({arrQuestion,answerUser,listAnswerUser}) => {
  const [index, setIndex] = useState('')
  const [question, setQuestion] = useState('')
  const [listAnswer, setListAnswer] = useState({a:'', b:'', c:'', d:'', e:'', f:'', g:'' ,h:'' })
  const onHandleInputA = event => {
    const value = {
      ...listAnswer,
      a: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }

  const onHandleInputB = event => {
    const value = {
      ...listAnswer,
      b: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputC = event => {
    const value = {
      ...listAnswer,
      c: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputD = event => {
    const value = {
      ...listAnswer,
      d: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputE = event => {
    const value = {
      ...listAnswer,
      e: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputF = event => {
    const value = {
      ...listAnswer,
      f: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputG = event => {
    const value = {
      ...listAnswer,
      g: event.target.value
    }
    setListAnswer(value)
    answerUser(value, question.id)
  }
  const onHandleInputH = event => {
    const value = {
      ...listAnswer,
      h: event.target.value
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
        <p className="takeTest__right__question--numberQuestion">Câu hỏi {index + 1}: trả lời câu hỏi</p>
      }
      <p className="takeTest__right__question--question">
        {
          question && (
            <span>
              {question.question}
            </span>
          )
        }
      </p>
      <div className="takeTest__right__question--answer">
        <div className="row">
          {
            question && (

              <div>
                <div className="col-12 read">
                  <p>1. {question.answer.a}</p>
                  <input
                    type="text"
                    onChange={onHandleInputA}
                  />
                </div>

                <div className="col-12 read">
                  <p>2. {question.answer.b}</p>
                  <input
                    type="text"
                    onChange={onHandleInputB}
                  />
                </div>

                <div className="col-12 read">
                  <p>3. {question.answer.c}</p>
                  <input
                    type="text"
                    onChange={onHandleInputC}
                  />
                </div>

                <div className="col-12 read">
                  <p>4. {question.answer.d}</p>
                  <input
                    type="text"
                    onChange={onHandleInputD}
                  />
                </div>

                <div className="col-12 read">
                  <p>5. {question.answer.e}</p>
                  <input
                    type="text"
                    onChange={onHandleInputE}
                  />
                </div>

                <div className="col-12 read">
                  <p>6. {question.answer.f}</p>
                  <input
                    type="text"
                    onChange={onHandleInputF}
                  />
                </div>

                <div className="col-12 read">
                  <p>7. {question.answer.g}</p>
                  <input
                    type="text"
                    onChange={onHandleInputG}
                  />
                </div>

                <div className="col-12 read">
                  <p>8. {question.answer.h}</p>
                  <input
                    type="text"
                    onChange={onHandleInputH}
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="takeTest__right__listQuestion">
        {
          arrQuestion &&
          arrQuestion.map((item, index) => {
            if (item.typeID === 6) {
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

export default QuestionListen
