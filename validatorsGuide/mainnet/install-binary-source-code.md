<!--
order: 4
-->

# Install binary from source code (option A)


Clone repository and checkout to proper tag
```bash
git clone --depth 1 --branch  v1.0.0  https://github.com/chain4energy/c4e-chain.git
```
Go to dir and build project
```bash
cd c4e-chain/
make install
```

Check binary version should me equal
```bash
c4ed version

output: 1.0.0
```
## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}