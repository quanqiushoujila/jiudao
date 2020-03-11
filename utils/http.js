class HTTP {
  request({
    url = '',
    method = 'GET',
    data = {},
    error
  }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: Object.assign({}, data),
        method: method,
        header: {
          'Content-Type': 'json'
        },
        success: (res) => {
          let code = res.statusCode.toString()
          if (code.charAt(0) === '2') {
            resolve(res.data)
          } else {
            error && error(res)
          }

        },
        error: (res) => {
          reject(res)
        }
      })
    })
  }
}

export default HTTP