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
import QuestionListen from './listen/QuestionListen'
import QuestionSynonyms from './synonyms/QuestionSynonyms'

const { TabPane } = Tabs;

const TakeTest = () => {
  const dispatch = useDispatch()

  const listQuestions = useSelector(store => store.questionReducer.listQuestionsTrueFalse)
  const arrQuestionFillOut = useSelector(store => store.questionReducer.listQuestionsFillOut)
  const [listChangeSentence, setListChangeSentence] = useState([])
  const [listQuestionListen, setListQuestionListen] = useState([])
  const [listQuestionSynonyms, setListQuestionSynonyms] = useState([])

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
    const listSynonyms = randomQuestion(listQuestionSynonyms)
    const arr = listQuestion.concat(listQuestionFillOut, listQuestionChangeSentence,listSynonyms,listQuestionListen)
    setArrQuestion(arr)
    setStart(true)
    setCount(0)
    setAnswerTrue(0)
    setListAnswerUser({})
  }

  const fetchQuestionApi = async () => {
    const response = await questionsApi.fetchQuestionApi('questions')
    dispatch(getQuestionAction(response))

    const questionFillOut = await questionsApi.fetchQuestionApi('formFillOut')
    dispatch(getQuestionFillOutAction(questionFillOut))

    const questionChangeSentence = await questionsApi.fetchQuestionApi('changesentence')
    setListChangeSentence(questionChangeSentence)

    const questionListen = await questionsApi.fetchQuestionApi('listening')
    setListQuestionListen(questionListen)

    const questionSynonyms = await questionsApi.fetchQuestionApi('synonyms')
    setListQuestionSynonyms(questionSynonyms)
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
  }
  const onsubmitTest = () => {
    let a = 0
    let numberQuestion = arrQuestion.length

    arrQuestion.forEach(elem => {
      if ((elem.typeID === 2 || elem.typeID === 1 || elem.typeID === 3 || elem.typeID === 4) && listAnswerUser[elem.id] ) {
        const trimCorrectAnswer = elem.correctAnswer.replace(/\s+/g, "")
        const trimAnswer = listAnswerUser[elem.id].replace(/\s+/g, "")
        if(trimAnswer === trimCorrectAnswer) {
          a++
        }
      }

      if (elem.typeID === 5) {
        numberQuestion += 3
      }

      if (elem.typeID === 5 && listAnswerUser[elem.id]) {
        const answerA = elem.correctAnswer.a.replace(/\s+/g, "")
        const answerAUser = listAnswerUser[elem.id].a.replace(/\s+/g, "")
        if(answerA === answerAUser) {
          a++
        }
        const answerB = elem.correctAnswer.b.replace(/\s+/g, "")
        const answerBUser = listAnswerUser[elem.id].b.replace(/\s+/g, "")
        if(answerB === answerBUser) {
          a++
        }
        const answerC = elem.correctAnswer.c.replace(/\s+/g, "")
        const answerCUser = listAnswerUser[elem.id].c.replace(/\s+/g, "")
        if(answerC === answerCUser) {
          a++
        }
        const answerD = elem.correctAnswer.d.replace(/\s+/g, "")
        const answerDUser = listAnswerUser[elem.id].d.replace(/\s+/g, "")
        if(answerD === answerDUser) {
          a++
        }
      }
    })

    const score = Math.round(((10 / numberQuestion ) * a) * 100) / 100
    setAnswerTrue(a)
    setCount(score)
    setStart(false)
    setListAnswerUser({})
    setArrQuestion([])
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
            <div ><label>Số câu làm được: </label> <span>{answerTrue}</span></div>
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
              <TabPane tab="Chọn đáp án đúng" key="1">
                <Question
                  arrQuestion={arrQuestion}
                  answerUser = {answerUser}
                  listAnswerUser = {listAnswerUser}
                />
              </TabPane>
              <TabPane tab="Điền vào chỗ trống" key="2">
                <FormFillOut
                  arrQuestion={arrQuestion}
                  answerUser = {answerUser}
                  listAnswerUser = {listAnswerUser}
                />
              </TabPane>
              <TabPane tab="Viết lại câu" key="3">
                <ChangeSentence
                    arrQuestion={arrQuestion}
                    answerUser = {answerUser}
                    listAnswerUser = {listAnswerUser}
                  />
              </TabPane>
              <TabPane tab="Chọn từ để câu không khác nghĩa" key="4">
                <QuestionSynonyms
                    arrQuestion={arrQuestion}
                    answerUser = {answerUser}
                    listAnswerUser = {listAnswerUser}
                  />
              </TabPane>
              <TabPane tab="Nghe" key="5">
                <QuestionListen
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
