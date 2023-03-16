Page({
    data: {
      //canIUse: wx.canIUse('button.open-type.getUserInfo')
      userInfo: {},
      isShowUserName: false,
     
    },
    goToIndex: function(e) {
      wx.redirectTo({
        url: '/pages/start/start',
        })

    },
  
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', 
        success: (res) => {
          console.log("获取用户信息成功",res)
          let user = res.userInfo
          wx.setStorageSync('user', user)
          this.setData({
            userInfo: user,
            isShowUserName: true,
          })
        },
        fail: res => {
          console.log("获取用户信息失败",res)
        }
      })
    },
    handleGetUserInfo(res){
      console.log(res)
      if(res.detail.userInfo){//允许
          //修改userInfo的状态数据
          this.setData({
              userInfo:res.detail.userInfo
          })
      }
  },
    onShow(options){
      this.getUserProfile()
      var user = wx.getStorageSync('user');
      if(user && user.nickName){
        this.setData({
          userInfo: user,
            isShowUserName: true,
        })
      }
    },
/*
    onLoad: function() {
      // 查看是否授权
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserProfile({
              desc: 'desc',
              success: function(res) {
                console.log(res.userInfo)
              }
          })
        }
      }
      })
    },
    bindGetUserInfo (e) {
      console.log(e.detail.userInfo)
      wx.navigateBack();
      wx.navigateTo({
        url: 'pages/index/index',
      })
    },*/
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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