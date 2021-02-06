import React, { useEffect, useState } from 'react'
import './style.scss'
import questionsApi from '../../../api/questionApi'
import Question from './question'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getQuestion as getQuestionAction,
  getQuestionFillOut as getQuestionFillOutAction
} from '../../../redux/actions/questionAction'
import FormFillOut from './formTestFillOut/FormFillOut'
import ChangeSentence from './changesentence/ChangeSentence'


const { TabPane } = Tabs;

const TakeTest = () => {
  const dispatch = useDispatch()
  const listQuestions = useSelector(store => store.questionReducer.listQuestionsTrueFalse)
  const arrQuestionFillOut = useSelector(store => store.questionReducer.listQuestionsFillOut)
  const [listChangeSentence, setListChangeSentence] = useState([])

  const [arrQuestion, setArrQuestion] = useState([])
  const [listAnswerUser, setListAnswerUser] = useState({})

  const [start, setStart] = useState(false)
  const [answerTrue, setAnswerTrue] = useState(0)
  const [count, setCount] = useState(0)

  const randomQuestion = (arr = []) => {
    let newArr = []
    while(newArr.length < 10) {
      const question = Math.floor(Math.random() * arr.length )
      newArr.push(arr[question])
      const arrFilter = newArr.filter((item, index) => (newArr.indexOf(item) === index))
      newArr = arrFilter
    }
    return newArr
  }

  const onStart = () => {
    const listQuestion = randomQuestion(listQuestions)
    const listQuestionFillOut = randomQuestion(arrQuestionFillOut)
    const listQuestionChangeSentence = randomQuestion(listChangeSentence)
    const arr = listQuestion.concat(listQuestionFillOut, listQuestionChangeSentence)
    setArrQuestion(arr)
    setStart(true)
  }

  const fetchQuestionApi = async () => {
    const response = await questionsApi.fetchQuestionApi('questions')
    dispatch(getQuestionAction(response))
    const questionFillOut = await questionsApi.fetchQuestionApi('formFillOut')
    dispatch(getQuestionFillOutAction(questionFillOut))
    const questionChangeSentence = await questionsApi.fetchQuestionApi('changesentence')
    setListChangeSentence(questionChangeSentence)
  }

  useEffect(() => {
    fetchQuestionApi()
  }, [])


  const answerUser = (answer, id) => {
    setListAnswerUser({
      ...listAnswerUser,
      [id]: answer
    })
  }
  const clickCancel = () => {
    setStart(false)
    setListAnswerUser({})
    setArrQuestion([])
    setAnswerTrue(0)
    setListChangeSentence([])
  }

  const onsubmitTest = () => {
    let a = 0
    arrQuestion.forEach(elem => {
      console.log(elem);
      if (elem.typeID === 1) {
        if(elem.correctAnswer === listAnswerUser[elem.id] ) {
          console.log('1');
          a ++
        }
      }
      if (elem.typeID === 2 && listAnswerUser[elem.id] ) {
        const trimCorrectAnswer = elem.correctAnswer.replace(/\s+/g, "")
        const trimAnswer = listAnswerUser[elem.id].replace(/\s+/g, "")
        console.log(trimAnswer, trimCorrectAnswer)
        if(trimAnswer === trimCorrectAnswer) {
          console.log(2);
          a++
        }
      }
      if (elem.typeID === 4 && listAnswerUser[elem.id]) {
        const trimQuestion = elem.correctAnswer.replace(/\s+/g, "")
        const trimAnswer = listAnswerUser[elem.id].replace(/\s+/g, "")
        console.log(trimAnswer, trimQuestion);
        if(trimAnswer === trimQuestion) {
          console.log(3);
          a++
        }
      }
    })
    const diem = Math.round(((10 / arrQuestion.length ) * a) * 100) / 100
    setAnswerTrue(a)
    setCount(diem)
    setStart(false)
  }

  const callback = (key) => {

  }
  return (
    <div className="takeTest">
      <div className="row">
        <div className="col-4 takeTest__left">
          <div className="takeTest__left__start" style={{display: start ? 'block' : 'none'}}>
            <p className="takeTest__left__start--title">thời gian làm bài</p>
            <div className="takeTest__left__start--time"><span>15 phút</span></div>
          </div>

          <div className="takeTest__left__information">
            <p className="takeTest__left__information--title">tên đề thi</p>
            <div ><label>Điểm: </label> <span>{count}</span></div>
            <div ><label>Số câu: </label> <span>{arrQuestion.length}</span></div>
            <div ><label>Số câu làm được: </label> <span>{answerTrue} / {arrQuestion.length}</span></div>
            <div ><label>Thời gian: </label> <span>15</span> phút</div>
          </div>

          <div className="takeTest__left__action">
            <button className="takeTest__left__action--submit" onClick={onsubmitTest} style={{display: start ? 'block' : 'none'}}>Nộp bài</button>
            <button className="takeTest__left__action--start" onClick={onStart} style={{display: start ? 'none' : 'block'}}>Bắt đầu làm</button>
            <button className="takeTest__left__action--cancel" onClick={clickCancel} style={{display: start ? 'block' : 'none'}}>Huỷ</button>
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
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="loại 1" key="1">
                <Question
                  arrQuestion={arrQuestion}
                  answerUser = {answerUser}
                  listAnswerUser = {listAnswerUser}
                />
              </TabPane>
              <TabPane tab="loại 2" key="2">
                <FormFillOut
                  arrQuestion={arrQuestion}
                  answerUser = {answerUser}
                  listAnswerUser = {listAnswerUser}
                />
              </TabPane>
              <TabPane tab="loại 3" key="3">
                <ChangeSentence
                    arrQuestion={arrQuestion}
                    answerUser = {answerUser}
                    listAnswerUser = {listAnswerUser}
                  />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeTest
