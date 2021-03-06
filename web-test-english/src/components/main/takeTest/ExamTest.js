// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './style.scss'
import questionsApi from '../../../api/questionApi'
import Question from './question'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuestion as getQuestionAction,
  getQuestionFillOut as getQuestionFillOutAction
} from '../../../redux/actions/questionAction'
import FormFillOut from './formTestFillOut/FormFillOut'
import ChangeSentence from './changesentence/ChangeSentence'
import QuestionListen from './listen/QuestionListen'
import QuestionSynonyms from './synonyms/QuestionSynonyms'
import QuestionRead from './readAndAnswer/ReadAndAnswer'
import SelectASuitableWork from './SelectASuitableWork/SelectASuitableWork'

const { TabPane } = Tabs;

const TakeTest = () => {
  const dispatch = useDispatch()

  const examTest = useSelector(store => store.questionReducer.listQuestionExamTest)

  const listQuestions = useSelector(store => store.questionReducer.listQuestionsTrueFalse)
  const arrQuestionFillOut = useSelector(store => store.questionReducer.listQuestionsFillOut)
  const [listChangeSentence, setListChangeSentence] = useState([])
  const [listQuestionListen, setListQuestionListen] = useState([])
  const [listQuestionSynonyms, setListQuestionSynonyms] = useState([])
  const [listQuestionRead, setListQuestionRead] = useState([])
  const [listQuestionSelect, setListQuestionSelect] = useState([])

  const [arrQuestion, setArrQuestion] = useState([])
  const [listAnswerUser, setListAnswerUser] = useState({})

  const [start, setStart] = useState(false)
  const [answerTrue, setAnswerTrue] = useState(0)
  const [count, setCount] = useState(0)

  const initialPanes = [
    {
      title: 'Chọn đáp án đúng',
      content: Question,
      key: 'questions',
      closable: false,
    },
    {
      title: 'Điền vào chỗ trống',
      content: FormFillOut,
      key: 'formFillOut',
      closable: false,
    },
    {
      title: 'Viết lại câu',
      content: ChangeSentence,
      key: 'changesentence',
      closable: false,
    },
    {
      title: 'đọc và trả lời câu hỏi',
      content: QuestionRead,
      key: 'readandanswer',
      closable: false,
    },
    {
      title: 'nghe',
      content: QuestionListen,
      key: 'listening',
      closable: false,
    },
    {
      title: 'Chọn từ để câu không khác nghĩa',
      content: QuestionSynonyms,
      key: 'synonyms',
      closable: false,
    },
    {
      title: 'chon từ phù hợp',
      content: SelectASuitableWork,
      key: 'selectasuitableword',
      closable: false,
    },
  ];

  const randomQuestion = (arr = [], number) => {
    let newArr = []
    while(newArr.length < number) {
      const question = Math.floor(Math.random() * arr.length )
      newArr.push(arr[question])
      const arrFilter = newArr.filter((item, index) => (newArr.indexOf(item) === index))
      newArr = arrFilter
    }
    return newArr
  }

  const onStart = () => {
    const listQuestion = randomQuestion(listQuestions, examTest.questions)
    const listQuestionFillOut = randomQuestion(arrQuestionFillOut, examTest.formFillOut)
    const listQuestionChangeSentence = randomQuestion(listChangeSentence, examTest.changesentence)
    const listSynonyms = randomQuestion(listQuestionSynonyms, examTest.synonyms)
    const listRead = randomQuestion(listQuestionRead, examTest.readandanswer)
    const listListen = randomQuestion(listQuestionListen, examTest.listening, examTest)
    const listSelect = randomQuestion(listQuestionSelect, examTest.selectasuitableword)
    const arr = listQuestion.concat(listQuestionFillOut, listQuestionChangeSentence, listSynonyms, listListen, listRead,  listSelect)
    console.log(arr);
    // setArrQuestion(arr)
    // setStart(true)
    // setCount(0)
    // setAnswerTrue(0)
    // setListAnswerUser({})
  }

  const fetchQuestionApi = async () => {
    const response = await questionsApi.fetchQuestionApiByLevel('questions', examTest.level, examTest.class)
    dispatch(getQuestionAction(response))

    const questionFillOut = await questionsApi.fetchQuestionApiByLevel('formFillOut',examTest.level, examTest.class)
    dispatch(getQuestionFillOutAction(questionFillOut))

    const questionChangeSentence = await questionsApi.fetchQuestionApiByLevel('changesentence',examTest.level, examTest.class)
    setListChangeSentence(questionChangeSentence)

    const questionListen = await questionsApi.fetchQuestionApiByLevel('listening',examTest.level, examTest.class)
    setListQuestionListen(questionListen)

    const questionSynonyms = await questionsApi.fetchQuestionApiByLevel('synonyms',examTest.level, examTest.class)
    setListQuestionSynonyms(questionSynonyms)

    const questionRead = await questionsApi.fetchQuestionApiByLevel('readandanswer',examTest.level, examTest.class)
    setListQuestionRead(questionRead)

    const questionSelect = await questionsApi.fetchQuestionApiByLevel('selectasuitableword',examTest.level, examTest.class)
    setListQuestionSelect(questionSelect)

  }

  useEffect(() => {
    fetchQuestionApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      if (elem.typeID === 6) {
        numberQuestion += 8
      }

      if (elem.typeID === 5 && listAnswerUser[elem.id]) {
        if(listAnswerUser[elem.id].a) {
          const answerA = elem.correctAnswer.a.replace(/\s+/g, "")
          const answerAUser = listAnswerUser[elem.id].a.replace(/\s+/g, "")
          if(answerA === answerAUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].b) {
          const answerB = elem.correctAnswer.b.replace(/\s+/g, "")
          const answerBUser = listAnswerUser[elem.id].b.replace(/\s+/g, "")
          if(answerB === answerBUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].c) {
          const answerC = elem.correctAnswer.c.replace(/\s+/g, "")
          const answerCUser = listAnswerUser[elem.id].c.replace(/\s+/g, "")
          if(answerC === answerCUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].d) {
          const answerD = elem.correctAnswer.d.replace(/\s+/g, "")
          const answerDUser = listAnswerUser[elem.id].d.replace(/\s+/g, "")
          if(answerD === answerDUser) {
            a++
          }
        }
      }

      if (elem.typeID === 6 && listAnswerUser[elem.id]) {
        if (listAnswerUser[elem.id].a) {
          const answerA = elem.correctAnswer.a.replace(/\s+/g, "")
          const answerAUser = listAnswerUser[elem.id].a.replace(/\s+/g, "")
          if(answerA === answerAUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].b) {
          const answerB = elem.correctAnswer.b.replace(/\s+/g, "")
          const answerBUser = listAnswerUser[elem.id].b.replace(/\s+/g, "")
          if(answerB === answerBUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].c) {
          const answerC = elem.correctAnswer.c.replace(/\s+/g, "")
          const answerCUser = listAnswerUser[elem.id].c.replace(/\s+/g, "")
          if(answerC === answerCUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].d) {
          const answerD = elem.correctAnswer.d.replace(/\s+/g, "")
          const answerDUser = listAnswerUser[elem.id].d.replace(/\s+/g, "")
          if(answerD === answerDUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].e) {
          const answerE = elem.correctAnswer.e.replace(/\s+/g, "")
          const answerEUser = listAnswerUser[elem.id].e.replace(/\s+/g, "")
          if(answerE === answerEUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].f) {
          const answerF = elem.correctAnswer.f.replace(/\s+/g, "")
          const answerFUser = listAnswerUser[elem.id].f.replace(/\s+/g, "")
          if(answerF === answerFUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].g) {
          const answerG = elem.correctAnswer.g.replace(/\s+/g, "")
          const answerGUser = listAnswerUser[elem.id].g.replace(/\s+/g, "")
          if(answerG === answerGUser) {
            a++
          }
        }

        if (listAnswerUser[elem.id].h) {
          const answerH = elem.correctAnswer.h.replace(/\s+/g, "")
          const answerHUser = listAnswerUser[elem.id].h.replace(/\s+/g, "")
          if(answerH === answerHUser) {
            a++
          }
        }
      }
      if (elem.typeID === 7 && listAnswerUser[elem.id]) {
        const trimCorrectAnswer = elem.correctAnswer.replace(/\s+/g, "")
        const trimAnswer = listAnswerUser[elem.id].replace(/\s+/g, "")
        if(trimAnswer === trimCorrectAnswer) {
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
            <p className="takeTest__left__information--title">{examTest.name}</p>
            <div ><label>Điểm: </label> <span>{count}</span></div>
            <div ><label>Số câu: </label> <span>{arrQuestion.length}</span></div>
            <div ><label>Số câu làm được: </label> <span>{answerTrue}</span></div>
            <div ><label>Thời gian: </label> <span>{examTest.time}</span> phút</div>
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
            <Tabs defaultActiveKey="1" onChange={callback} >
            { examTest && (
              initialPanes.map((item) => {
                const a = item.key
                const Component = item.content
                if (examTest[a] !== 0) {
                  return (
                    <TabPane tab={item.title} key={item.key}>
                      <Component
                        arrQuestion={arrQuestion}
                        answerUser = {answerUser}
                        listAnswerUser = {listAnswerUser}
                      />
                    </TabPane>
                  )
                }  else {
                  return null
                }
              })
            )
            }
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeTest
