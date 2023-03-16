//获取应用实例


const app = getApp()

//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');

Page({
  data: {
    src: '', //路径
  },
  // 文字转语音
  onLoad:function(options){
      var wz1 = "云冈石窟位于山西省大同市城西约16公里的武州（周）山南麓、武州川的北岸，石窟依山开凿，东西绵延约1公里。存有主要洞窟45个，大小窟龛252个，石雕造像51000余躯，为中国规模最大的古代石窟群之一。\n\n";
      var wz2 = "云冈石窟在1961年被国务院公布为全国首批重点文物保护单位，2001年12月14日被联合国教科文组织列入世界遗产名录，2007年5月8日被国家旅游局评为首批国家5A级旅游景区。\n\n";
      var wz3 = "2020年2月，为致敬奋战在抗疫一线的医务工作者，云冈石窟景区恢复运营之日起至2020年12月31日，向全国医务工作者免门票。\n\n";
      this.setData({
          wz1:wz1,
          wz2:wz2,
          wz3:wz3
      })
 },
  start: function (e) {
    var that = this;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
    
      content: '云冈石窟位于山西省大同市城西约16公里的武州（周）山南麓、武州川的北岸，石窟依山开凿，东西绵延约1公里。存有主要洞窟45个，大小窟龛252个，石雕造像51000余躯，为中国规模最大的古代石窟群之一。云冈石窟在1961年被国务院公布为全国首批重点文物保护单位，2001年12月14日被联合国教科文组织列入世界遗产名录，2007年5月8日被国家旅游局评为首批国家5A级旅游景区。2020年2月，为致敬奋战在抗疫一线的医务工作者，云冈石窟景区恢复运营之日起至2020年12月31日，向全国医务工作者免门票。',
    
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
  }
})
