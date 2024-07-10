export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "小郑同学",
  /** your name */
  author: "Weixin Zheng",
  /** website description */
  desc: "一条有远大梦想的咸鱼...",
  /** your deployed domain */
  website: "https://zhengweixin.top/",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "email",
      href: "mailto:zhengweixin0101@outlook.com",
    },
    {
      name: "github",
      href: "https://github.com/zhengweixin0101",
    },
    {
      name: "rss",
      href: "/atom.xml",
    }
  ],
  /** your header info */
  header: {
    twitter: "@zhengweixin0101",      //推特卡片用户名
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "友链",
      href: "/link",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "其他", path: "others" },
    { name: "分享", path: "share" },
    { name: "经验", path: "experience" },
    { name: "点评", path: "review" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
       // please change this to your disqus shortname
    //   shortname: "typography-astro",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
     twikoo: {
       envId: "https://twikoo.api.zhengweixin.top/",
     }
  }
}

