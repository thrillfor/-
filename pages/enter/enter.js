// pages/enter/enter.js
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        result: '',
    },

    getTitle(e) {
        const { value } = e.detail;
        this.setData({
            title: value
        })
    },

    getOption(e) {
        const { option } = e.currentTarget.dataset;
        const { value } = e.detail;
        const obj = {
            "A": "optionA",
            "B": "optionB",
            "C": "optionC",
            "D": "optionD"
        };
        const optionItem = obj[option];
        this.setData({
                [optionItem]: value
        })
    },

    getResult(e) {
        const { value } = e.detail;
        this.setData({
            result: value
        })
    },

    submit() {
        const { title, optionA, optionB, optionC, optionD, result } = this.data;
        console.log(title, optionA, optionB, optionC, optionD, result);
        
        db.collection('question').add({
            data: {
                title,
                option: [optionA, optionB, optionC, optionD],
                answer: result,
            },
            success: (res) => {
                wx.showToast({
                  icon: 'none',
                  title: '录入成功',
                });
                this.setData({
                    title: '',
                    optionA: '',
                    optionB: '',
                    optionC: '',
                    optionD: '',
                    result: '',
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})