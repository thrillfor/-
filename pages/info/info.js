const app = getApp();
Page({
  data: {
    avatarUrl: "../../static/用用户.png",
    nickname: "用户",
  },
  changeNickname(e) {
    this.setData({
      nickname:e.detail.value,
    });
    app.globalData.nickname = e.detail.value;
    wx.setStorageSync("nickname", nickname);
  },
  onLoad() {
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme,
      });
    });
  },
  onChooseAvatar(e) {
    let that = this;
    console.log(1111);
    that.setData({
      avatarUrl: "e.datail.avatarUrl",
    
      success: (res) => {
        wx.setStorageSync("avatarUrl", avatarUrl);
      },
    });
    console.log(1111);
    app.globalData.avatarUrl = avatarUrl;
    console.log(app.globalData.avatarUrl);
    console.log(1111);
  },
  toPersona: function () {
    wx.navigateBack({
    });
  },
});
