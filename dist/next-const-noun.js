(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.constNoun = [
    '西红柿',
    '番茄',
    '菠萝',
    '西瓜',
    '香蕉',
    '柚子',
    '桔子',
    '橙子',
    '苹果',
    '柠檬',
    '梨子',
    '椰子',
    '葡萄',
    '甘蔗',
    '芒果',
    '木瓜',
    '柿子',
    '石榴',
    '槟榔',
    '猕猴桃',
    '蟠桃',
    '山楂',
    '香瓜',
    '甜瓜',
    '地瓜',
    '李子',
    '杨桃',
    '枇杷',
    '柑橘',
    '荔枝',
    '火龙果',
    '南瓜',
    '玉米',
    '生菜',
    '莴苣',
    '大白菜',
    '萝卜',
    '胡萝卜',
    '韭菜',
    '木耳',
    '豌豆',
    '马铃薯',
    '土豆',
    '黄瓜',
    '苦瓜',
    '洋葱',
    '芹菜',
    '蘑菇',
    '菠菜',
    '莲藕',
    '紫菜',
    '茄子',
    '香菜',
    '青椒',
    '四季豆',
    '茴香',
    '金针菇',
    '扁豆',
    '竹笋',
    '绿豆',
    '红豆',
    '黄豆',
    '毛豆',
    '黄花菜',
    '豆芽',
    '丝瓜',
    '大蒜',
    '生姜',
    '大葱',
    '香菇',
    '酱牛肉',
    '酱肘子',
    '小虾米',
    '鸡蛋',
    '鸭蛋',
    '皮蛋',
    '牛腩',
    '罐头',
    '豆腐',
    '火腿肠',
    '脆皮肠',
    '小马驹',
    '斑马',
    '山羊',
    '长颈鹿',
    '大象',
    '鸵鸟',
    '骆驼',
    '猴子',
    '松鼠',
    '蚂蚁',
    '刺猬',
    '企鹅',
    '啄木鸟',
    '小蝌蚪',
    '青蛙',
    '海龟',
    '海豚',
    '熊猫',
    '大熊猫',
    '小熊猫',
    '野马',
    '烈马',
    '奔马',
    '小狗',
    '热带鱼',
    '红金鱼',
    '金鱼',
    '仙人掌',
    '仙人球',
    '松树',
    '柳树',
    '圣诞树',
    '筷子',
    '碗',
    '勺子',
    '凳子',
    '板凳',
    '椅子',
    '电脑桌',
    '沙发',
    '台灯',
    '杯子',
    '保温杯',
    '茶壶',
    '灯泡',
    '日光灯',
    '钱包',
    '钥匙',
    '蜡烛',
    '手电筒',
    '钥匙扣',
    '热水瓶',
    '开水瓶',
    '水桶',
    '水龙头',
    '脸盆',
    '镜子',
    '火柴',
    '打火机',
    '抽屉',
    '剪刀',
    '枕头',
    '毛巾',
    '牙膏',
    '电池',
    '路灯',
    '拖把',
    '马克杯',
    '砖头',
    '鞭炮',
    '硬币',
    '水煮鱼',
    '水煮肉',
    '酸菜鱼',
    '红烧肉',
    '回锅肉',
    '紫菜汤',
    '米饭',
    '稀饭',
    '肉夹馍',
    '灌汤包',
    '小笼包',
    '馒头',
    '花卷',
    '包子',
    '油条',
    '煎饼',
    '煎饼果子',
    '牛肉面',
    '汉堡包',
    '炒饭',
    '炒粉',
    '炒面',
    '烤地瓜',
    '红薯',
    '烤红薯',
    '泡面',
    '鸡蛋面',
    '乌冬面',
    '牛肉面',
    '饺子',
    '凉面',
    '春卷',
    '羊肉串',
    '汤圆',
    '八宝粥',
    '牛排',
    '煎鸡蛋',
    '卤蛋',
    '盒饭',
    '便当',
    '花生',
    '开心果',
    '板栗',
    '核桃',
    '薯片',
    '棒棒糖',
    '吐司',
    '烤土司',
    '面包',
    '烤面包',
    '蛋挞',
    '冰淇淋',
    '冰棍',
    '雪糕',
    '饼干',
    '麦片',
    '爆米花',
    '铅笔',
    '钢笔',
    '日记本',
    '课本',
    '橡皮擦',
    '书包',
    '饭卡',
    '书签',
    '电影票',
    '草稿纸',
    '作业本',
    '草稿本',
    '签字笔',
    '啤酒',
    '红酒',
    '伏特加',
    '烈酒',
    '葡萄酒',
    '香槟',
    '汽水',
    '豆浆',
    '可乐',
    '凉茶',
    '白开水',
    '乌龙茶',
    '红茶',
    '绿茶',
    '咖啡',
    '苦咖啡',
    '茶叶',
    '咖啡豆',
    '卡布奇诺',
    '足球',
    '篮球',
    '排球',
    '羽毛球',
    '乒乓球',
    '显示器',
    '键盘',
    '数据线',
    '充电器',
    '移动电源',
    '硬盘',
    '鼠标',
    '鼠标垫',
    '投影仪',
    '充值卡',
    '火锅',
    '麻辣香锅',
    '铁板烧',
    '葫芦',
    '佛珠',
    '手链',
    '大脸猫',
    '机器人',
    '机器猫',
    '上铺',
    '创口贴',
    '伤痕',
    '伤疤',
    '手术刀',
    '饭盒',
    '楼梯',
    '楼房',
    '电梯',
    '口罩',
    '灭火器',
    '遥控器',
    '闹钟',
    '拐杖',
    '感冒药',
    '消炎药',
    '山寨机',
    '自行车',
    '小摩托',
    '单车',
    '滑板',
    '火车',
    '警车',
    '消防车',
    '围巾',
    '手套',
    '帽子',
    '风衣',
    '沙滩裤',
    '跑步鞋',
    '人字拖',
    '眼镜',
    '墨镜',
    '毛衣',
    '针织衫',
    '黑框眼镜',
    '皮带',
    '领带',
    '西装',
    '领结',
    '冲锋衣',
    '登山鞋',
    '瀑布',
    '树叶',
    '松球',
    '夕阳',
    '太阳',
    '大海',
    '高山',
    '荒野',
    '双杠',
    '单杠',
    '哑铃',
    '跑步机',
    '打火机',
    '香烟',
    '匕首',
    '小刀',
    '弓箭',
    '铁链',
    '打火机',
    '香烟',
    '匕首',
    '小刀',
    '弓箭',
    '铁链',
    '围巾',
    '手套',
    '帽子',
    '风衣',
    '沙滩裤',
    '跑步鞋',
    '人字拖',
    '眼镜',
    '墨镜',
    '毛衣',
    '针织衫',
    '黑框眼镜',
    '皮带',
    '领带',
    '西装',
    '领结',
    '冲锋衣',
    '登山鞋',
    '小马驹',
    '斑马',
    '山羊',
    '长颈鹿',
    '大象',
    '鸵鸟',
    '骆驼',
    '猴子',
    '松鼠',
    '蚂蚁',
    '刺猬',
    '企鹅',
    '啄木鸟',
    '小蝌蚪',
    '青蛙',
    '海龟',
    '海豚',
    '熊猫',
    '大熊猫',
    '小熊猫',
    '野马',
    '烈马',
    '奔马'
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constNoun;
  }
})();
