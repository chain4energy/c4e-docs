<!--
order: 16
-->

# Migration 1.4.0
### For Linux Distributions using prebuild binary

Download the tar.gz file:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.4.0/c4ed_v1.4.0_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4ed_v1.4.0_linux_amd64.tar.gz
```

You should see the following:

```bash
88a697209e815e31ca422d42f1726ba87cada3904202bbe6994e06db2144e6c0  c4ed_v1.4.0_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4ed_v1.4.0_linux_amd64.tar.gz
```

Move the binary to your local bin directory:

```bash
mkdir -p ~/go/bin
sudo mv c4ed ~/go/bin
```

### Install wasmvm library

Create a directory for the library
```bash
mkdir ~/.c4e-chain/lib
```

Download the library to the directory
```bash
wget https://github.com/CosmWasm/wasmvm/releases/download/v1.5.2/libwasmvm.x86_64.so -P ~/.c4e-chain/lib
```

Add the library to the path
```bash
echo 'export LD_LIBRARY_PATH=/home/$USER/.c4e-chain/lib:$LD_LIBRARY_PATH' >> ~/.profile
source ~/.profile
```

Check the version
```bash
c4ed version
```

You should see the following:
```bash
1.4.0
```

### Add wasmvm path to cosmovisor service

Add the following line to the cosmovisor service file under the `[Service]` section.
Remember to change `user_path` to your actual path
```bash
Environment="LD_LIBRARY_PATH=/home/user_path/.c4e-chain/lib:$LD_LIBRARY_PATH"
```

Restart the cosmovisor service
```bash
sudo systemctl daemon-reload
sudo systemctl restart cosmovisor
```

### For Linux Distributions by building binary
Clone repository
```bash
git clone --depth 1 --branch  v1.4.0  https://github.com/chain4energy/c4e-chain.git
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
1.4.0
```

### Setup cosmovisor

Create cosmovisor upgrade dir
```bash
export DAEMON_HOME=$HOME/.c4e-chain/
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/v1.4.0/bin
```

Put binary in proper dir
```bash
cp ~/go/bin/c4ed $DAEMON_HOME/cosmovisor/upgrades/v1.4.0/bin
```

Just to be sure check version
```bash
$DAEMON_HOME/cosmovisor/upgrades/v1.4.0/bin/c4ed version
```
