
//获取应用实例


const app = getApp()

//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');

Page({
  data: {
    src: '', //路径
  },
  onLoad:function(options){
    var wz1 = "云冈石窟的开凿从文成帝和平初（460年）起，一直延续至孝明帝正光五年（524年）止，前后60多年。此后的东魏、北齐、隋及初唐，平城改为云中郡恒安镇治。\n\n\n\n";
    var wz2 = '据金皇统七年（1147年）曹衍撰《大金西京武州山重修大石窟寺碑记》载："贞观十五年（641年），守臣重建"；唐慧祥撰《古清凉传》卷上（古今胜迹三）记载，当时有一位俨禅师"每在恒安修理孝文石窟故像……以咸亨四年（673年）终于石室"。初唐以后，平城呈现萧条景象，云冈石窟的建设因受多方面因素的影响未有大项工程。\n\n\n\n';
    var wz3 = '辽兴宗、道宗时期，辽皇室曾对武州山石窟寺进行过延续十年之久的大规模修整。修建了石窟前接木构窟檐的通乐、灵岩、鲸崇、镇国、护国、天宫、崇福、童子、华严、兜率十座大寺，并对一千余尊佛像进行了整修。辽保大二年（1122年）金兵攻占大同，"寺遭焚劫，灵岩栋宇，扫地无遗"（《大金西京重修华严寺碑》）。金皇统三年至六年（1143-1146年），住持法师禀慧重修"灵岩大阁"（今第三窟外的阁楼），"自是，山门气象，翕然复完矣。"（《金碑》）。\n\n\n\n';
    var wz4 = '武州山石窟寺庙院尚存。\n\n\n\n';
    var wz5 = '大同云冈再度荒废。云冈之称始于明嘉靖年间，明末崇祯十七年（1644年）李自成起义军路经大同，留部将张天琳驻守后清军入关攻占大同，云冈寺院再遭兵燹，沦为灰烬。\n\n\n\n';
    var wz6 = '清顺治八年（1651年）云冈寺院得以重修。现存第5、6窟的木构窟檐和寺院即为此时重建。1696年，康熙皇帝于冬日回銮巡幸云冈寺并御书匾额"庄严法相"。清乾隆年间云冈石窟亦曾有修葺。\n\n\n\n';
    var wz7 = '1949年中华人民共和国成立，云冈石窟的主要洞窟和窟前木结构建筑（第5、6、7窟）均保存完好。1952年设置专门保护机构，石窟文物得以妥善保护，并对公众开放。\n\n\n\n';
    this.setData({
        wz1:wz1,
        wz2:wz2,
        wz3:wz3,
        wz4:wz4,
        wz5:wz5,
        wz6:wz6,
        wz7:wz7,
    })
},
  // 文字转语音
  start1: function (e) {
    var that = this;
    var content1 = this.data.wz1;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content1,
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

  start2: function (e) {
    var that = this;
    var content2 = this.data.wz2;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content2,
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

  start3: function (e) {
    var that = this;
    var content3 = this.data.wz3;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content3,
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

  start4: function (e) {
    var that = this;
    var content4 = this.data.wz4;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content4,
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

  start5: function (e) {
    var that = this;
    var content5 = this.data.wz5;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content5,
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
  start6: function (e) {
    var that = this;
    var content6 = this.data.wz6;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content6,
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

  start7: function (e) {
    var that = this;
    var content7 = this.data.wz7;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content7,
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
