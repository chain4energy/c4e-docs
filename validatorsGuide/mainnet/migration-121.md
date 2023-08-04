<!--
order: 13
-->

# Migration 1.2.1

Πριν από τη μετανάστευση προετοιμάστε το ύψος ακινητοποίησης
```bash
   sudo systemctl stop cosmovisor
   #Setup proper height
   sed -i 's/halt-height = 0/halt-height = 3767300/g' ~/.c4e-chain/config/app.toml
   sudo systemctl start cosmovisor
   journalctl -u cosmovisor -f
```



Προετοιμάστε το δυαδικό αρχείο για εναλλαγή
```bash
git clone --depth 1 --branch  v1.2.1  https://github.com/chain4energy/c4e-chain.git
cd c4e-chain
make install
```

Ελέγξτε την έκδοση
```bash
c4ed version
```

Θα πρέπει να δείτε τα εξής:
```bash
1.2.1
```


### Μετά το σταμάτημα μπλοκ πέρασμα

Σταματήστε το cosmovisor και ετοιμάστε αντίγραφο ασφαλείας
```bash
sudo systemctl stop cosmovisor

#prepare backup
cp -r ~/.c4e-chain/data ~/.c4e-chain/data-backup-$(date +%Y-%m-%d_%H:%M)
```

Εναλλάξτε το δυαδικό και το ρυθμιστικό ύψος στο 0
```bash
cp ~/go/bin/c4ed ~/.c4e-chain/cosmovisor/current/bin
~/.c4e-chain/cosmovisor/current/bin/c4ed version

## should match 1.2.1

sed -i 's/halt-height = 3767300/halt-height = 0/g' ~/.c4e-chain/config/app.toml
sudo systemctl start cosmovisor
```

Ελέγξτε τα αρχεία καταγραφής του cosmovisor
```bash
journalctl -u cosmovisor -f
```
