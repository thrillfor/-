// pages/ise/ise.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ["启发式AI", "鼓励型AI", "挑战型AI"],
    picture: [
      "../../static/头像.jpg",
      "../../static/头头像.jpg",
      "../../static/头.jpeg",
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
    });
  },
  tospark: function () {
    wx.navigateTo({
      url: "/pages/spark/spark",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      search: this.search.bind(this),
    });
    const openid = wx.getStorageSync("openid");
    if (!openid) {
      wx.cloud.callFunction({
        name: "abc",
        success: (res) => {
          const {
            result: { openid },
          } = res;
          wx.setStorageSync("openid", openid);
        },
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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

  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { text: "搜索结果1", value: 1 },
          { text: "搜索结果2", value: 2 },
        ]);
      }, 200);
    });
  },
  selectResult: function (e) {
    console.log("select result", e.detail);
  },
});
