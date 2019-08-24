//index.js
//获取应用实例
const app = getApp();
const API = require('../../utils/api.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    posts_data: [{
      user_name: "Jimmy",
      user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJnfLTEOt9lGGWoaicFyf8Eu9leTHb9AGNsbKQTnMMicUECicOpNqMiapkgEOgtPVjYMTLUPoBiadQuo5Q/132",
      create_time: '2019-09-09 03:59',
      content: 'hello world'
    },{
      user_name: "Jimmy",
      user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJnfLTEOt9lGGWoaicFyf8Eu9leTHb9AGNsbKQTnMMicUECicOpNqMiapkgEOgtPVjYMTLUPoBiadQuo5Q/132",
      create_time: '2019-09-09 03:59',
      content: 'hello world'
    }]
  },
  onLoad: function () {
    wx.redirectTo({
      url: '/pages/post/index/index'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  get_post_list: function(){
    API.post().then(()=>{

    }).catch(()=>{

    })
  }
})
