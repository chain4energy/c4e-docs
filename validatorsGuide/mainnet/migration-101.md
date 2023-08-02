<!--
order: 10
-->

# Migration 1.0.1
### Για διανομές Linux

Κατεβάστε το αρχείο tar.gz:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.0.1/c4ed_v1.0.1_linux_amd64.tar.gz
```

Επαληθεύστε το άθροισμα ελέγχου:

```bash
sha256sum c4ed_v1.0.1_linux_amd64.tar.gz
```

Θα πρέπει να δείτε τα εξής:

```bash
15fe687b8f5f02dee95173262f6deb08015416f3faa18c7fb6114cd0552a87aa  c4ed_v1.0.1_linux_amd64.tar.gz
```

Αποσυσκευάστε το αρχείο tar.gz:

```bash
tar -xvf c4ed_v1.0.1_linux_amd64.tar.gz
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
1.0.1
```
Σταματήστε την υπηρεσία cosmovisor
```bash
sudo systemctl stop cosmovisor
```

Αντικαταστήστε το δυαδικό cosmovisor
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/genesis/bin
$DAEMON_HOME/cosmovisor/genesis/bin/c4ed version
```

Επανεκκινήστε το cosmovisor
```bash
sudo systemctl restart cosmovisor && journalctl -u cosmovisor -f
```
