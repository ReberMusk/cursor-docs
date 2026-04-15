import { defineConfig } from 'vitepress'

function sidebarMain() {
  return [
    {
      text: '团队版 - 按量计费',
      items: [
        { text: '套餐介绍', link: '/plans/team-metered' },
        { text: '如何查看用量', link: '/guide/check-usage-metered' },
      ],
    },
    {
      text: '团队版 - 按次计费(已绝版)',
      items: [
        { text: '套餐介绍', link: '/plans/team-request' },
        { text: '如何查看用量', link: '/guide/check-usage' },
        { text: '关闭 Skills / Subagents', link: '/guide/disable-skills' },
        { text: '找不到Opus/没有思考/没有Max？', link: '/guide/model-troubleshooting' },
        { text: '为什么不能开 Max Mode？', link: '/guide/why-no-max-mode' },
        { text: '进度条显示不对怎么办？', link: '/guide/display-bug' },
      ],
    },
    {
      text: '通用指南',
      items: [
        { text: '如何切换账号', link: '/guide/switch-account' },
        { text: 'Taking longer 解决', link: '/guide/taking-longer' },
        { text: 'Model not available', link: '/guide/model-not-available' },
      ],
    },
    {
      text: '常见问题',
      items: [
        { text: '怎么选套餐？', link: '/faq#我怎么选套餐' },
        { text: '团队版和 Pro 的区别', link: '/faq#团队版是什么-和-pro-有什么区别' },
        { text: '是独享账号吗？能代充吗？', link: '/faq#发的是成品账号吗-是独享的吗-可以代充吗' },
        { text: '额度能用多久？', link: '/faq#额度能用多久-能换算多少-token' },
        { text: '质保多久？', link: '/faq#账号质保多久' },
        { text: '能用哪些模型？多设备登录？', link: '/faq#能用哪些模型-可以多设备登录吗' },
      ],
    },
  ]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'Cursor 团队版',
  description: 'Cursor 团队版服务文档',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '套餐介绍',
        items: [
          { text: '按量计费版', link: '/plans/team-metered' },
          { text: '按次计费版', link: '/plans/team-request' },
        ],
      },
      { text: '常见问题', link: '/faq' },
      {
        text: '使用指南',
        items: [
          { text: '查看用量（按量计费）', link: '/guide/check-usage-metered' },
          { text: '查看用量（按次计费）', link: '/guide/check-usage' },
          { text: '模型与模式问题', link: '/guide/model-troubleshooting' },
          { text: '如何切换账号', link: '/guide/switch-account' },
          { text: 'Taking longer 解决', link: '/guide/taking-longer' },
          { text: 'Model not available', link: '/guide/model-not-available' },
        ],
      },
      { text: '公告', link: '/notice/20260415-display-bug' },
    ],

    sidebar: {
      '/plans/': sidebarMain(),
      '/faq': sidebarMain(),
      '/guide/': sidebarMain(),
      '/notice/': [
        {
          text: '公告通知',
          items: [
            { text: '[2026-04-15] 按次计费显示异常', link: '/notice/20260415-display-bug' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    footer: {
      message: 'Cursor 团队版服务文档',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },
})
