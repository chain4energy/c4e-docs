module.exports = {
  theme: 'cosmos',
  title: 'Βιβλιογραφία C4E',
  locales: {
    '/': {
      lang: 'el-GR'
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
            title: 'Οδηγός Χρήστη',
            children: [
              {
                title: 'Εισαγωγή',
                directory: true,
                path: '/usersGuide/introduction',
              },
              {
                title: 'Βασικά στοιχεία για το πορτοφόλι',
                directory: false,
                path: '/usersGuide/walletBasics',
              },
              {
                title: 'Εγγραφή',
                directory: true,
                path: '/usersGuide/registration',
              },
              {
                title: 'Εξουσιοδότηση',
                directory: false,
                path: '/usersGuide/auth',
              },
              {
                title: 'Επικυρωτές',
                directory: true,
                path: '/usersGuide/validators',
              },
              {
                title: 'Διακυβέρνηση',
                directory: false,
                path: '/usersGuide/governance',
              },

            ]
          },
        {
          title: 'Οδηγός επικυρωτών',
          children: [
            {
              title: 'Σρατηγικό πρόγραμμα αντιπροσώπευσης εφεδρειών',
              directory: true,
              path: '/validatorsGuide/strategReserveDelegationProgram',
            },
            {
              title: 'Ξεκινήστε το testnet',
              directory: true,
              path: '/validatorsGuide/Starttestnet',
            },
            {
              title: 'Πεδία genesis',
              directory: true,
              path: '/validatorsGuide/genesisFields',
            },
            {
              title: 'Εκκίνηση mainnet',
              directory: true,
              path: '/validatorsGuide/mainnet',
            },
            {
              title: 'Ενότητες',
              directory: true,
              path: '/validatorsGuide/modules',
            },
          ]
        },
        {
          title: 'Τα προϊόντα μας',
          children: [
            {
              title: 'Σύστημα χρέωσης',
              path: 'https://platformadlaenergii.pl'
            },
            {
              title: 'Πορτοφόλι',
              path: 'https://wallet.c4e.io'
            },
            {
              title: 'εξερευνητής',
              path: 'https://explorer.c4e.io'
            }
          ]
        },
      ]
    },
    gutter: {
      title: 'Βοήθεια και υποστήριξη',
      chat: {
        title: 'Συνομιλία προγραμματιστών',
        text: 'Συνομιλήστε με ομάδες C4E στο telegram',
        url: 'https://t.me/+60rmPWzlo3c2YWY8',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)',
      },
      telegram: {
        title: 'Συνομιλία προγραμματιστών',
        text: 'Συνομιλήστε με ομάδες C4E στο telegram',
        url: 'https://t.me/Chain4Energy_Official',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)',
        logo: '/logo.svg',
      },
      forum: {
        title: 'Φόρουμ προγραμματιστών Cosmos',
        text: 'Φόρουμ προγραμματιστών Cosmos για να μάθετε περισσότερα.',
        url: 'https://forum.cosmos.network/',
        bg: 'linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)',
        logo: 'ethereum-white'
      },
      github: {
        title: 'Βρήκατε ένα πρόβλημα;',
        text: 'Βοηθήστε μας να βελτιώσουμε αυτήν τη σελίδα προτείνοντας αλλαγές στο GitHub.',
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
      smallprint: 'Αυτή η ιστοσελίδα διατηρείται από την ομάδα C4E',
      links: [{
          title: 'Βιβλιογραφία ',
          children: [{
              title: 'Cosmos SDK Docs',
              url: 'https://docs.cosmos.network'
            },
            {
              title: 'Βασικά Έγγραφα Tendermint',
              url: 'https://docs.tendermint.com'
            }
          ]
        },
        {
          title: 'Κοινότητα',
          children: [{
              title: 'Κοινότητα Cosmos',
              url: 'https://discord.gg/W8trcGV'
            }
          ]
        },
        {
          title: 'Συμβάλλετε',
          children: [{
              title: 'Συμβάλλετε στην βιβλιογραφία',
              url: 'https://github.com/chain4energy/c4e-docs'
            },

            {
              title: 'Πηγαίος κώδικας στο GitHub',
              url: 'https://github.com/chain4energy/c4e-chain'
            }
          ]
        }
      ]
    }
  },
};
