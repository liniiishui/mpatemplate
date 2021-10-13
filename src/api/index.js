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
  getApi: params => promise(axios.get('/servicename/modulename/get', { params })),
  // post请求
  postApi: data => promise(axios.post('/servicename/modulename/post', qs.stringify(data)))
}
