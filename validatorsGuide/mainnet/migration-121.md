<!--
order: 13
-->

# Migration 1.2.1

Before migration prepare halt height
```bash
   sudo systemctl stop cosmovisor
   #Setup proper height
   sed -i 's/halt-height = 0/halt-height = 3689227/g' ~/.c4e-chain/config/app.toml
   sudo systemctl start cosmovisor
   journalctl -u cosmovisor -f
```



Prepare binary for swap
```bash
git clone --depth 1 --branch  v1.2.1  https://github.com/chain4energy/c4e-chain.git
cd c4e-chain
make install
```

Check the version
```bash
c4ed version
```

You should see the following:
```bash
1.2.1
```


### After halt block pass

Stop cosmovisor and prepare backup
```bash
sudo systemctl stop cosmovisor

#prepare backup
cp -r ~/.c4e-chain/data ~/.c4e-chain/data-backup-$(date +%Y-%m-%d_%H:%M)
```

Swap binary and setup halt-height to 0
```bash
cp ~/go/bin/c4ed ~/.c4e-chain/cosmovisor/current/bin
~/.c4e-chain/cosmovisor/current/bin/c4ed version

## should match 1.2.1

sed -i 's/halt-height = 3689227/halt-height = 0/g' ~/.c4e-chain/config/app.toml
sudo systemctl start cosmovisor
journalctl -u cosmovisor -f
```

Check cosmovisor logs
```bash
journalctl -u cosmovisor -f
```
