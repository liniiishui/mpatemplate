import qs from 'qs'

const promise = function (fn) {
  return new Promise((resolve, reject) => {
    fn.then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  // get请求
  getApi: params => promise(axios.get('/servicename/modulename/api', { params })),
  // post请求
  postApi: data => promise(axios.post('/servicename/modulename/api', qs.stringify(data)))
}
