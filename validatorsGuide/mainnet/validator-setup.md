<!--
order: 9
-->

# Ξεκινήστε έναν επικυρωτή

# Να γίνεις επικυρωτής
Αφού ρυθμίσετε σωστά έναν [full node](run_node.md), αν θέλετε μπορείτε να γίνετε κόμβος επικύρωσης και
ξεκινήστε να κερδίζετε επικυρώνοντας τις συναλλαγές αλυσίδας.


## Απαιτήσεις
Εάν θέλετε να γίνετε επικυρωτής C4E, πρέπει:

1. Γίνε πλήρης κόμβος και cosmovisor up
    Εάν δεν είστε, ακολουθήστε τον [οδηγό διαμόρφωσης πλήρους κόμβου](run_node.md) και [Ρύθμιση Cosmovisor](cosmovisor-setup.md)
   
2. Ο κόμβος πρέπει να είναι συγχρονισμένος
```bash
c4ed status | jq .SyncInfo.catching_up
```
Η παραπάνω εντολή θα πρέπει να επιστρέψει
```bash
false
```

   
3. Κατέχετε αρκετά νομίσματα.
    Για να γίνετε επικυρωτής χρειάζεστε τουλάχιστον 2[c4e] διακριτικό για να δημιουργήσετε τον επικυρωτή και για χρέωση συναλλαγής

## 1. Προσθήκη κλειδιού πορτοφολιού
Μέσα στο δοκιμαστικό δίκτυο μπορείτε να χρησιμοποιήσετε το **Ledger**, αλλά μπορείτε επίσης να χρησιμοποιήσετε το λογισμικό πορτοφολιού με το `c4ed`.
Ωστόσο, εάν θέλετε να χρησιμοποιήσετε το **Ledger**, προσθέστε το επίπεδο `--ledger` σε οποιαδήποτε εντολή.

:::προειδοποίηση
Θυμηθείτε να αντιγράψετε τη φράση 12 λέξεων σε ασφαλές μέρος.
Είναι τα μνημονικά σας και αν τα χάσετε, χάνετε όλα τα διακριτικά σας και ολόκληρη την πρόσβαση στον επικυρωτή σας.

Δημιουργήστε το πρώτο πορτοφόλι με την ακόλουθη εντολή
```bash
c4ed keys add <KEY_NAME>
# Enter a password that you can remember
```
Η έξοδος της εντολής θα παρέχει τις 24 λέξεις που είναι οι μνημονικές.

Δημιουργήστε δύο πορτοφόλια, ένα για επικύρωση και δεύτερο για λογαριασμό κατοχύρωσης:
παράδειγμα
      

Εάν χρησιμοποιείτε τη συσκευή **Ledger**, πρέπει πρώτα να τη συνδέσετε στον υπολογιστή σας, να ξεκινήσετε την εφαρμογή commercionetworkd και να εκτελέσετε την εντολή
```bash
c4ed keys add <KEY_NAME> --ledger
# Enter a password that you can remember
```
Σε αυτήν την περίπτωση οι 12 λέξεις δεν παρέχονται επειδή έχουν ήδη διαμορφωθεί στην προετοιμασία **Ledger**

```bash
c4e@c4e-fn1:~$ c4ed keys add validator
Enter keyring passphrase:
Re-enter keyring passphrase:

- name: validator
  type: local
  address: c4e1atqq8lmeptgn2jlx2q8r42p572yhh6lzle7vng
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8D47crCW+YkFGduj6brpuzectp3D61xRIx/qbEGGTif"}'
  mnemonic: ""
c4e@c4e-fn1:~$
c4e@c4e-fn1:~$ c4ed keys add vesting
Enter keyring passphrase:

- name: vesting
  type: local
  address: c4e1e2kq0w7pxpqn9ce5leyfl2h6v2kd7l94ksp04j
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2AUrhH/iLutlZQ5K/jHniqnZSj61N++ytQF798WBn1I"}'
  mnemonic: ""
c4e@c4e-fn1:~$
```

Εάν δεν έχετε κουπόνι, στείλτε email στην ομάδα C4E με διεύθυνση λογαριασμού επικύρωσης στο email: dev@chain4.energy

```bash
email to: dev@chain4.energy
content:
    validator address: c4e1atqq8lmeptgn2jlx2q8r42p572yhh6lzle7vng
```

## Τι είναι το Validator;

Οι [Validators](https://hub.cosmos.network/master/validators/overview.html) είναι υπεύθυνοι για τη δέσμευση νέων μπλοκ στο blockchain μέσω ψηφοφορίας. Το ποντάρισμα ενός επικυρωτή μειώνεται εάν δεν είναι διαθέσιμοι ή υπογράψουν μπλοκ στο ίδιο ύψος. Διαβάστε σχετικά με το [Sentry Node Architecture](https://hub.cosmos.network/master/validators/validator-faq.html#how-can-validators-protect-themselves-from-denial-of-service-attacks) στο προστατέψτε τον κόμβο σας από επιθέσεις DDOS και για να εξασφαλίσετε υψηλή διαθεσιμότητα.

::: κίνδυνος Προειδοποίηση
Εάν θέλετε να γίνετε επικυρωτής για το "mainnet", θα πρέπει να [ασφάλεια έρευνας](https://hub.cosmos.network/master/validators/security.html).
:::


## Δημιουργήστε το πρόγραμμα επικύρωσής σας

Το συναινετικό δημόσιο κλειδί "c4evalconspub" μπορεί να χρησιμοποιηθεί για τη δημιουργία ενός νέου εργαλείου επικύρωσης ποντάροντας διακριτικά. Μπορείτε να βρείτε το pubkey επικύρωσης εκτελώντας:

```bash
c4ed tendermint show-validator
```

Για να δημιουργήσετε τον επικυρωτή σας, απλώς χρησιμοποιήστε την ακόλουθη εντολή:

```bash
c4ed tx staking create-validator \
  --amount=1000000uc4e \
  --pubkey=$(c4ed tendermint show-validator) \
  --moniker=<MONIKER> \
  --chain-id=<CHAIN_ID> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1" \
  --gas="auto" \
  --from=<KEY_NAME>
```

::: υπόδειξη
Κατά τον καθορισμό των παραμέτρων προμήθειας, το «commission-max-change-rate» χρησιμοποιείται για τη μέτρηση της αλλαγής % _point_ έναντι του «commission-rate». Π.χ. 1% έως 2% είναι 100% αύξηση ποσοστού, αλλά μόνο 1 ποσοστιαία μονάδα.
:::

::: υπόδειξη
Η "ελάχιστη ανάθεση από τον εαυτό σας" είναι ένας αυστηρά θετικός ακέραιος αριθμός που αντιπροσωπεύει την ελάχιστη δυνατή ψηφοφορία που εκχωρεί μόνος σας ο επικυρωτής σας. Μια 'ελάχιστη ανάθεση από τον εαυτό σας' 1 σημαίνει ότι ο επικυρωτής σας δεν θα έχει ποτέ αυτο-ανάθεση μικρότερη από '1000000uc4e'
:::

Μπορείτε να επιβεβαιώσετε ότι βρίσκεστε στο σετ επικύρωσης χρησιμοποιώντας έναν εξερευνητή.


### Αντιμετώπιση προβλημάτων

Εάν ελέγξετε τη συναλλαγή «create-validator» στον εξερευνητή και δείτε το ακόλουθο σφάλμα:
```
out of gas in location: WritePerByte; gasWanted: 177140, gasUsed: 177979: out of gas
```

Δοκιμάστε να αντικαταστήσετε:
```
--gas="auto" \
--gas-prices="0.0025uc4e"
```

Με

```
--gas=<value significantly larger than gasUsed value from the error>
```


## Επιβεβαιώστε ότι το Validator σας εκτελείται

Το πρόγραμμα επικύρωσής σας είναι ενεργό εάν η ακόλουθη εντολή επιστρέψει οτιδήποτε:

```bash
c4ed query tendermint-validator-set | grep "$(c4ed tendermint show-validator | jq .key  | tr -d \")"
```

Θα πρέπει τώρα να δείτε το εργαλείο επικύρωσής σας σε έναν από τους εξερευνητές μπλοκ. Ψάχνετε για το `bech32`
κωδικοποιημένη «διεύθυνση» στο αρχείο «~/.c4e-chain/config/priv_validator_key.json».

::: υπόδειξη
Για να είστε στο σετ επικυρωτή, πρέπει να έχετε μεγαλύτερη συνολική ισχύ ψήφου από το 50ο εργαλείο επικύρωσης.
:::

