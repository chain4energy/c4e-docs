<!--
order: 5
-->

# Install prebuild binary (option B)

The c4ed binary serves as the node client and the application client. In other words, the c4ed binary can be used to both run a node and interact with it.
## Pre-Built Package


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

Open a new terminal window and check if the installation was successful:

```bash
c4ed version
```

You should see the following:

```bash
1.0.1
```

## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}