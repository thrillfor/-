const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2500,
    duration: 500,
    bannerUrl: [],
    currentBanner: 0,
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

    that = this;
    that.data.bannerUrl.push(
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.zi01ZELL5WmD7YCIYtmpsQHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    );
    that.data.bannerUrl.push(
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.E-yTClgUhEBVqBisfykH5AHaHY?w=208&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    );
    that.data.bannerUrl.push(
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.4Rj-2xoXF68BIgEYtW5HxAHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    );
    that.setData({
      bannerUrl: that.data.bannerUrl,
    });
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

  bindChange(e) {
    //轮播图
    that.setData({
      currentBanner: e.detail.current,
    });
  },

  scanCodeEvent: function () {
    var that = this;
    wx.scanCode({
      onlyFromCamera: flase, // 允许从相机和相册扫码
      success(res) {
        console.log("扫码成功：" + JSON.stringify(res));
      },
    });
  },

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
