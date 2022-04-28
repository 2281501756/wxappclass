// pages/timer/timer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour: '00',
    minute: '00',
    second: '00',
    intervalID: -1,
    studyHour: -1,
    studyMinute: -1,
    studySecond: -1
  },
  timerStop() { 
    clearInterval(this.data.intervalID)
    wx.clearStorageSync("timeDate")
    this.setData({
      intervalID: -1,
      studyHour: parseInt(this.data.hour),
      studyMinute: parseInt(this.data.minute),
      studySecond: parseInt(this.data.second),
      hour: "00",
      minute: "00",
      second: "00"
    })
  },
  timerStart() {
    let id = setInterval(() => {
      this.timerStartFun()
    }, 1000);
    let x = wx.getStorageSync('timeData')
    if(x === '') {
      let d = Date.now()
      wx.setStorageSync('timeData', d)
    }
    this.setData({
      intervalID: id
    })
  },
  timerStartFun() {
    let a = parseInt(this.data.hour)
    let b = parseInt(this.data.minute)
    let c = parseInt(this.data.second)
    c++
    if(c === 60) {
      b ++
      c = 0
    }
    if(b === 60) {
      b = 0
      a++
    }
    if(c < 10) c = "0" + c;
    if(b < 10) b = "0" + b;
    if(a < 10) a = "0" + a;
    this.setData({
      hour: a,
      minute: b,
      second: c
    })
  },
  initDate(d) {
    let date = Date.now() - d
    let a = Math.floor(date / 1000 / 60 / 60)
    let b = Math.floor(date / 1000 / 60 % 60)
    let c = Math.floor(date / 1000 % 60)
    if(a < 10) a = "0" + a;
    if(b < 10) b = "0" + b;
    if(c < 10) c = "0" + c;
    this.setData({  
      hour: a,
      minute: b,
      second: c
    })
    this.timerStart()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let d = wx.getStorageSync('timeData')
    if(d !== '') this.initDate(d)
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