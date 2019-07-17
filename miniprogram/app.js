//app.js

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      user: {
        avatarUrl:"",
        nickName:"",
        openid:"",
      },
      room: {
        polices: 3,
        killers: 3,
        farmers: 6,
        totals: 12,
        init: false,
        reset: false,
        people:[]
      }
    }
  }
})
