<!--
order: 6
-->

# Διαμόρφωση ενός κόμβου


## Προαπαιτούμενες αναγνώσεις

- [Installation](../quickstartart/install-binary.md) {prereq}


Επιλέξτε μια αλυσίδα:
```bash
export CHAINID=perun-1
```

Ξεκινήστε την αλυσίδα και διαγράψτε το αρχειο genesis
```bash
c4ed init <MONIKER> --chain-id $CHAINID
rm -rf ~/.c4e-chain/config/genesis.json
```

Αντιγραψτε το repository με τις αλυσιδες
```bash
git clone https://github.com/chain4energy/c4e-chains.git
cd c4e-chains/$CHAINID
```

Αντιγράψτε το αρχείο genesis από το repo:
```bash
cp genesis.json ~/.c4e-chain/config/
```

Αλλάξτε τους μόνιμους ομότιμους μέσα στο αρχείο «config.toml».

```bash
sed -e "s|persistent_peers = \".*\"|persistent_peers = \"$(cat .data | grep -oP 'Persistent peers\s+\K\S+')\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml
```


Αλλάξτε την τιμή "external_address" για να επικοινωνήσετε με τον κόμβο σας χρησιμοποιώντας τη δημόσια διεύθυνση IP του κόμβου σας:
```bash
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:26656\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml
```

Μάθε πως να [Setup cosmovisor](cosmovisor-setup.md) {hide}
