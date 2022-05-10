<!--
order: 4
-->

# Binary Installation 

## Binaries

Clone and build c4e using `git`:

```bash
git clone https://github.com/chain4energy/c4e-chain.git
cd c4e-chain
git checkout todo
make install
echo 'export PATH=$PATH:/home/$USER/go/bin' >> ~/.profile
source ~/.profile
```

Check that the binaries have been successfuly installed:

```bash
c4ed version
```
## Next {hide}

Learn how to [run a node](./.run_node.md) {hide}
