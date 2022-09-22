<!--
order: 4
-->

# Binary Installation 

The c4ed binary serves as the node client and the application client. In other words, the c4ed binary can be used to both run a node and interact with it.
## Pre-Built Package


### For Linux Distributions

Download the tar.gz file:

```bash
curl -LO https://repo-testnet.chain4energy.org/c4e-chain-testrepo_latest_linux_amd64.tar.gz
```

Verify the checksum:

```bash
sha256sum c4e-chain-testrepo_latest_linux_amd64.tar.gz
```

You should see the following:

```bash
fd35f39b4b8ca078c5cc3dd718e15b13f753cc60d3839e9cc7b409a932d4cd15  c4e-chain-testrepo_latest_linux_amd64.tar.gz
```

Unpack the tar.gz file:

```bash
tar -xvf c4e-chain-testrepo_latest_linux_amd64.tar.gz
```

Move the binary to your local bin directory:

```bash
sudo mv c4e-chaind /usr/local/bin/c4ed
```

Open a new terminal window and check if the installation was successful:

```bash
c4ed version
```

You should see the following:

```bash
0.1.0-db77cfac
```

## Next {hide}

Learn how to [run a node](./.run_node.md) {hide}
