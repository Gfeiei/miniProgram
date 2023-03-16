//index.js
//获取应用实例
const app = getApp()
var map= [
  
  {
    "fId":"1",
    "name": "重点石窟",
    "scale": 15.3,
    "latitude": "40.111124",
    "longitude": "113.134108",
    "iconPath":"/img/xm.png",
    "data": [
      {
        "name": "第一窟（石鼓寒泉）",
        id:0,
        "latitude": "40.110998759",  
        "longitude": "113.1370805",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第一窟（石鼓寒泉）",
          bgColor:"#caf0f8",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        "img": [
          "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/1ku1.jpg",
          "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/1ku2.jpg"
        ],
       
        "description": "第一、二窟为一组塔庙双窟，窟外两侧各残存一座单层方塔。第一窟外壁明窗东侧题刻清代朱廷翰《游云冈石佛寺诗》。窟内平面呈长方形，平顶，中央方塔上下两层，仿木构屋顶塔檐。塔顶处蛟龙盘绕，须弥山逶迤。北壁主像为交脚弥勒菩萨。东壁下层浮雕“睒子本生”故事。据考证，第一、二窟辽代以前建为护国寺，为云冈十寺之一。明清号曰“石鼓寒泉”，属云中八景之一。"
      },
      {
        "name": "第二窟（寒泉洞）",
        id: 1,
        "latitude": "40.111049",
        "longitude": "113.136889",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第二窟（寒泉洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/2ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/2ku1.jpg"
          ],
         
          "description": "窟外壁明窗上方及西侧题刻“山水有清音”、“云深处”。窟内三级方塔居中，塔面上刻出瓦筒、檐椽、斗拱等仿木建筑构件，上层四角镂刻八角柱。窟内四壁分层分段布局，最上层雕刻天宫伎乐列龛，下面依次为锯齿纹垂幔带、禅定坐佛带、大型列龛、长卷式浮雕故事，最下层为供养人列像。北壁主像为释迦坐佛，风化严重。东壁下层浮雕太子“箭射铁鼓”佛传故事。该窟地下有泉水涌出，旧名“寒泉洞”。"
        },
      {
        "name": "第三窟（灵岩寺洞）",
        id: 2,
        "latitude": "40.111423",  //第三窟的经纬度
        "longitude": "113.134563",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第三窟（灵岩寺洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/3ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/3ku2.jpg"
          ],
          
          "description": "云冈最大的洞窟，原设计为大型塔庙窟，但终北魏一代未能完成。窟外依崖原建有木构大阁，今仅存上方一排12个梁孔，说明当年的佛阁为面阔十一开间巨制。上层台面两端各一座三级方塔，两塔间凿二明窗，明窗之间为一庑殿形窟室，主像雕交脚弥勒。窟面东西各开一门，窟内北壁雕阿弥陀佛、观世音和大势至菩萨三尊像，即“西方三圣”。主尊阿弥陀佛高10米，倚坐，面部圆润丰满，神态超然。两侧菩萨头戴宝冠，精美庄严。其雕凿年代，目前有北魏、隋、唐及辽四说，多依据造像艺术风格而推论。窟内留下的分割、揭取岩石的遗迹，是了解古代石窟开凿方法的珍贵实物资料。"
        },
      {
        "name": "第五窟（大佛洞）",
        id: 3,
        "latitude": "40.1114172326",
        "longitude": "113.133336191",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第五窟（大佛洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/5ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/5ku2.jpg"
          ],
         
          "description": "位于云冈石窟中部，与六窟为一组双窟。窟分前后室，后室北壁主像为三世佛，中央坐像高17米，是云冈石窟最大的佛像。窟的四壁满雕佛龛、佛像。拱门两侧，刻有二佛对坐在菩提树已顶部浮雕飞天，线条优美。两窟窟前有五间四层楼阁，现存建筑为清初顺治八年(公元1651年)重建。第六窟，窟平面近方形，中央是一个连接窟顶的两层方形塔柱，高约15米。塔柱下面叫层大龛，南面雕坐佛像，西面雕倚坐佛像，北面雕释迎多宝对坐像，东面雕交脚弥勒像。塔柱四面大龛两侧和窟东、南、西三壁以及明窗两侧，雕出33幅描写释迦牟尼从诞生到成道的佛传故事浮雕。此窟规模宏伟，雕饰富丽，技法精炼，是云冈石窟中最有代表性的一个。"
        },
        {
          "name": "第六窟（释迦佛洞）",
          id: 4,
          "latitude": "40.111471",
          "longitude": "113.132943",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"第六窟（释迦佛洞）",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"},
            "img": [
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/6ku1.jpg",
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/6ku2.jpg"
            ],
            "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/6.mp4",
            "description": "该窟为中心柱窟，亦名支提窟、塔庙窟，雕饰富丽，被誉为“云冈第一伟观”，是世界雕刻艺术史上的奇迹。窟内中央方形塔柱分上下层，高15米。上层四面各镌一立佛二菩萨，四角镂雕大象承驮九级楼阁式方塔；下层四面开龛坐佛。窟内四壁上层环列立佛十一尊，华盖承悬，气宇轩昂。窟顶格状，格间可见骑乘孔雀、狮子、虎、长尾鸟等动物的多臂多首天神。窟内现存反映释迦一生的佛传故事图30余幅，集中表现了佛主从诞生、成长、婚姻，到出家、弘法等一系列具有标志性纪念意义的场面。这些故事图雕刻，结构合理，手法简朴，为犍陀罗艺术东传的新创造，弥足珍贵。"
          },
        {
          "name": "第七窟（西来第一佛洞）",
          id: 5,
          "latitude": "40.111512",
          "longitude": "113.132659",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"第七窟（西来第一佛洞）",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"},
            "img": [
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/7ku1.jpg",
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/7ku2.jpg"
            ],
            "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/5.mp4",
            "description": "第七、八窟是云冈最早的双窟。窟具前后室，主室平面呈横长方形。窟内造像胡风汉韵，交相杂糅，东西文化在这里发生了最绚烂的撞击与交融。第七窟明窗两壁为比丘树下参禅思惟像。北壁上层大龛正中为交脚弥勒菩萨，两侧为倚坐佛像，下层为释迦、多宝二佛并坐。南壁长方形帷幕龛内，六身高发髻供养天半跪相对，端静秀丽，风姿绰约，素有“云冈六美人”之誉，是西域造像融入东方元素的上乘之作。窟顶摹仿木构建筑中的平棊藻井，24对飞天围绕盛开的莲花飘然曼舞。"
          },
      {
        "name": "第八窟（佛籁洞）",
        id: 6,
        "latitude": "40.111506",
        "longitude": "113.132556",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第八窟（佛籁洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/8ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/8ku2.jpg"
          ],
         
          "description": "窟门西侧雕骑乘孔雀的鸠摩罗天，五头六臂，颜若童子，踡发喜笑，手中或托举日月，或执弓箭，左下手当胸持斑鸠。具有浓郁的异域风情。东侧骑神牛的摩醯首罗天，三头八臂，面型浑圆，两侧小头戴尖顶帽，主臂一手叉腰，一手持谷穗，其余支臂或托日月，或执弓箭，或提如意。多首多臂天神像造型来源于古印度，原为婆罗门教神祇。该组雕像为云冈石窟所独有，反映了早期佛教杂密兼容的特征。"
        },
        {
          "name": "第九窟（阿閦佛洞）",
          id:7,
          "latitude": "40.111507",
          "longitude": "113.132437",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"第九窟（阿閦佛洞）",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"},
            "img": [
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/9ku1.jpg",
              "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/9ku2.jpg"
            ],
            "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/5.mp4",
            "description": "第九～十三窟俗称“五华洞”，因后世施泥彩绘而异常绚丽。由于营造于北魏民族变革、文化更新的时代，而汉风转浓，具有鲜明的中国化、民族化特色。第九、十窟为一组双窟，前后室结构，汉式殿堂布局。窟门列楹柱，面各三间。柱雕千佛，承以狮、象，蔚为壮观。第九窟窟门为仿中国传统庑殿式建筑，两侧对称布龛，分层雕刻，中西合璧，具有浓重的装饰意味。窟内四壁分层布龛，造像题材多出自《法华经》。窟顶格状，格内雕团莲及飞天，八夜叉体魄健硕，力举万钧，单手承托横枋。后室北壁主像雕释迦，东西两壁各一胁侍菩萨。"
          },
          {
            "name": "第十二窟（离垢地菩萨洞）",
            id: 8,
            "latitude": "40.112920",
            "longitude": "113.134913",
            "iconPath": "/img/ico/ku.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"第十二窟（离垢地菩萨洞）",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"ALWAYS"},
              "img": [
                "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/12ku1.jpg",
                "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/12ku2.jpg"
              ],
              "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/5.mp4",
              "description": "俗称“音乐窟”。 前后室窟，前室外壁上方凿窟檐，窟口列楹柱。前室北壁最上层天宫伎乐十四身，分别演奏吹指、齐鼓、排箫、琵琶、横笛、琴、五弦、筚篥、箜篌、腰鼓、义嘴笛、法螺等乐器。门楣上一组舞伎群，动作连贯，气韵奔放，是人间舞姿的艺术再现。窟顶逆发形伎乐天，体格壮硕，具有北方少数民族性格特点。该窟内乐器雕刻的形制、演奏方式以及乐队的组合形式，集中体现了北魏宫廷乐队风貌和社会音乐制度，是研究中国古代音乐史的珍贵资料。"
            },
    
      {
        "name": "第十三窟（文殊菩萨洞）",
        id: 9,
        "latitude": "40.111450",
        "longitude": "113.131837",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第十三窟（文殊菩萨洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/13ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/13ku2.jpg"
          ],
          
          "description": "穹窿窟顶，主像为交脚弥勒菩萨，高13米，头戴宝冠，颈部戴悬铃项圈及璎珞，胸佩蛇饰，双首啣珠。右手臂肘下，一力士四臂奋力托举，势若拔山。该像经后代包泥彩绘，原雕仅见双足踏莲。东壁龛像，殿堂飞阁，流苏帷帐，神龙跃动，尽显汉风。南壁明窗与窟门之间屋形大龛内，七立佛造像气韵高雅。"
        },
      {
        "name": "第十五窟（万佛洞）",
        id: 10,
        "latitude": "40.111562",
        "longitude": "113.131221",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第十五窟（万佛洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/15ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/15ku2.jpg"
          ],
         
          "description": "方形单窟室，以表现千佛题材为主，旧称“千佛洞”。窟内现存造像逾万，故又称“万佛洞”。这些象征释迦分身的十方化佛，排列有序，构图严谨。西壁盝形帷幕龛基博山炉两侧，雕刻鱼鸟水藻，呈现出沙鸥翔集、鱼跃于渊的自然景致。下方龛额伎乐飞天，天衣灵动，缥缈若仙，飞翔的态势与上方波动的水草，韵律谐合。"
        },
   
      {
        "name": "第十六窟（立佛洞）",
        id:11,
        "latitude": "40.111466464",
        "longitude": "113.130879287",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第十六窟（立佛洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/16ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/16ku2.jpg"
  
          ],
          "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/5.mp4",
          "description": "第十六～二十窟是云冈最早开凿的一组洞窟，因系著名高僧昙曜主持营建，故称“昙曜五窟”。窟制相同，平面呈马蹄形，穹窿顶，窟内造像以三世佛为主，主像雕饰奇伟，冠于一世，分别象征着北魏的五位皇帝。第十六、十七窟是一组。第十六窟主像为释迦立佛，高13. 5米，波纹状发髻，清秀俊逸。佛像身穿褒衣博带式袈裟，胸前结带下垂，属北魏太和年间推行汉化时的服制。"
        },
      {
        "name": "第十九窟（宝生佛洞）",
        id: 12,
        "latitude": "40.111587",
        "longitude": "113.130191",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第十九窟（宝生佛洞）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/19ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/19ku2.jpg"
          ],
          "video":"cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/video/6.mp4",
          "description": "主佛像结跏趺坐，高16.8米，是云冈石窟中第二大佛。佛像耳轮齐肩，下颌崩毁。举右手，肘下有一小柱支撑。衣纹简洁明快，轻薄贴体，袈裟边饰折带纹。南壁罗睺罗因缘是云冈最早的佛教故事图像。窟外东西各开一耳洞，内一倚坐佛像。这种分窟安置三世佛的布局设计，既有变化，又显庄严，是北朝石窟形制的新创举。"
        },
      {
        "name": "第20窟（露天大佛）",
        id: 13,
        "latitude": "40.111671597",
        "longitude": "113.12993515",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"第20窟（露天大佛）",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/20ku1.jpg",
            "cloud://mana-3g7peqtjfc5bce0d.6d61-mana-3g7peqtjfc5bce0d-1309196313/banners/20ku2.png"
          ],
          "description": "云冈石窟第20窟是云冈最著名的露天大佛，是依照北魏开国皇帝道武帝的形象雕刻的。正因成了露天雕像，所以虽是坐姿，却分外高大。大佛全身比例适称，造型手法简练概括，他宽阔的身躯给人以稳健之感，他所具有的佛的“三十二相、八十种随形好”的精神风貌，为这一时期佛像雕刻的杰出代表。他不仅是云冈石刻中的杰作，即在全国来说，也是佛像艺术中的精品。"
        }
    ]
  },
  {
    "fId":"2",
    "name": "售票入口",
    "scale": 15.1,
    "latitude": 40.109804,
    "longitude": 113.144916,
   // "iconPath":"/img/ico/景点.png",
    "data": [
      {
        "name": "票务中心",
        id: 14,
        "latitude": "40.109804",
        "longitude": "113.144916",
        "iconPath": "/img/ico/pw.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"票务中心",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
         
        },
      {
        "name": "东门",
        id: 15,
        "latitude": "40.109531",
        "longitude": "113.144288",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"东门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
      {
        "name": "东南门",
        id: 16,
        "latitude": "40.108517",
        "longitude": "113.145699",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"东南门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
     {
        "name": "云冈阙门",
        id: 17,
        "latitude": "40.108378",
        "longitude": "113.145706",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云冈阙门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
     {
        "name": "停车场",
        id: 2,
        "latitude": "40.111027",
        "longitude": "113.145111",
        "iconPath": "/img/ico/p.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
     {
        "name": "出口",
        id: 19,
        "latitude": "40.108599",
        "longitude": "113.141621",
        "iconPath": "/img/ico/kc.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"出口",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
    ]
  },
  {
    "fId":"3",
    "scale": 15.2,
    "name": "云冈文化",
    "latitude": "40.108645",
    "longitude": "113.142515",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "云冈院史馆",
        id: 20,
        "latitude": "40.108645",
        "longitude": "113.142515",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云冈院史馆",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
      {
        "name": "黄土地记忆",
        id: 21,
        "latitude": "40.108365",
        "longitude": "113.143304",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"黄土地记忆",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
    
      {
        "name": "帝后礼佛图",
        id: 22,
        "latitude": "40.109153",
        "longitude": "113.142072",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"帝后礼佛图",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
    ]
  },
  {
    "fId":"4",
    "scale": 15.3,
    "name": "其他观光",
    "latitude":" 40.112963",
    "longitude": "113.137745",
    //"iconPath":"/img/ico/xm.png",
    "data": [
      {
        "name": "文物保护中心",
        id: 23,
        "latitude": "40.114518",
        "longitude": "113.144894",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"文物保护中心",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
      {
        "name": "石兵美术馆",
        id: 24,
         "latitude": "40.110676",
        "longitude": "113.138929",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"石兵美术馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
      {
        "name": "石破天惊",
        id: 22,
        "latitude": "40.1084779",
        "longitude": "113.1328512",
        "iconPath": "/img/ico/ku.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"石破天惊",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"}
        },
        {
          "name": "灵岩寺",
          id: 25,
          "latitude": "40.109268",
          "longitude": "113.139943",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"灵岩寺",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"}
          },
        {
          "name": "千佛殿",
          id: 26,
           "latitude": "40.109267",
          "longitude": "113.138941",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"千佛殿",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"}
          },
        {
          "name": "大雄宝殿",
          id: 27,
          "latitude": "40.109352",
          "longitude": "113.138295",
          "iconPath": "/img/ico/ku.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"大雄宝殿",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"}
          },
          {
            "name": "云冈写经苑",
            id: 28,
            "latitude": "40.110388",
            "longitude": "113.137613",
            "iconPath": "/img/ico/ku.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"云冈写经苑",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"ALWAYS"}
            },
          {
            "name": "周恩来纪念室",
            id: 29,
             "latitude": "40.110899",
            "longitude": "113.133492",
            "iconPath": "/img/ico/ku.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"周恩来纪念室",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"ALWAYS"}
            },
          {
            "name": "百家姓氏苑",
            id: 30,
            "latitude": "40.110257",
            "longitude": "113.130452",
            "iconPath": "/img/ico/ku.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"百家姓氏苑",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"ALWAYS"}
            },
    ]
  },
  {
    "fId":"5",
    "name": "景点服务",
    "scale": 15.3,
    "latitude": "40.112963",
    "longitude": "113.137745",
    "iconPath":"/img/ico/xm.png",
    "data": [
      {
        "name": "佛荫超市",
        id: 31,
        "latitude": "40.109938",
        "longitude": "113.144908",
        "iconPath": "/img/ico/gw.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"佛荫超市",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        },
      {
        "name": "洗手间",
        id: 32,
        "latitude": "40.109794",
        "longitude": "113.14468",
        "iconPath": "/img/ico/cs.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"洗手间",
         bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        },
      {
        "name": "食货街",
        id: 33,
        "latitude": "40.108568",
        "longitude": "113.141972",
        "iconPath": "/img/ico/f.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"食货街",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        },
      {
        "name": "圣水自动贩卖机",
        id: 34,
        "latitude": "40.111187",
        "longitude": "113.134414",
        "iconPath": "/img/ico/gw.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"圣水自动贩卖机",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},

        },
      {
        "name": "洗手间",
        id: 35,
        "latitude": "40.111006",
        "longitude": "113.133717",
        "iconPath": "/img/ico/cs.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"洗手间",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        },
        {
          "name": "拓跋小屋",
          id: 36,
          "latitude": "40.108836",
          "longitude": "113.131459",
          "iconPath": "/img/ico/gw.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"拓跋小屋",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"ALWAYS"},
          },
          {
            "name": "洗手间",
            id: 37,
            "latitude": "40.110144",
            "longitude": "113.131148",
            "iconPath": "/img/ico/cs.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"洗手间",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"ALWAYS"},
            },
            {
              "name": "云冈书房",
              id: 38,
              "latitude": "40.109142",
              "longitude": "113.129674",
              "iconPath": "/img/ico/gw.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"云冈书房",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"ALWAYS"},
              },
    ]
  },

]


Page({
  data: {
  
    userInfo: {},
    isShowUserName: false,
    latitude: 40.111877,
    longitude: 113.137752,
    scale:15.4,
    buildlData: map,
    isSelectedBuild:0,
    isSelectedBuildType: 0,
    isFuzzylocation: true,
  },

//定位
  dingwei:function(){
    wx.authorize({
      scope: 'scope.userFuzzyLocation',
      success(res) {
          console.log(res)
          if(res.errMsg == 'authorize:ok'){
              wx.getFuzzyLocation({
                  type: 'wgs84',
                  success(res) {
                      console.log(res)  //此时里面有经纬度
                  }
              })
          }
      },
      fail(err) {
          console.log(err)   
      }                    
    })

},

//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },
//标记跳转
  markertap(res) {
    var mark=res.currentTarget.dataset.num;
    var markerId=res.detail.markerId;
    let temp=JSON.stringify(mark[markerId])//作用是把数组转变成可以在网页传递中的参数进行传递
    if (markerId<14) {
      wx.navigateTo({
        url: "/pages/info/info?mar="+temp,
      })
    } 
    if(markerId == 14){
      wx.navigateTo({
        url: "/pages/piao/piao",
      })
    } 
    },
})
