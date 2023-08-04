<!--
order: 8
-->
# Συγχρονισμός με συγχρονισμό κατάστασης

Το State-sync είναι μια λειτουργική μονάδα ενσωματωμένη στο Cosmos SDK για να επιτρέπει στους επικυρωτές να ενταχθούν γρήγορα στο δίκτυο συγχρονίζοντας τον κόμβο σας με ένα RPC με δυνατότητα στιγμιότυπου από ένα αξιόπιστο ύψος μπλοκ.&#x20;

Αυτό μειώνει σημαντικά τον χρόνο που απαιτείται για να συγχρονιστεί ένας επικυρωτής ή ο φύλακας με το δίκτυο από ημέρες σε λεπτά. Οι περιορισμοί αυτού είναι ότι δεν υπάρχει πλήρες ιστορικό συναλλαγών, απλώς η πιο πρόσφατη κατάσταση που έχει αποθηκεύσει το RPC συγχρονισμού κατάστασης. Ένα πλεονέκτημα του συγχρονισμού κατάστασης είναι ότι η βάση δεδομένων είναι πολύ μικρή σε σύγκριση με έναν πλήρως συγχρονισμένο κόμβο, επομένως η χρήση του συγχρονισμού κατάστασης για τον επανασυγχρονισμό του κόμβου σας στο δίκτυο μπορεί να σας βοηθήσει να διατηρήσετε το κόστος λειτουργίας χαμηλότερο ελαχιστοποιώντας τη χρήση αποθήκευσης.

Συγχρονίζοντας στο δίκτυο με συγχρονισμό κατάστασης, ένας κόμβος μπορεί να αποφύγει όλες τις διαδικασίες αναβάθμισης και μπορεί να συγχρονιστεί μόνο με το πιο πρόσφατο δυαδικό αρχείο.

Για κόμβους που προορίζονται να εξυπηρετούν δεδομένα για dapps, εξερευνητές ή οποιοδήποτε άλλο RPC που απαιτεί πλήρες ιστορικό, ο συγχρονισμός κατάστασης στο δίκτυο δεν θα ήταν κατάλληλος.&#x20;

## Συγχρονισμός κατάστασης κύριου δικτύου
Το Snapshot λειτουργούν σε rpc1 και rpc2


<mark >
ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Αυτή η τεκμηρίωση προϋποθέτει ότι έχετε ακολουθήσει όλες τις προηγούμενες οδηγίες

Η ρύθμιση παραμέτρων συγχρονισμού κατάστασης είναι η εξής:

```bash
# snapshot-interval specifies the block interval at which local state sync snapshots are
# taken (0 to disable). Must be a multiple of pruning-keep-every.
snapshot-interval = 1000

# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).
snapshot-keep-recent = 10
```

Set `SNAP_RPC1` and `SNAP_RPC2` variable

```bash
SNAP_RPC1="https://rpc1.c4e.io:443"
SNAP_RPC2="https://rpc2.c4e.io:443"
```

Λάβετε το "LATEST_HEIGHT" από το στιγμιότυπο RPC, ορίστε τον συγχρονισμό κατάστασης "BLOCK_HEIGHT" και λάβετε το "TRUST_HASH" από το στιγμιότυπο RPC. Το "BLOCK_HEIGHT" προς συγχρονισμό προσδιορίζεται αφαιρώντας το διάστημα του στιγμιότυπου από το "LATEST_HEIGHT".&#x20;

```bash
LATEST_HEIGHT=$(curl -s https://rpc.c4e.io:443/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
TRUST_HASH=$(curl -s "https://rpc.c4e.io:443/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
```

Ελέγξτε τις μεταβλητές για να βεβαιωθείτε ότι έχουν οριστεί

```bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

# output should be something similar to:
# 476945 474945 8E27DE449A57A8DD5E6AAAC130A77FB09ECA51946DDA7C03EB01F13B25AC9765
```

Σταματήστε την υπηρεσία cosmovisor
```bash
sudo systemctl stop cosmovisor
```

Ρυθμίστε τις απαιτούμενες μεταβλητές `~/.c4ed/config/config.toml`

```bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC1,$SNAP_RPC2\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.c4e-chain/config/config.toml
```

Επαναφέρετε τη βάση δεδομένων του κόμβου


<mark >
ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Αυτό θα διαγράψει τη βάση δεδομένων του κόμβου σας. Εάν εκτελείτε ήδη το πρόγραμμα επικύρωσης, βεβαιωθείτε ότι έχετε δημιουργήσει αντίγραφα ασφαλείας των "config/priv_validator_key.json" και "config/node_key.json" πριν από την εκτέλεση του "unsafe-reset-all".
</mark>

Συνιστάται να αντιγράψετε το «data/priv_validator_state.json» σε ένα αντίγραφο ασφαλείας και να το επαναφέρετε μετά το «unsafe-reset-all» για να αποφύγετε πιθανή διπλή υπογραφή.


```bash
c4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain
```

Επανεκκινήστε τον κόμβο και ελέγξτε τα αρχεία καταγραφής

```bash
sudo systemctl restart cosmovisor && journalctl -u cosmovisor -f
```
