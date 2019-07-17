// miniprogram/pages/mainroom/mainroom.js
var room = getApp().globalData.room;
var user = getApp().globalData.user;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var players = [];
    for (var i = 0; i < room.totals; i++) {
      console.log("test onload for array" + i);
      if (i === 0) {
        var player = {};
        console.log("liucx:" + user.openid);
        console.log("liucx:" + user.nickName);
        player.id = user.openid;
        player.name = user.nickName;
        player.url = user.avatarUrl;
        players[i] = player;
      } else {
        var player = {};
        player.id = i + 1;
        player.name = "liucx";
        players[i] = player;
      }
    }
    this.setData({
      tableData: players
    })
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
    if (!room.init) {
      this.setData({
        inputBg: "cornsilk",
        viewBg: "green",
        viewRg: "gainsboro",
        isdisableR: true,
        isdisableI: false,
        isdisableInput: false
      })
    }
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

  getPolice: function(e) {
    room.polices = parseInt(e.detail.value);
  },
  getKill: function(e) {
    room.killers = parseInt(e.detail.value);
  },
  getFarmer: function(e) {
    room.farmers = parseInt(e.detail.value);
  },

  init: function() {
    if (!room.init) {
      room.init = true;
      var array = [];
      //roomId = 1;
      room.totals = room.polices + room.killers + room.farmers;
      for (var i = 0; i < room.totals; i++) {
        //console.log("test onload for array" + i);
        if (i === 0) {
          var player = {};
          console.log("liucx:" + user.openid);
          console.log("liucx:" + user.nickName);
          player.id = user.openid;
          player.name = user.nickName;
          player.url = user.avatarUrl;
          array[i] = player;
        } else {
          var tmp = {};
          tmp.id = i + 1;
          tmp.name = "liucx" + i;
          array[i] = tmp;
        }
      }
      this.setData({
        tableData: array,
        inputBg: "gray",
        viewBg: "gainsboro",
        viewRg: "green",
        isdisableR: false,
        isdisableI: true,
        isdisableInput: true
      })
    }
  },
  reset: function() {
    if (room.init) {
      room.init = false;
      this.setData({
        inputBg: "cornsilk",
        viewBg: "green",
        viewRg: "gainsboro",
        isdisableR: true,
        isdisableI: false,
        isdisableInput: false
      })
    }
  },
  itemClick: function(e) {
    // 获取点击条目id
    var index = parseInt(e.currentTarget.dataset.index);
    // 获取相应的数据
    var item = this.data.tableData[index].name;
    //var item = this.data.tableData[index];
    // 打印数据
    console.log(item);
    this.setData({
      avatarUrl: user.avatarUrl
    })
  }

})