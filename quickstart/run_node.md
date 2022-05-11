<!--
order: 6
-->

# Run a node


## Pre-requisite Readings

- [Installation](quickstart/install-binary.md) {prereq}


Select a chain:
```bash
export CHAINID=mainnet
```

Init chain and delete generated genesis:
```bash
c4ed init <MONIKER> --chain-id $CHAINID
rm -rf ~/.c4e-chain/config/genesis.json
```

Clone repository with chains
```bash
git clone https://github.com/chain4energy/chains
cd chains/$CHAINID
```

Copy genesis file from repo:
```bash
cp genesis.json ~/.c4e-chain/config/
```

Change the persistent peers inside `config.toml` file

```bash
sed -e "s|persistent_peers = \".*\"|persistent_peers = \"$(cat .data | grep -oP 'Persistent peers\s+\K\S+')\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml
```


Change `external_address` value to contact your node using public ip of your node:
```bash
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:26656\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml
c4ed config node tcp://$PUB_IP:26657
```

Run a node:
```bash
systemctl enable cosmovisor  
systemctl start cosmovisor
```