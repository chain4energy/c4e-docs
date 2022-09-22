<!--
order: 5
-->

# Install prebuild binary (option B)

The c4ed binary serves as the node client and the application client. In other words, the c4ed binary can be used to both run a node and interact with it.
## Pre-Built Package


### For Linux Distributions

Download the tar.gz file:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4ed_v1.0.0_linux_amd64.tar.gz
```

You should see the following:

```bash
065a7ad8de4a01bb24bad77e6e162c7d4600e54bdb2da922cf565a9a41c5bbec  c4ed_v1.0.0_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4ed_v1.0.0_linux_amd64.tar.gz
```

Move the binary to your local bin directory:

```bash
mkdir -p ~/go/bin
sudo mv c4ed ~/go/bin
```

Open a new terminal window and check if the installation was successful:

```bash
c4ed version
```

You should see the following:

```bash
1.0.0
```

## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}