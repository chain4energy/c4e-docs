<!--
παραγγελία: 7
-->

# Ρύθμιση Cosmovisor

## Εγκαταστήστε το cosmovisor

Εκτελέστε το go install για να κατεβάσετε το cosmovisor:

```μπας
εγκαταστήστε το github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
```

Δημιουργήστε δομή dir για το cosmovisor:

```μπας
εξαγωγή DAEMON_NAME=c4ed
εξαγωγή DAEMON_HOME=$HOME/.c4e-chain/
ηχώ $DAEMON_NAME
mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
mkdir -p $DAEMON_HOME/cosmovisor/αναβαθμίσεις
```

Αντιγράψτε το δυαδικό c4e στο cosmovisor genesis bin:

```μπας
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/genesis/bin
Έκδοση $DAEMON_HOME/cosmovisor/genesis/bin/c4ed
```


Ρύθμιση συστήματος:

```μπας
sudo tee /etc/systemd/system/cosmovisor.service> /dev/null <<EOF
[Μονάδα]
Περιγραφή=cosmovisor
After=network-online.target

[Υπηρεσία]
Χρήστης=$USER
ExecStart=/home/$USER/go/bin/cosmovisor start
Επανεκκίνηση=πάντα
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=c4ed"
Environment="DAEMON_HOME=/home/$USER/.c4e-chain"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
[Εγκαθιστώ]
WantedBy=multi-user.target

ΕΟΦ
```

Εκτελέστε έναν κόμβο:
```μπας
sudo systemctl ενεργοποιεί το cosmovisor
sudo systemctl start cosmovisor
```

Ελέγξετε την κατάσταση
```μπας
sudo systemctl status cosmovisor
```

Καταγραφές από το cosmovisor
```μπας
sudo journalctl -f -u cosmovisor
```



## Επόμενο {απόκρυψη}

Μάθετε πώς να [run validator](validator-setup.md) {hide}
