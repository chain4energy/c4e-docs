<!--
order: 3
-->

# Go installation

## GO

Download go binary and put in /usr/local:


```bash
wget https://go.dev/dl/go1.19.1.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.1.linux-amd64.tar.gz
```

Add go to path:

```bash
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile
echo 'export PATH=$PATH:/home/ubuntu/go/bin' >> ~/.profile

source ~/.profile
```
## Next {hide}

Learn how to [installation(./.installation.md) {hide}