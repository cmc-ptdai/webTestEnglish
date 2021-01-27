import React, { useEffect, useState } from 'react'
import './style.scss'
import questionsApi from '../../../api/questionApi'
import Question from './question'

const TakeTest = () => {
  const [listQuestions, setListQuestions] = useState([])
  const [arrQuestion, setArrQuestion] = useState([])
  const [start, setStart] = useState(false)
  const [question, setQuestion] = useState('')
  const [index, setIndex] = useState('')

  const randomQuestion = () => {
    let listQuestion = []
    while(listQuestion.length < 10) {
      const question = Math.floor(Math.random() * listQuestions.length )
      listQuestion.push(listQuestions[question])
      const arrFilter = listQuestion.filter((item, index) => listQuestion.indexOf(item) === index);
      listQuestion = arrFilter
    }
    setArrQuestion(listQuestion)
    setStart(true)
  }

  const fetchQuestionApi = async () => {
    const response = await questionsApi.fetchQuestionApi()
    setListQuestions(response)
    console.log(response);
  }

  useEffect(() => {
    fetchQuestionApi()
  }, [])

  const clickQuestion = (item,index) => {
    setQuestion(item)
    setIndex(index)
  }
  return (
    <div className="takeTest">
      <div className="row">
        <div className="col-4 takeTest__left">
          <div className="takeTest__left__start" style={{display: start ? 'block' : 'none'}}>
            <p className="takeTest__left__start--title">thời gian làm bài còn lại</p>
            <div className="takeTest__left__start--time"><label>Thời gian: </label> <span>15</span> phút</div>
          </div>

          <div className="takeTest__left__information">
            <p className="takeTest__left__information--title">tên đề thi</p>
            <div ><label>Số câu: </label> <span>{arrQuestion.length}</span></div>
            <div ><label>Thời gian: </label> <span>15</span> phút</div>
          </div>

          <div className="takeTest__left__action">
            <button className="takeTest__left__action--save">Lưu đề thi</button>
            <button className="takeTest__left__action--start" onClick={randomQuestion}>Bắt đầu làm</button>
          </div>

          <div className="takeTest__left__shear">
            <p>Chia sẻ lên</p>
            <div>
              <span className="takeTest__left__shear--facebook"><i className="fab fa-facebook-f"></i></span>
              <span className="takeTest__left__shear--twitter"><i className="fab fa-twitter"></i></span>
            </div>
          </div>
        </div>

        <div className="col-8 takeTest__right">
          <div className="takeTest__right__tutorial" style={{display: start ? 'none' : 'block'}}>
          <div className="takeTest__right__tutorial--title">Hướng dẫn làm bài</div>
          <div className="takeTest__right__tutorial--content">
            <p>Hướng dẫn làm bài thi trắc nghiệm</p>
            <p>1. Đợi đến khi đến thời gian làm bài</p>
            <p>2. CLick vào nút "bắt đầu làm bài" để tiến hành làm bài thi</p>
            <p>3. Ở mỗi câu hỏi , chọn đáp án đúng</p>
            <p>4. Hết thời gian làm bài, hệ thống sẽ tự thu bài. Bạn có thể nộp bài trước khi thời gian kết thúc bằng cách nhấn nút<span className="takeTest__right__tutorial--span">Nộp bài</span></p>
          </div>
          </div>

          <div className="takeTest__right__question" style={{display: start ? 'block' : 'none'}}>
            <Question
              question={question}
              index={index}
            />
          </div>

          <div className="takeTest__right__listQuestion">
            {
              arrQuestion &&
              arrQuestion.map((item, index) => {
                return (
                  <button key={index} onClick={() => clickQuestion(item,index)}>Câu: {index + 1}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeTest
