<!--
order: 11
-->

# Μετανάστευση 1.1.0
### Για διανομές Linux χρησιμοποιώντας προκατασκευή δυαδικού

Κατεβάστε το αρχείο tar.gz:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_amd64.tar.gz
```

Επαληθεύστε το άθροισμα ελέγχου:

```bash
sha256sum c4ed_v1.1.0_linux_amd64.tar.gz
```

Θα πρέπει να δείτε τα εξής:

```bash
e18eb2b09aeac537434cbcaa8d9ea272cab7b94bbec5c2458d499a0f735a0e39  c4ed_v1.1.0_linux_amd64.tar.gz
```

Αποσυσκευάστε το αρχείο tar.gz:

```bash
tar -xvf c4ed_v1.1.0_linux_amd64.tar.gz
```

Μετακινήστε το δυαδικό αρχείο στον τοπικό σας κατάλογο bin:

```bash
mkdir -p ~/go/bin
sudo mv c4ed ~/go/bin
```

Ελέγξτε την έκδοση
```bash
c4ed version
```

Θα πρέπει να δείτε τα εξής:
```bash
1.1.0
```


### Για διανομές Linux με δημιουργία δυαδικού
Clone repository
```bash
git clone --depth 1 --branch  v1.1.0  https://github.com/chain4energy/c4e-chain.git
```
μεταβείτε στον κατάλογο αποθετηρίου
```bash
cd c4e-chain/
```

Δημιουργία δυαδικού
```bash
make install
```

Ελέγξτε την έκδοση
```bash
c4ed version
```

Θα πρέπει να δείτε τα εξής:
```bash
1.1.0
```


### Ρύθμιση cosmovisor

Δημιουργία καταλόγου αναβάθμισης του cosmovisor
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin
```

Βάλτε το δυαδικό στον κατάλληλο κατάλογο
```bash
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin
```

Απλά για να είστε σίγουροι, ελέγξτε την έκδοση
```bash
$DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin/c4ed version
```
