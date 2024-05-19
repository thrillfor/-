// pages/ise/ise.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "../../static/用户.png",
    nickname: "用户",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (wx.getStorageSync("nickname")) {
      this.globalData.nickname = wx.getStorageSync("nickname");
    }
    if (wx.getStorageSync("avatarUrl")) {
      this.globalData.nickname = wx.getStorageSync("avatarUrl");
    }
  },
  toInfo: function () {
    wx.navigateTo({
      url: "/pages/info/info",
      success: (res) => {
        console.log(res);
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickname: app.globalData.nickname,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
