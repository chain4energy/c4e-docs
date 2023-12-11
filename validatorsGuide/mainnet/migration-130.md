<!--
order: 14
-->

# Migration 1.3.0
### For Linux Distributions using prebuild binary

Download the tar.gz file:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4ed_v1.3.0_linux_amd64.tar.gz
```

You should see the following:

```bash
dba6538eabd7bbe7b2cfc4ec8fa60db5a6a0bfdac5b3f48d40df508d98233c0a c4ed_v1.3.0_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4ed_v1.3.0_linux_amd64.tar.gz
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
1.3.0
```


### For Linux Distributions by building binary
Clone repository
```bash
git clone --depth 1 --branch  v1.3.0  https://github.com/chain4energy/c4e-chain.git
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
1.3.0
```


### Setup cosmovisor

Create cosmovisor upgrade dir
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/v1.3.0/bin
```

Put binary in proper dir
```bash
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/upgrades/v1.3.0/bin
```

Just to be sure check version
```bash
$DAEMON_HOME/cosmovisor/upgrades/v1.3.0/bin/c4ed version
```
