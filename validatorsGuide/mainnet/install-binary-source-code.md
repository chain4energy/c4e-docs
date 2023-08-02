<!--
order: 4
-->

# Εγκατάσταση δυαδικού από τον πηγαίο κώδικα (επιλογή Α)


Κλωνοποιήστε το αποθετήριο και το ταμείο στη σωστή ετικέτα
```bash
git clone --depth 1 --branch  v1.0.1  https://github.com/chain4energy/c4e-chain.git
```
Μεταβείτε στον κατάλογο και δημιουργήστε το project
```bash
cd c4e-chain/
make install
```

Ελέγξτε τη δυαδική έκδοση πρέπει να είναι ίση
```bash
c4ed version

output: 1.0.1
```
## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}
