const BRANDING = {
  projectName: "JungleLab",

  superUserName: "junglelab",

  urls: {
    base: "junglelab",
    www: "www.jungle.coinos.io",
    protocol: "https://jungle.coinos.io",
    external: {
      twitter: "https://twitter.com/junglelab_io",
      telegram: "https://t.me/eskyjunglelab",
      blog: "https://junglelab.net/",
      facebook: "https://facebook.com/escabaeskyee",
			instagram: "https://instagram.com/junglelabrare",
			discord: "https://discord.gg/R3JeugAt",
    },
  },

  meta: {
    title: "JungleLab",
    keywords: "Bitcoin Liquid LNFT Video,Music,Art",
    description:
      "Upload, collect, and transact rare digital assets on the Liquid Network",
    image: "https://jungle.coinos.io/splash.png",
    url: "https://jungle.coinos.io/",

    twitter: {
      card: "summary_large_image",
      creator: "@junglelab",
      site: "@jungle.coinos.io",
    },

    artwork: (art) => ({
      title: `JungleLab - ${art.title}`,
      image: `/api/ipfs/${art.filename}`,
      url: `https://jungle.coinos.io/a/${art.slug}`,
    }),
  },

  emails: {
    support: "support@jungle.coinos.io",
  },
};

export default BRANDING;
