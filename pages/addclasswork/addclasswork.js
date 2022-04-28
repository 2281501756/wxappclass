// pages/addclasswork/addclasswork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '',
    content: '',
  },
  handleClickButton() {
    if(!this.data.title || !this.data.content) {
      wx.showToast({
        title: '不能为空',
        icon: 'error',
        duration: 2000
      })
      return
    }
    let id = '';
    for(let i = 0 ; i < 6 ; i ++) {
      id += Math.floor(Math.random() * 10)
    }
    let item = {
      id: id,
      title: this.data.title,
      content: this.data.content
    }
    let t = wx.getStorageSync('classworkData')
    if(!t) {
      wx.setStorageSync('classworkData', [item])
    } else {
      wx.setStorageSync('classworkData', [...t, item])
    }
    console.log(t);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})