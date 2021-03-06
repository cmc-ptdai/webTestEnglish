import axiosClient from './axiosClient'

// const fetchQuestionApi = () => {
//   const url='/questions'
//   return axiosClient.get(url)
// }

const questionsApi = {
  fetchQuestionApi: (prams) => {
    const url=`/${prams}`
    return axiosClient.get(url)
  },
  fetchQuestionApiByLevel: (name, level, difficult) => {
    const url=`/${name}?levelID=${level}&&difficultID=${difficult}`
    return axiosClient.get(url)
  }
}

export default questionsApi
