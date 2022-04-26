// pages/addclass/addclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    classroom: '',
    startTime: '',
    week: '',
  },
  getcolor() {
    let a = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let res = "#"
    for(let i = 0 ; i < 6 ; i ++) {
      res += a[Math.floor(Math.random() * a.length)]
    }
    return res
  },
  buttonbind() {
    
    if(!this.data.name ||!this.data.classroom || !this.data.startTime || !this.data.week) {
      wx.showToast({
        title: "不能为空",
        icon: 'none',
        duration: 2000
      })
      return 
    } else if(parseInt(this.data.startTime) > 5 ||parseInt(this.data.startTime) < 1) {
      wx.showToast({
        title: "开始时间大于0 小于5",
        icon: 'none',
        duration: 2000
      })
      return 
    } else if(parseInt(this.data.week) > 7 || parseInt(this.data.week) < 1) {
      wx.showToast({
        title: "填写正确的周次",
        icon: 'none',
        duration: 2000
      })
      return 
    }

    let classdata = {
      name: this.data.name,
      classroom: this.data.classroom,
      startTime: this.data.startTime,
      week: this.data.week,
      color: this.getcolor()
    }
    let CLASSDATA =  wx.getStorageSync('classdata')
    if(CLASSDATA === '') {
      CLASSDATA = []
      CLASSDATA.push(classdata)
      wx.setStorageSync('classdata', CLASSDATA)
    } else {
      CLASSDATA.push(classdata)
      wx.setStorageSync('classdata', CLASSDATA)
    }
    wx.showToast({
      title: "添加成功返回首页下拉刷新",
      icon: 'succeed',
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