// pages/index/index.js
import Panel from '../../models/panel.js'
let panelModel = new Panel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    hotData: [],
    hotMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getHotList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getHotList() {
    if (this.data.hotMore) {
      wx.showLoading()
      panelModel.getHotDetail().then((data) => {
        wx.hideLoading()
        this.setData({
          hotData: this.data.hotData.concat(data.subjects)
        })
        this.data.hotMore = this.data.hotData.length < this.data.total
        console.log(this.data.hotData)
      }).catch(() => {
        wx.hideLoading()
      })
    }
  }
})