var util = require('../../utils/util.js');
Page({

  data:{
    cout:[],
    lists: [
    ]
  },
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    initData(this);
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    initData(this);
  },

  /**
   * 编辑事件
   */
  edit(e) {
    var id = e.currentTarget.dataset.id;
    // 跳转 navigateTo
    wx.navigateTo({
      url: '../qcnew/qcnew?id=' + id
    })
  },

  /**
   * 添加事件
   */
  add() {
    wx.navigateTo({
      url: '../qcnew/qcnew',
    })
  }


})

/**
 * 处理初始化页面列表数据
 */
function initData(page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item, i) => {
      var t = new Date(Number(item.time));
      item.time = util.dateFormate(t);
    })
    page.setData({
      lists: arr
    })
  }
}


