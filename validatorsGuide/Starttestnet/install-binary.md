<!--
order: 5
-->

# Install prebuild binary (option B)

The c4ed binary serves as the node client and the application client. In other words, the c4ed binary can be used to both run a node and interact with it.
## Pre-Built Package


### For Linux Distributions

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
7b36ac7b1ebc6b5aad37f4770cb4a8eae205c6a7dad7275ff4723f0f1511d198  c4ed_v1.4.0_linux_amd64.tar.gz
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

Open a new terminal window and check if the installation was successful:

```bash
c4ed version
```

You should see the following:

```bash
1.4.0
```

## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}