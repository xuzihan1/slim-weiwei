// 配置文件
module.exports = {
    // 基础定时发送功能配置项（必填项）
    NAME: '兔子姐姐', //女朋友备注姓名
    NICKNAME: '兔子姐姐', //女朋友昵称
    MEMORIAL_DAY: '2018/12/13', //你和女朋友的纪念日
    CITY: 'henan', //女朋友所在城市
    LOCATION: "puyang", //女朋友所在区（可以访问墨迹天气网站后，查询区的英文拼写）
    SENDDATE: '0 06 8 * * *', //定时发送时间 每天8点06分0秒发送，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/', ////ONE的web版网站
    MOJI_HOST: 'https://tianqi.moji.com/weather/china/', //中国墨迹天气url

    //高级功能配置项（非必填项）
    AUTOREPLY: true, //自动聊天功能 默认关闭
    AUTOREPLYPERSON: '兔子姐姐', //指定好友开启机器人聊天功能   指定好友的昵称
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', //天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    APIKEY: 'e4616e8b09336ef66944d8c27f64923e', //天行机器人apikey，这里奉献上我自己的key，还是建议大家自己申请一下
}