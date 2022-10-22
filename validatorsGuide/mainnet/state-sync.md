<!--
order: 8
-->
# Sync with state-sync

State-sync is a module built into the Cosmos SDK to allow validators to rapidly join the network by syncing your node with a snapshot enabled RPC from a trusted block height.&#x20;

This greatly reduces the time required for a validator or sentry to sync with the network from days to minutes. The limitations of this are that there is not a full transaction history, just the most recent state that the state-sync RPC has stored. An advantage of state-sync is that the database is very small in comparison to a fully synced node, therefore using state-sync to resync your node to the network can help keep running costs lower by minimising storage usage.

By syncing to the network with state-sync, a node can avoid having to go through all the upgrade procedures and can sync with the most recent binary only.

For nodes that are intended to serve data for dapps, explorers or any other RPC requiring full history, state-syncing to the network would not be appropriate.&#x20;

## Mainnet state-sync
Snapshot are operated on rpc1 and rpc2


<mark >
WARNING:  This documentation assumes you have followed all previous  instructions

The state-sync configuration is as follows:

```bash
# snapshot-interval specifies the block interval at which local state sync snapshots are
# taken (0 to disable). Must be a multiple of pruning-keep-every.
snapshot-interval = 1000

# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).
snapshot-keep-recent = 10
```

Set `SNAP_RPC1` and `SNAP_RPC2` variable to the polkachu snapshot RPC

```bash
SNAP_RPC1="https://rpc1.c4e.io:443"
SNAP_RPC2="https://rpc2.c4e.io:443"
```

Fetch the `LATEST_HEIGHT` from the snapshot RPC, set the state-sync `BLOCK_HEIGHT` and fetch the `TRUST_HASH` from the snapshot RPC. The `BLOCK_HEIGHT` to sync is determined by subtracting the snapshot-interval from the `LATEST_HEIGHT`.&#x20;

```bash
LATEST_HEIGHT=$(curl -s https://rpc.c4e.io:443/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
TRUST_HASH=$(curl -s "https://rpc.c4e.io:443/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
```

Check variables to ensure they have been set

```bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

# output should be something similar to:
# 476945 474945 8E27DE449A57A8DD5E6AAAC130A77FB09ECA51946DDA7C03EB01F13B25AC9765
```

Stop cosmovisor service
```bash
sudo systemctl stop cosmovisor
```

Set the required variables in `~/.c4ed/config/config.toml`

```bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC1,$SNAP_RPC2\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.c4e-chain/config/config.toml
```

Reset the node database


<mark >
WARNING: This will erase your node database. If you are already running validator, be sure you backed up your `config/priv_validator_key.json` and `config/node_key.json` prior to running `unsafe-reset-all`.
</mark>

It is recommended to copy `data/priv_validator_state.json` to a backup and restore it after `unsafe-reset-all` to avoid potential double signing.


```bash
c4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain
```

Restart node and check logs

```bash
sudo systemctl restart cosmovisor && journalctl -u cosmovisor -f
```