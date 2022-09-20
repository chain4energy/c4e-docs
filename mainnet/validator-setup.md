<!--
order: 8
-->

# Run a Validator

# Becoming a validator
Once you've properly set up a [full node](run_node.md), if you wish you can become a validator node and
start in earning by  validating  the chain transactions. 


## Requirements
If you want to become a Commercio.network validator you need to:

1. Be a full node and cosmovisor up 
   If you are not, please follow the [full node configuration guide](run_node.md) and [Cosmovisor setup](cosmovisor-setup.md)
   
2. Node must be synchronized

```bash
c4ed status | jq .SyncInfo.catching_up
```
Command above should return
```bash
false
```

   
3. Own enough tokens.  
   To become a validator you need at least 2[c4e] token to create the validator, and for transaction fee

## 1. Add wallet key
Inside the testnet you can use the **Ledger**, but you can also use the wallet software with the `c4ed`.     
However, if you wish to use **Ledger**, please add the `--ledger` flat to any command.

:::warning  
Please remember to copy the 12 words seed phrase in a secure place.  
They are your mnemonic and if you loose them you lose all your tokens and the whole access to your validator.  

Create the first wallet with the following command
```bash
c4ed keys add <KEY_NAME>
# Enter a password that you can remember
```
The output of the command will provide the 24 words that are the mnemonic.

Create two wallet one for validator and second for vesting account:
example
      

If you are using the **Ledger** device you must first connect it to your computer, start the commercionetworkd application and run the command
```bash
c4ed keys add <KEY_NAME> --ledger
# Enter a password that you can remember
```
In this case the 12 words are not provided because they have already been configured in the **Ledger** initialization

```bash
c4e@c4e-fn1:~$ c4ed keys add validator
Enter keyring passphrase:
Re-enter keyring passphrase:

- name: validator
  type: local
  address: c4e1atqq8lmeptgn2jlx2q8r42p572yhh6lzle7vng
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8D47crCW+YkFGduj6brpuzectp3D61xRIx/qbEGGTif"}'
  mnemonic: ""
c4e@c4e-fn1:~$
c4e@c4e-fn1:~$ c4ed keys add vesting
Enter keyring passphrase:

- name: vesting
  type: local
  address: c4e1e2kq0w7pxpqn9ce5leyfl2h6v2kd7l94ksp04j
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2AUrhH/iLutlZQ5K/jHniqnZSj61N++ytQF798WBn1I"}'
  mnemonic: ""
c4e@c4e-fn1:~$
```

Send C4E team email with validator and vesting account address to email: dev@chain4.energy

```bash
email to: dev@chain4.energy
content:
    validator address: c4e1atqq8lmeptgn2jlx2q8r42p572yhh6lzle7vng
    vesting account address: c4e1e2kq0w7pxpqn9ce5leyfl2h6v2kd7l94ksp04j
```

## What is a Validator?

[Validators](https://hub.cosmos.network/master/validators/overview.html) are responsible for committing new blocks to the blockchain through voting. A validator's stake is slashed if they become unavailable or sign blocks at the same height. Please read about [Sentry Node Architecture](https://hub.cosmos.network/master/validators/validator-faq.html#how-can-validators-protect-themselves-from-denial-of-service-attacks) to protect your node from DDOS attacks and to ensure high-availability.

::: danger Warning
If you want to become a validator for `mainnet`, you should [research security](https://hub.cosmos.network/master/validators/security.html).
:::


## Create Your Validator

Your `c4evalconspub` consensus public key fron tendermint can be used to create a new validator by staking tokens. You can find your validator pubkey by running:

```bash
c4ed tendermint show-validator
```

To create your validator, just use the following command:

```bash
c4ed tx staking create-validator \
  --amount=1000000uc4e \
  --pubkey=$(c4ed tendermint show-validator) \
  --moniker=<MONIKER> \
  --chain-id=<CHAIN_ID> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1" \
  --gas="auto" \
  --from=<KEY_NAME>
```

::: tip
When specifying commission parameters, the `commission-max-change-rate` is used to measure % _point_ change over the `commission-rate`. E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.
:::

::: tip
`Min-self-delegation` is a stritly positive integer that represents the minimum amount of self-delegated voting power your validator must always have. A `min-self-delegation` of 1 means your validator will never have a self-delegation lower than `1000000uc4e`
:::

You can confirm that you are in the validator set by using a explorer.


### Troubleshooting

If you inspect your `create-validator` transaction in the explorer, and see the following error:
```
out of gas in location: WritePerByte; gasWanted: 177140, gasUsed: 177979: out of gas
```

Please try subsituting:
```
--gas="auto" \
--gas-prices="0.0025uc4e"
```

with

```
--gas=<value significantly larger than gasUsed value from the error>
```


## Confirm Your Validator is Running

Your validator is active if the following command returns anything:

```bash
c4ed query tendermint-validator-set | grep "$(c4ed tendermint show-validator | jq .key  | tr -d \")"
```

You should now see your validator in one of the block explorers. You are looking for the `bech32`
encoded `address` in the `~/.c4e-chain/config/priv_validator_key.json` file.

::: tip
To be in the validator set, you need to have more total voting power than the 50th validator.
:::


