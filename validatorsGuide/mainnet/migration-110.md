<!--
order: 11
-->

# Migration 1.1.0
### For Linux Distributions using prebuild binary

Download the tar.gz file:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4ed_v1.1.0_linux_amd64.tar.gz
```

You should see the following:

```bash
e18eb2b09aeac537434cbcaa8d9ea272cab7b94bbec5c2458d499a0f735a0e39  c4ed_v1.1.0_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4ed_v1.1.0_linux_amd64.tar.gz
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
1.1.0
```


### For Linux Distributions by building binary
Clone repository
```bash
git clone --depth 1 --branch  v1.1.0  https://github.com/chain4energy/c4e-chain.git
```
go to repo directory
```bash
cd c4e-chain/
```

Build binary
```bash
make install
```

Check the version
```bash
c4ed version
```

You should see the following:
```bash
1.1.0
```


### Setup cosmovisor

Create cosmovisor upgrade dir 
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin
```

Put binary in proper dir
```bash
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin
```

Just to be sure check version
```bash
$DAEMON_HOME/cosmovisor/upgrades/v1.1.0/bin/c4ed version
```
