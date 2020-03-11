module.exports = function (url = "", method = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: Object.assign({}, data),
      method: method,
      header: { 'Content-Type': 'json' },
      success: (res) => {
        resolve(res)
      },
      error: (res) => {
        reject(res)
      }
    })
  })
}