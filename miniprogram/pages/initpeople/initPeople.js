// miniprogram/pages/initPeople/initPeople.js

var killNum;
var policeNum;
var manNum;
var total;
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
    killNum = e.detail.value;
    this.setData({
      killNum: killNum
    })
  },
  getInputPolice: function(e) {
    console.log(e.detail.value);
    policeNum = e.detail.value;
    this.setData({
      policeNum: policeNum
    })
  },
  getInputMan: function(e) {
    console.log(e.detail.value);
    manNum = e.detail.value;
    this.setData({
      manNum: manNum
    })
  },
  setAllNum: function(e) {
    console.log("kill:" + killNum);
    console.log("police:" + policeNum);
    console.log("man:" + manNum);
    total = killNum + policeNum + manNum;
    console.log("total:" + total);
  },
})