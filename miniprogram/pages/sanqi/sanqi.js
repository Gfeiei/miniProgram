
//获取应用实例


const app = getApp()

//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');

Page({
  data: {
    src: '', //路径
  },
  onLoad:function(options){
    var wz1 = '即今第16～20窟，亦称为昙曜五窟。根据《魏书·释老志》（卷114）记载：“和平初，师贤卒。昙曜代之，更名沙门统。初，昙曜于复法之明年，自中山被命赴京，值帝出，见于路，御马前衔曜衣，时人以为马识善人，帝后奉以师礼。昙曜白帝，於京城西武州塞，凿山石壁，开窟五所，镌建佛像各一，高者七十尺，次六十尺，雕饰奇伟，冠于一世。”文中记述的开窟五所，就是当时著名的高僧昙曜就选择了钟灵毓秀的武州山，开凿了雄伟壮观的昙曜五窟，揭开了云冈石窟开凿的序幕。\n';
    var wz2 = '第16~20窟即帝王象征的昙曜五窟。平面为马蹄形，穹隆顶，外壁满雕千佛。主要造像为三世佛，佛像高大，面相丰圆，高鼻深目，双肩齐挺，显示出一种劲健、浑厚、质朴的造像作风。其雕刻技艺继承并发展了汉代的优秀传统，吸收并融合了古印度犍陀罗、秣菟罗艺术的精华，创造出具有独特的艺术风格。';
    var wz3 = '这是云冈石窟雕凿的鼎盛阶段，主要有第1、2窟，第5、6窟，第7、8窟，第9、10窟，第11、12、13窟以及未完工的第3窟。这一时期（471-494年），是北魏迁洛以前的孝文时期，是北魏最稳定、最兴盛的时期，云冈石窟是集中了全国的优秀人才，以其国力为保证，进而雕凿出更为繁华精美的云冈石窟大窟大像。到孝文帝迁都前，皇家经营的所有大窟大像均已完成，历时40余年。\n';
    var wz4 = '中期洞窟平面多呈方形或长方形，有的洞窟雕中心塔柱，或具前后室，壁面布局上下重层，左右分段，窟顶多有平棊藻井。造像题材内容多样化，突出了释迦、弥勒佛的地位，流行释迦、多宝二佛并坐像，出现了护法天神、伎乐天、供养人行列以及佛本行、本生、因缘和维摩诘故事等。\n';
    var wz5 = '佛像面相丰圆适中，特别是褒衣博带式的佛像盛行，出现了许多新的题材和造像组合，侧重于护法形象和各种装饰。中期石窟也是积极于改革创新的时期，掀起了佛教石窟艺术中国化的过程。这多种因素的综合，也就产生了所谓富丽堂皇的太和风格，主要特点是汉化趋势发展迅速，石窟艺术中国化在这一时期起步并完成，这个时期即云冈中期石窟，它所呈现的内容繁复、雕饰精美的雕刻艺术特点大异于早期石窟，雕刻造型追求工整华丽，从洞窟形制到雕刻内容和风格均有明显的汉化特征。';
    var wz6 = '北魏迁都洛阳后（494年），云冈石窟大规模的开凿活动虽然停止了，但凿窟造像之风在中下层阶层蔓延起来，亲贵、中下层官吏以及邑人信众充分利用平城旧有的技艺在云冈开凿了大量的中小型洞窟，这种小窟小龛的镌建一直延续到孝明帝正光五年（524年），平城作为北都仍是北魏佛教要地。';
    var wz7 = '这时大窟减少，中、小型窟龛从东往西布满崖面。主要分布在第20窟以西，还包括第4窟、14窟、15窟和11窟以西崖面上的小龛，约有200余座中小型洞窟。洞窟大多以单窟形式出现，不再成组。造像题材多为释迦多宝或上为弥勒，下为释迦。佛像和菩萨面形消瘦、长颈、肩窄且下削，这种造像为北魏晚期推行“汉化”改革，出现的一种清新典雅“秀骨清像”的艺术形象，成为北魏后期佛教造像显著特点。这一特征和风格在龙门石窟北魏窟亦有表现，对中国石窟寺艺术的发展产生了深刻的影响。';
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
