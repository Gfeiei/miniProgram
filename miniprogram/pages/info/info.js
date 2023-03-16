// miniprogram/pages/info/info.js
const app = getApp()

//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');
Page({

    /**
     * 页面的初始数据
     */
    data: {
      market:[
        { id: 0 },
        { id: 1 },
        { id: 2},
        { id: 3},
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9},
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },
        { id: 30 },
        { id: 31 },
        { id: 32 },
        { id: 33 },
        { id: 34 },
        { id: 35 },
        { id: 36 },
        { id: 37 },
        { id: 38 },
        { id: 39 },
      ],
    },
  // 文字转语音
  start: function (e) {
    var that = this;
    var content = this.data.market.description;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(res);
        console.log("succ tts", res.filename);
        that.setData({
          src: res.filename
        })
        // 播报语音
        that.yuyinPlay();
      },
      fail: function (res) {
        console.log("fail tts", res)
      }
    });
  },

  
  //播放语音
  yuyinPlay: function (e) {
    if (this.data.src == ' ') {
      console.log("暂无语音");
      return;
    }
    this.innerAudioContext.src = this.data.src //设置音频地址
    this.innerAudioContext.play(); //播放音频
  },

  // 结束语音
  end: function (e) {
    this.innerAudioContext.pause(); //暂停音频
  },
  
  onReady: function () {
    //创建内部 audio 上下文 InnerAudioContext 对象。
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError(function (res) {
      console.log(res);
      wx.showToast({
        title: '语音播放失败',
        icon: 'none',
      })
    })
  
    },
      onLoad: function (options) {
      console.log(options.mar)
  
        this.setData({
         market:JSON.parse(options.mar)
        })
       
      },
    // 播放
  videoPlay: function() {
    console.log("开始播放")
    var videoplay = wx.createVideoContext("video");
    videoplay.play()
    this.setData({
      controls: true,
    })
  },
  

  })