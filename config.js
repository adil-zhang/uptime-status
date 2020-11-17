// 配置
window.Config = {

  // 站点名
  SiteName: 'Adil的服务器状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'u1087794-759ff10e0fc0ea8f450c1125',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'SSLstatus',
      url: 'https://ssl.cyfan.top/'
    },
    {
      text: 'Blog',
      url: 'https://adil.com.cn'
    }
  ]
};
