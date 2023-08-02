<!--
order: 5
-->

# Εγκατάσταση δυαδικού αρχείου προκατασκευής (επιλογή Β)

Το δυαδικό c4ed χρησιμεύει ως πελάτης κόμβου και πελάτης εφαρμογής. Με άλλα λόγια, το δυαδικό c4ed μπορεί να χρησιμοποιηθεί τόσο για την εκτέλεση ενός κόμβου όσο και για την αλληλεπίδραση μαζί του.
## Προκατασκευασμένο πακέτο


### Για διανομές Linux

Κατεβάστε το αρχείο tar.gz:

```bash
curl -LO https://github.com/chain4energy/c4e-chain/releases/download/v1.0.1/c4ed_v1.0.1_linux_amd64.tar.gz
```

Επαληθεύστε το άθροισμα ελέγχου:

```bash
sha256sum c4ed_v1.0.1_linux_amd64.tar.gz
```

Θα πρέπει να δείτε τα εξής:

```bash
15fe687b8f5f02dee95173262f6deb08015416f3faa18c7fb6114cd0552a87aa  c4ed_v1.0.1_linux_amd64.tar.gz
```

Αποσυσκευάστε το αρχείο tar.gz:

```bash
tar -xvf c4ed_v1.0.1_linux_amd64.tar.gz
```

Μετακινήστε το δυαδικό αρχείο στον τοπικό σας κατάλογο bin:

```bash
mkdir -p ~/go/bin
sudo mv c4ed ~/go/bin
```

Ανοίξτε ένα νέο παράθυρο τερματικού και ελέγξτε εάν η εγκατάσταση ήταν επιτυχής:

```bash
c4ed version
```

Θα πρέπει να δείτε τα εξής:

```bash
1.0.1
```

## Next {hide}

Learn how to [run and configure node](.run_node.md) {hide}
