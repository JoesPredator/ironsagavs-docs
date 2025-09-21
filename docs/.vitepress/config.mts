import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ironsagavs-docs/',
  title: "アイアンサーガVS",
  description: "アイアンサーガVSに関するドキュメント",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Character', link: '/character' }
    ],

    sidebar: [
      {
        text: 'キャラクター',
        items: [
          { text: '表記について', link: '/character/about-notation' },
          { text: '青龍', link: '/character/qing-long' },
          { text: 'マジンカイザー', link: '/character/mazinkaiser' }
        ]
      },

    ],
  }
})
