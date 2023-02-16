module.exports = {
  theme: 'cosmos',
  title: 'C4E Documentation',
  locales: {
    '/': {
      lang: 'en-US'
    },
  },
  base: process.env.VUEPRESS_BASE || '/',
  themeConfig: {
    repo: 'cosmos/ethermint',
    docsRepo: 'cosmos/ethermint',
    docsBranch: 'development',
    docsDir: 'docs',
    editLinks: true,
    custom: true,
    logo: {
      src: '/logo.svg',
    },
    algolia: {
      id: 'BH4D9OD16A',
      key: 'c5da4dd3636828292e3c908a0db39688',
      index: 'ethermint'
    },
    topbar: {
      banner: true
    },
    sidebar: {
      auto: false,
      nav: [
          {
            title: 'User guide',
            children: [
              {
                title: 'Introduction',
                directory: true,
                path: '/usersGuide/introduction',
              },
              {
                title: 'Wallet Basics',
                directory: false,
                path: '/usersGuide/walletBasics',
              },
              {
                title: 'Registration',
                directory: true,
                path: '/usersGuide/registration',
              },
              {
                title: 'Authorisation',
                directory: false,
                path: '/usersGuide/auth',
              },
              {
                title: 'Validators',
                directory: true,
                path: '/usersGuide/validators',
              },
              {
                title: 'Governance',
                directory: false,
                path: '/usersGuide/governance',
              },

            ]
          },
        {
          title: 'Validators Guide',
          children: [
            {
              title: 'Strategic reserve delegation program',
              directory: false,
              path: '/validatorsGuide/strategReserveDelegationProgram',
            },
            {
              title: 'Start testnet',
              directory: true,
              path: '/validatorsGuide/Starttestnet',
            },
            {
              title: 'Genesis Fields',
              directory: true,
              path: '/validatorsGuide/genesisFields',
            },
            {
              title: 'Start mainnet',
              directory: true,
              path: '/validatorsGuide/mainnet',
            },
            {
              title: 'Modules',
              directory: true,
              path: '/validatorsGuide/modules',
            },
          ]
        },
        {
          title: 'Our products',
          children: [
            {
              title: 'Billing system',
              path: 'https://platformadlaenergii.pl'
            },
            {
              title: 'Wallet',
              path: 'https://wallet.c4e.io'
            },
            {
              title: 'explorer',
              path: 'https://explorer.c4e.io'
            }
          ]
        },
      ]
    },
    gutter: {
      title: 'Help & Support',
      chat: {
        title: 'Developer Chat',
        text: 'Chat with C4E teams on telegram.',
        url: 'https://t.me/+60rmPWzlo3c2YWY8',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)',
      },
      telegram: {
        title: 'Telegram Chat',
        text: 'Chat with C4E teams on telegram.',
        url: 'https://t.me/Chain4Energy_Official',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)',
        logo: '/logo.svg',
      },
      forum: {
        title: 'Cosmos Developer Forum',
        text: 'Cosmos Developer Forum to learn more.',
        url: 'https://forum.cosmos.network/',
        bg: 'linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)',
        logo: 'ethereum-white'
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.',
        bg: '#F8F9FC'
      }
    },
    footer: {
      logo: '/logo.svg',
      textLink: {
        url: 'https://chain4.energy/'
      },
      services: [{
          service: 'github',
          url: 'https://github.com/chain4energy'
        },
        {
          service: 'twitter',
          url: 'https://twitter.com/chain4energy'
        },
        {
          service: 'linkedin',
          url: 'https://www.linkedin.com/company/chain4energy/'
        },
      ],
      smallprint: 'This website is maintained by C4E team',
      links: [{
          title: 'Documentation',
          children: [{
              title: 'Cosmos SDK Docs',
              url: 'https://docs.cosmos.network'
            },
            {
              title: 'Tendermint Core Docs',
              url: 'https://docs.tendermint.com'
            }
          ]
        },
        {
          title: 'Community',
          children: [{
              title: 'Cosmos Community',
              url: 'https://discord.gg/W8trcGV'
            }
          ]
        },
        {
          title: 'Contributing',
          children: [{
              title: 'Contributing to the docs',
              url: 'https://github.com/chain4energy/c4e-docs'
            },

            {
              title: 'Source code on GitHub',
              url: 'https://github.com/chain4energy/c4e-chain'
            }
          ]
        }
      ]
    }
  },
};
