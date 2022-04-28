// pages/classwork/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: String,
    title: String,
    content: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      this.triggerEvent("itemclick", {
        id: this.data.pid
      })
    }
  }
})
