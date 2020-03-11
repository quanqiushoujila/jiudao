function setStorageSync(key, data) {
  wx.setStorageSync(key, data)
} 

function removeStorageSync (key) {
  wx.removeStorageSync(key)
}

function getStorageSync (key) {
  wx.getStorageSync(key)
}

module.exports = {
  setStorageSync,
  removeStorageSync,
  getStorageSync
}