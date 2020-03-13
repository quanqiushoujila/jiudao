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
    uncomingData: [],
    hotMore: true,
    uncomingMore: true
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
    this.setData({
      hotData: [],
      uncomingData: [],
      hotMore: true,
      uncomingMore: true
    })
    let hotCallback = function () {
      wx.stopPullDownRefresh()
    }
    let uncomingCallback = function () {
      wx.stopPullDownRefresh()
    }
    if (this.data.active === 0) {
      this.getHotList({
        callback: hotCallback
      })
    } else if (this.data.active === 1) {
      this.getUncomingList({
        callback: uncomingCallback
      })
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('onReachBottom', this.data.active, this.data.hotMore)
    let size = 10
    if (this.data.active === 0) {
      if (this.data.hotMore) {
        let params = {start: this.data.hotData.length }
        this.getHotList(params)
      }
    } else if (this.data.active === 1) {
      if (this.data.uncomingMore) {
        this.getUncomingList()
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onTo (e) {
    let id = e.currentTarget.id
    // console.log(e)
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
    })
  },
  // 热映
  getHotList(params) {
    if (!params) {
      params = {}
    }
    if (!params.data) {
      params.data = {}
    }
    if (this.data.hotMore) {
      wx.showLoading()
      panelModel.getHotDetail(params.data).then((data) => {
        wx.hideLoading()
        this.setData({
          hotData: this.data.hotData.concat(data.subjects)
        })
        this.data.hotMore = this.data.hotData.length < data.total
        params.callback && params.callback()
      }).catch(() => {
        wx.hideLoading()
      })
    }
  },
  getUncomingList(params) {
    if (!params) {
      params = {}
    }
    if (!params.data) {
      params.data = {}
    }
    if (this.data.uncomingMore) {
      wx.showLoading()
      panelModel.getUncomingDetail(params.data).then((data) => {
        wx.hideLoading()
        this.setData({
          uncomingData: this.data.uncomingData.concat(data.subjects)
        })
        this.data.uncomingMore = this.data.uncomingData.length < data.total
        params.callback && params.callback()
      }).catch(() => {
        wx.hideLoading()
      })
    }
  },
  onChange (data) {
    this.setData({
      active: data.detail.index
    })
    if (data.detail.index === 0) {
      if (this.data.hotData.length === 0) {
        this.getHotList()
      }
    } else if (data.detail.index === 1) {
      if (this.data.uncomingData.length === 0) {
        this.getUncomingList()
      }
    }
  }
})