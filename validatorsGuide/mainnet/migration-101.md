<!--
order: 10
-->

# Migration 1.0.1
### For Linux Distributions

Download the tar.gz file:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.0.1/c4ed_v1.0.1_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4ed_v1.0.1_linux_amd64.tar.gz
```

You should see the following:

```bash
15fe687b8f5f02dee95173262f6deb08015416f3faa18c7fb6114cd0552a87aa  c4ed_v1.0.1_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4ed_v1.0.1_linux_amd64.tar.gz
```

Move the binary to your local bin directory:

```bash
mkdir -p ~/go/bin
sudo mv c4ed ~/go/bin
```

Check the version
```bash
c4ed version
```

You should see the following:

```bash
1.0.1
```
Stop cosmovisor service
```bash
sudo systemctl stop cosmovisor
```

Replace cosmovisor binary
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/genesis/bin
$DAEMON_HOME/cosmovisor/genesis/bin/c4ed version
```

Restart cosmovisor
```bash
sudo systemctl restart cosmovisor && journalctl -u cosmovisor -f
```