<!--
order: 5
-->

# Cosmovisor setup

## Install cosmovisor

Run go install to download cosmovisor:

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
```

Create dir structure for cosmovisor:

```bash
export DAEMON_NAME=chainforenergyd
export DAEMON_HOME=$HOME/.chainforenergy/
echo $DAEMON_NAME
mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
mkdir -p $DAEMON_HOME/cosmovisor/upgrades
```

Copy c4e binary to cosmovisor genesis bin:

```bash
cp $HOME/go/bin/chainforenergyd $DAEMON_HOME/cosmovisor/genesis/bin
```


Setup systemd:

```bash
sudo tee /etc/systemd/system/cosmovisor.service> /dev/null <<EOF
[Unit]
Description=cosmovisor
After=network-online.target

[Service]
User=c4e
ExecStart=/home/$USER/go/bin/cosmovisor start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=chainforenergyd"
Environment="DAEMON_HOME=/home/$USER/.chainforenergy"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true”
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
[Install]
WantedBy=multi-user.target

EOF
```


## Next {hide}

Learn how to [run a node](./.run_node.md) {hide}
