// pages/templates/suduke/suduke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectitem: null, //当前选择的候选数字
    index: 0,         //picker 初始选择序号
    array: [1,2,3,4,5,6,7,8,9],        //picker 数据
    myindex: [
      [0, 0, 0, 0, 0, 0, 7, 1, 0],
      [0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 4, 0, 9, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 6, 7, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 4],
      [0, 0, 0, 0, 0, 0, 0, 0, 9],
      [0, 0, 3, 0, 0, 5, 0, 0, 0],
      [0, 2, 0, 4, 0, 0, 0, 0, 8]
    ],
    subject: [
      [0, 0, 0, 0, 0, 0, 7, 1, 0],
      [0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 4, 0, 9, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 6, 7, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 4],
      [0, 0, 0, 0, 0, 0, 0, 0, 9],
      [0, 0, 3, 0, 0, 5, 0, 0, 0],
      [0, 2, 0, 4, 0, 0, 0, 0, 8]
    ],
    answer: [
      [9, 3, 8, 6, 5, 4, 7, 1, 2],
      [5, 1, 6, 2, 7, 8, 9, 4, 3],
      [2, 4, 7, 9, 1, 3, 8, 5, 6],
      [8, 6, 2, 5, 4, 1, 3, 9, 7],
      [4, 9, 1, 3, 6, 7, 2, 8, 5],
      [3, 7, 5, 8, 2, 9, 1, 6, 4],
      [7, 5, 4, 1, 8, 2, 6, 3, 9],
      [6, 8, 3, 7, 9, 5, 4, 2, 1],
      [1, 2, 9, 4, 3, 6, 5, 7, 8]
    ]
  },

  setitem: function(e){
    var _this = this;
    console.log(e.currentTarget.dataset.changeable);
    if (e.currentTarget.dataset.changeable == true){
      if (_this.data.selectitem == null) {
        wx.showToast({
          title: '请选择候选数字',
        })
        return;
      } else {
        (this.data.subject[e.currentTarget.dataset.index])[e.currentTarget.dataset.subindex] = this.data.selectitem;
        this.setData({
          subject: this.data.subject
        })
      }  
    }
  },

  btnTap: function(e){
    //选择候选数字
    this.setData({
      selectitem: e.currentTarget.dataset.value
    })
  },

  restart: function(e){
    //重新开始
    wx.showModal({
      title: '重来一次吗？',
      success: function(){
        this.setData({
          subject: this.data.myindex
        })
      }
    })

  },

  commit: function(e){
    //交作业
    var _this = this;
    if(_this.data.subject === _this.data.answer){
      wx.showModal({
        title: '交作业啦',
        content: '帮帮哒，满分100分！',
        complete: function(){
          wx.redirectTo({
            url: '../../index/index',
          })
        },
      })
    }else{
      wx.showModal({
        title: '交作业啦',
        content: '不对哦，再想想！',
        showCancel: false,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.answer)
    if(options.level=='easy'){
      this.setData({
        subject: [
          [0, 1, 6, 0, 9, 4, 0, 2, 0],
          [5, 0, 3, 7, 0, 6, 1, 0, 4],
          [0, 2, 0, 0, 0, 0, 7, 0, 6],
          [6, 7, 0, 0, 5, 0, 0, 4, 0],
          [3, 0, 9, 4, 0, 2, 0, 7, 1],
          [0, 4, 1, 0, 0, 7, 5, 0, 3],
          [8, 0, 0, 6, 4, 0, 3, 0, 0],
          [1, 3, 5, 0, 0, 8, 0, 6, 9],
          [0, 0, 7, 5, 3, 0, 2, 1, 0]
        ],
        myindex: [
          [0, 1, 6, 0, 9, 4, 0, 2, 0],
          [5, 0, 3, 7, 0, 6, 1, 0, 4],
          [0, 2, 0, 0, 0, 0, 7, 0, 6],
          [6, 7, 0, 0, 5, 0, 0, 4, 0],
          [3, 0, 9, 4, 0, 2, 0, 7, 1],
          [0, 4, 1, 0, 0, 7, 5, 0, 3],
          [8, 0, 0, 6, 4, 0, 3, 0, 0],
          [1, 3, 5, 0, 0, 8, 0, 6, 9],
          [0, 0, 7, 5, 3, 0, 2, 1, 0]
        ],
        answer: [
          [7, 1, 6, 3, 9, 4, 8, 2, 5],
          [5, 8, 3, 7, 2, 6, 1, 9, 4],
          [9, 2, 4, 8, 1, 5, 7, 3, 6],
          [6, 7, 8, 1, 5, 3, 9, 4, 2],
          [3, 5, 9, 4, 8, 2, 6, 7, 1],
          [2, 4, 1, 9, 6, 7, 5, 8, 3],
          [8, 9, 2, 6, 4, 1, 3, 5, 7],
          [1, 3, 5, 2, 7, 8, 4, 6, 9],
          [4, 6, 7, 5, 3, 9, 2, 1, 8]
        ]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})