// pages/components/nav_bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bar_type: {
      type: Number,
      value: 0
    }
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
    nav_path: function(option){
      const path = option.currentTarget.dataset.path
      wx.redirectTo({
        url: path
      })
    }
  }
})
