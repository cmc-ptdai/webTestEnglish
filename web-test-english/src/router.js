import TakeTest from './components/main/takeTest/TakeTest'
import CreateExam from './components/main/createExam/CreateExam';
import TakeExamTest from './components/main/takeTest/ExamTest';

const router = [
  {path: '/', exact: true, Component: CreateExam},
  {path: '/taketest', exact: true, Component: TakeTest},
  {path: '/examTest', exact: true, Component: TakeExamTest},
]

export default router;
