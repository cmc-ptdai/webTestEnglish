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
  fetchQuestionApiByType: (id) => {
    const url=`/questions?type=${id}`
    return axiosClient.get(url)
  }
}

export default questionsApi
