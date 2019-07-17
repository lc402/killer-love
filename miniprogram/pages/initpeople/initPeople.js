// miniprogram/pages/initPeople/initPeople.js

var room = getApp().globalData.room;
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
    room.killers = 0;
    room.polices = 0;
    room.farmers = 0
    room.totals = 0
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
    this.setData({
      killNum: room.killers,
      policeNum: room.polices,
      manNum: room.farmers
    })
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
    room.killers = 0;
    room.polices = 0;
    room.farmers = 0
    room.totals = 0
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
  getInputKill: function(e) {
    console.log(e.detail.value);
    room.totals = (room.totals) - (room.farmers) + parseInt(e.detail.value);
    room.killers = e.detail.value
    this.setData({
      totalNum: room.totals,
      killNum: room.killers
    })
  },
  getInputPolice: function(e) {
    console.log(e.detail.value);
    room.totals = (room.totals) - (room.farmers) + parseInt(e.detail.value);
    room.polices = e.detail.value
    this.setData({
      totalNum: room.totals,
      policeNum: room.polices
    })
  },
  getInputMan: function(e) {
    console.log(e.detail.value);
    room.totals = (room.totals) - (room.farmers) + parseInt(e.detail.value);
    room.farmers = e.detail.value
    this.setData({
      manNum: room.farmers,
      totalNum: room.totals
    })
  },
  setAllNum: function(e) {
    console.log("kill:" + room.killers);
    console.log("police:" + room.polices);
    console.log("man:" + room.farmers);
    console.log("total:" + room.totals);
    this.setData({
      totalNum: room.totals
    })
  },
})