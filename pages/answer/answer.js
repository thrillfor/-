// pages/answer/answer.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: "",
    status: "",
    list: [],
    answerNow: 0,
    optionList: ["A", "B", "C", "D"],
    successNum: 0,
    failNum: 0,
  },

  selectAnswer(e) {
    console.log(e);
    const { item } = e.currentTarget.dataset;
    // 1. 用户选择的是什么选项
    // 2. 这个选项是错误还是正确
    // 3. 给用户提示, 进行背景颜色的替换
    // 4. 跳转到下一个题目
    const answer = this.data.list[this.data.answerNow].answer;

    if (item === answer) {
      // 正确
      this.setData({
        select: item,
        status: "success",
        successNum: this.data.successNum + 1,
      });
    } else {
      // 错误
      this.setData({
        select: item,
        status: "fail",
        failNum: this.data.failNum + 1,
      });
    }

    if (this.data.answerNow === this.data.list.length - 1) {
      wx.showModal({
        title: "恭喜你",
        content: `你已完成所有题目, 共答对${this.data.successNum}道题, 共答错${this.data.failNum}道题, 请再接再厉!`,
        showCancel: false,
        success: () => {
          wx.navigateTo({
            url: "/pages/main/main",
          });
        },
      });
    } else {
      setTimeout(() => {
        this.setData({
          answerNow: this.data.answerNow + 1,
          status: "",
          select: "",
        });
      }, 500);
    }
  },

  tospark() {
    wx.navigateTo({
      url: "/pages/spark/spark",
    });
  },

  Pass(e) {
    console.log(e);
    this.setData({
      failNum: this.data.failNum + 1,
    });

    if (this.data.answerNow === this.data.list.length - 1) {
      wx.showModal({
        title: "恭喜你",
        content: `你已完成所有题目, 共答对${this.data.successNum}道题, 共答错${this.data.failNum}道题, 请再接再厉!`,
        showCancel: false,
        success: () => {
          wx.navigateTo({
            url: "/pages/main/main",
          });
        },
      });
    } else {
      setTimeout(() => {
        this.setData({
          answerNow: this.data.answerNow + 1,
          status: "",
          select: "",
        });
      }, 500);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    db.collection("question").get({
      success: (res) => {
        console.log(res);
        const { data } = res;
        this.setData({
          list: data,
        });
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
});
