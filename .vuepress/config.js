module.exports = {
   Θέμα: «Κόσμος»,
   τίτλος: 'C4E Documentation',
   τοπικές ρυθμίσεις: {
     '/': {
       γλώσσα: "en-US"
     },
   },
   βάση: διεργασία.env.VUEPRESS_BASE || '/',
   themeConfig: {
     repo: 'cosmos/ethermint',
     docsRepo: 'cosmos/ethermint',
     docsBranch: 'ανάπτυξη',
     docsDir: 'έγγραφα',
     edit Links: true,
     έθιμο: αληθινό,
     λογότυπο: {
       src: '/logo.svg',
     },
     αλγολια: {
       id: 'BH4D9OD16A',
       κλειδί: 'c5da4dd3636828292e3c908a0db39688',
       ευρετήριο: 'ethermint'
     },
     επάνω μπάρα: {
       πανό: αληθινό
     },
     πλαϊνή γραμμή: {
       αυτόματη: ψευδής,
       πλοήγηση: [
           {
             τίτλος: 'Οδηγός χρήστη',
             παιδιά: [
               {
                 τίτλος: 'Εισαγωγή',
                 κατάλογος: true,
                 διαδρομή: '/usersGuide/introduction',
               },
               {
                 τίτλος: 'Βασικά στοιχεία του πορτοφολιού',
                 κατάλογος: ψευδής,
                 διαδρομή: '/usersGuide/walletBasics',
               },
               {
                 τίτλος: 'Εγγραφή',
                 κατάλογος: true,
                 διαδρομή: '/usersGuide/registration',
               },
               {
                 τίτλος: 'Εξουσιοδότηση',
                 κατάλογος: ψευδής,
                 διαδρομή: '/usersGuide/auth',
               },
               {
                 τίτλος: 'Validators',
                 κατάλογος: true,
                 διαδρομή: '/usersGuide/validators',
               },
               {
                 τίτλος: «Διακυβέρνηση»,
                 κατάλογος: ψευδής,
                 διαδρομή: '/usersGuide/governance',
               },

             ]
           },
         {
           τίτλος: 'Οδηγός επικυρωτών',
           παιδιά: [
             {
               τίτλος: «στρατηγικό εφεδρικό πρόγραμμα αντιπροσωπείας»,
               κατάλογος: true,
               διαδρομή: '/validatorsGuide/strategReserveDelegationProgram',
             },
             {
               τίτλος: 'Start testnet',
               κατάλογος: true,
               διαδρομή: '/validatorsGuide/Starttestnet',
             },
             {
               τίτλος: 'Genesis Fields',
               κατάλογος: true,
               διαδρομή: '/validatorsGuide/genesisFields',
             },
             {
               τίτλος: 'Έναρξη mainnet',
               κατάλογος: true,
               διαδρομή: '/validatorsGuide/mainnet',
             },
             {
               τίτλος: 'Ενότητες',
               κατάλογος: true,
               διαδρομή: '/validatorsGuide/modules',
             },
           ]
         },
         {
           τίτλος: 'Τα προϊόντα μας',
           παιδιά: [
             {
               τίτλος: 'Σύστημα χρέωσης',
               διαδρομή: 'https://platformadlaenergii.pl'
             },
             {
               τίτλος: 'Πορτοφόλι',
               διαδρομή: 'https://wallet.c4e.io'
             },
             {
               τίτλος: 'εξερευνητής',
               διαδρομή: 'https://explorer.c4e.io'
             }
           ]
         },
       ]
     },
     υδρορροή: {
       τίτλος: 'Βοήθεια & Υποστήριξη',
       κουβέντα: {
         τίτλος: 'Συζήτηση προγραμματιστή',
         text: 'Συζήτηση με ομάδες C4E στο τηλεγράφημα.',
         url: 'https://t.me/+60rmPWzlo3c2YWY8',
         bg: 'γραμμική κλίση(103,75 μοίρες, #1B1E36 0%, #22253F 100%)',
       },
       τηλεγράφημα: {
         τίτλος: 'Telegram Chat',
         text: 'Συζήτηση με ομάδες C4E στο τηλεγράφημα.',
         url: 'https://t.me/Chain4Energy_Official',
         bg: 'γραμμική κλίση(103,75 μοίρες, #1B1E36 0%, #22253F 100%)',
         λογότυπο: '/logo.svg',
       },
       φόρουμ: {
         τίτλος: 'Cosmos Developer Forum',
         text: 'Φόρουμ προγραμματιστών Cosmos για να μάθετε περισσότερα.',
         url: 'https://forum.cosmos.network/',
         bg: 'γραμμική κλίση (221,79 μοίρες, #3D6B99 -1,08%, #336699 95,88%)',
         λογότυπο: 'ethereum-white'
       },
       github: {
         τίτλος: 'Βρέθηκε ένα πρόβλημα;',
         text: 'Βοηθήστε μας να βελτιώσουμε αυτήν τη σελίδα προτείνοντας αλλαγές στο GitHub.',
         bg: '#F8F9FC'
       }
     },
     υποσέλιδο: {
       λογότυπο: '/logo.svg',
       Σύνδεσμος κειμένου: {
         url: 'https://chain4.energy/'
       },
       Υπηρεσίες: [{
           υπηρεσία: 'github',
           url: 'https://github.com/chain4energy'
         },
         {
           υπηρεσία: «twitter»,
           url: "https://twitter.com/chain4energy"
         },
         {
           υπηρεσία: 'linkedin',
           url: 'https://www.linkedin.com/company/chain4energy/'
         },
       ],
       smallprint: "Αυτός ο ιστότοπος διατηρείται από την ομάδα C4E",
       συνδέσεις: [{
           τίτλος: 'Τεκμηρίωση',
           παιδιά: [{
               τίτλος: 'Cosmos SDK Docs',
               url: "https://docs.cosmos.network"
             },
             {
               τίτλος: 'Tendermint Core Docs',
               url: "https://docs.tendermint.com"
             }
           ]
         },
         {
           τίτλος: 'Κοινότητα',
           παιδιά: [{
               τίτλος: 'Cosmos Community',
               url: 'https://discord.gg/W8trcGV'
             }
           ]
         },
         {
           τίτλος: 'Συμβολή',
           παιδιά: [{
               τίτλος: «Συμβολή στα έγγραφα»,url: 'https://github.com/chain4energy/c4e-docs'
             },

             {
               τίτλος: 'Πηγαίος κώδικας στο GitHub',
               url: 'https://github.com/chain4energy/c4e-chain'
             }
           ]
         }
       ]
     }
   },
};
