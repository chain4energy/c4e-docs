<!--
order: 5
-->


# Cosmos modules

* Authz - Facilitates authorizations granted to one account to perform actions on behalf of another account;

  The authz module facilitates granting authorizations to perform actions, such as spending tokens, on behalf of one account to other accounts.


An authorization is an allowance to execute an action by the grantee on behalf of the authorization granter, e.g. to send tokens to an account from the granter, or to delegate tokens to a validator from the granter. There are 3 major built-in authorization types:

1. SendAuthorization

SendAuthorization implements an authorization to the grantee to perform, on behalf of the granter, a basic send action defined in the bank module. It takes a SpendLimit that is greater than 0 to specify the maximum amount of tokens the grantee can spend with. The SpendLimit keeps track of how many tokens allowed are left in the authorization and is updated as the tokens are spent until the SendAuthorization gets cleared when the SpendLimitreaches 0. Sending an amount greater than the SpendLimit is not allowed

2. StakeAuthorization

StakeAuthorization implements an authorization to the grantee to perform, on behalf of the granter, delegate, unbond (undelegate), or redelegate actions defined in the staking module. Each of the above actions need to be authorized separately, with which either an AllowList or a DenyList must be specified to restrict which validators to or not to perform a staking action with. Optionally, MaxTokens can also be specified in the authorization that keeps track of a limit to the amount of tokens to be delegated/undelegated/redelegated. If left unspecified, the amount is unlimited. Similar to the SpendLimit in SendAuthorization, MaxTokens gets updated after each valid authorized staking action. An authorized staking action that uses tokens beyond the MaxTokens is not allowed

3. GenericAuthorization

GenericAuthorization implements an authorization to the grantee to perform, on behalf of the granter, a generic action. In other words, GenericAuthorization facilitates an arbitrary action grant, where a MsgTypeURL must be specified to correspond to an action defined in the modules. A GenericAuthorization is currently unrestricted beyond the MsgTypeURL. For example, when granting someone to send tokens, the SpendLimit in SendAuthorization will not be enforced. Therefore, a SendAuthorization without a spend limit may in fact be implemented as a GenericAuthorization with the MsgTypeURL been set to /cosmos.bank.v1beta1.MsgSend. The following are some common MsgTypeURLs:

* Send: /cosmos.bank.v1beta1.MsgSend
* Delegate: /cosmos.staking.v1beta1.MsgDelegate
* Unbond/Undelegate: /cosmos.staking.v1beta1.MsgUndelegate
* Redelegate: /cosmos.staking.v1beta1.MsgBeginRedelegate
* Withdraw delegator reward: /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
* Bank - Token transfer functionalities and query support for the total supply of all assets;

  The bank module maintains the state of two primary objects:


Account balances by address;


Total supply of tokens of the chain


bank module tracks and provides query support for the total supply of all assets used in the application. It also supports token transfer functionalities. Specifically, the total supply is updated whenever a token is:


Minted, e.g. Token created by the mint module; or


Burned, e.g. Token distorted by the slashing module

* Distribution - Fee distribution, and staking rewards to the validators and delegator;

  The distribution module is responsible for the distribution of rewards to the validators and delegators.


## Network Parameters


Below are all the network parameters for the distribution module:


community_tax - The rate of community tax;


base_proposer_reward - Base bonus on transaction fees collected in a valid block;


bonus_proposer_reward - Maximum bonus on transaction fees collected in a valid block;


withdraw_addr_enabled - Whether delegators can set a different address to withdraw their rewards.


## Rewards


There are two main types of rewards


Block rewards, governed by the mint module; and


Transaction fees bonus.


## Block reward


Block rewards are distributed proportionally to all validators relative to their voting power. This means that even though each validator gains CRO with each reward, all validators will maintain equal weight over time.


For the validator operator, the distribution information is updated if:


the amount of delegation to a validator is updated (delegation, unbond, slashing, etc.);


a validator successfully proposes a block and receives the reward;


any delegator withdraws from a validator, or


the validator withdraws it's commission.


For delegators, once they have delegated to a validator, they will be entitled to a portion of the total reward obtained by the validators. The reward is proportional to their delegated amount, and the commission charged by the validator operator (if any).


## Transaction Fees Bonus


When a validator is selected to propose the next block, they must include at least 66% precommits of the previous block. To incentivise validators to include more than 66% precommits, the module provide a bonus reward (portion of the transaction fee in the block) to the proposer.


This bonus reward is dependent linearly on the precommits from the other validators. Starting from 66% of the precommits, the basic bonus will be base_proposer_reward and increase linearly to bonus_proposer_reward when the validator includes 100% of the precommits.


This mechanism aims to incentivize non-empty block proposals, better networking between validators as well as to mitigate censorship. For further example, kindly refer to this link.


## Community tax


The community_tax is the tax rate of the reward obtained by the validator. Specifically, part of the reward will be taxed and sent to the community pool. The funds in the community pool can be withdrawn by submitting a community pool spend proposal with the gov module.


Even if the community_tax is set to be zero, the balance of the community pool could be non-zero. For example, the truncated remainder in some accounting edge cases will be sent to the community pool as well. Besides that, users can fund the community pool voluntarily, and there could be funds allocated to the community pool in the genesis

* Governance - On-chain proposals and voting;

  The gov module enables on-chain governance which allows C4E Chain token holders to participate in the decision-making processes. For example, users can:

1. Form an idea and seek feedback; (in development)
2. Create the proposal and adjust according to feedback as needed  (in development) ;
3. Submit a proposal along with an initial deposit;
4. Deposit tokens and fund an active proposal;
5. Vote for an active proposal.

   Below are all the network parameters for the gov module:


deposit_params - Deposit related parameters:


min_deposit: Minimum deposit for a proposal to enter voting period; and


max_deposit_period: Maximum period for C4E holders to deposit on a proposal.


voting_params - Voting related parameters


voting_period: The length of the voting period.


tally_params - Tally related parameters


quorum: The minimum percentage of voting power that needs to be casted on a proposal for the result to be valid;


threshold: Minimum proportion of Yes votes (excluding Abstain votes) for the proposal to be accepted; and


veto: Minimum proportion of Veto votes to total votes ratio for proposal to be vetoed


## The Governance Procedure


Phase 0 - Submit a proposal along with an initial deposit:


Users can submit a proposal with an initial deposit. The proposal will then become "active" and enter the deposit period.


Phase 1 - Deposit period


During the deposit period, users can deposit and support an active proposal. Once the deposit of the proposal reaches min_deposit, it will enter the voting period. Otherwise, if the proposal is not successfully funded within max_deposit_period, it will become inactive and the entire deposit will be refunded.


Phase 2 - Voting period


During the voting period, staked (bonded) tokens will be able to participate in the voting. Users can choose one of the following option: "yes", "no", "no_with_veto" and "abstain"


After the voting_period has passed, there are several scenarios where a proposal will be considered to be "Rejected", for example, if


No one votes (everyone "abstain");

Votes did not reach the quorum;


More than veto of voters vote for "no_with_veto";


More than the threshold of non-abstaining voters vote "no".


Otherwise, the proposal will be accepted and changes will be implemented according to the proposal.

* Slashing - Validator punishment mechanisms;

  Validators are responsible for signing or proposing a block at each consensus round. A penalty should be imposed on validators' misbehaviour to reinforce this.


Specifically, slashing functionality that aims to dis-incentivize network-observable actions, such as faulty validations. The penalties may include losing some amount of their stake, losing their ability to perform the network functionality for a period of time, collect rewards, etc


Below are all the network parameters used to configure the behavior of validator punishments. Details of all these parameters and their effect on behavior of validator punishments is discussed later in this document:

1. signed_blocks_window: Number of blocks for which the liveness is calculated for uptime tracking;
2. min_signed_per_window: Maximum percentage of blocks with faulty/missed validations allowed for an account in last; signed_blocks_window blocks before it gets deactivated;
3. downtime_jail_duration: Duration for jailing;
4. slash_fraction_double_sign: Percentage of funds being slashed when validator makes a byzantine fault; and
5. slash_fraction_downtime: Percentage of funds being slashed when a validator is non-live.

   Punishments for a validator are triggered when they either make a byzantine fault or become non-live:



1. Liveness Faults (Low availability)

   A validator is said to be non-live when they fail to successfully sign at least min_signed_per_window blocks (in percentage) in the last signed_blocks_window blocks. signed_blocks_window and min_signed_per_window are network parameters and can be configured during genesis and can be updated during runtime by the governance module.

* Staking - Proof-of-Stake layer for public blockchains;
* Supply - Retrieve total and liquid supply
2. Byzantine Faults

   A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes so they can be punished by the slashing module. For example:

* Validator who votes for two different blocks within a single round ("Equivocation validator"/ "Double signing");
*
* Validator who signs commit messages for arbitrary application state ( "Lunatic validator").

  Remark: The evidence of a set of validators attempting to mislead a light client can also be detected and captured. However, even the Amnesia attack can be detected, punishment can not be applied at this stage, as we can not deduce the malicious validators.

3. Inactivity Slashing

   It is important that the validators maintain excellent availability and network connectivity to perform their tasks. A penalty should be imposed on validators' misbehaviour to reinforce this.


When a validator fails to successfully sign missed_block_threshold blocks in the last block_signing_window blocks, it is immediately jailed and punished by deducting funds from their bonded and unbonded amount and removing them from the active validator set. The funds to be deducted are calculated based on slash_fraction_downtime. Kindly refer to this link on the logic of the liveness tracking.

4. Jailing

   A validator is jailed when they make liveness or Byzantine fault. When a validator is jailed, it will no longer be considered as an active validator until they are un-jailed. Futhermore, it cannot be un-jailed before downtime_jail_duration. This downtime_jail_duration is a network parameter which can be configured during genesis.

5. Un-jailing

   When a jailed validator wishes to resume normal operations (after downtime_jail_duration has passed), they can create an unjail transaction which marks them as un-jailed. Validator will then rejoin the validator set once it has been successful un-jailed.

6. Slashing for Byzantine Fault

   When there is byzantine fault detected, they are immediately slashed other than jailed. The funds to be deducted are calculated based on slash_fraction_double_sign. Furthermore, validators who commit this double-signing fault will also be put into the "tombstone state", which means it will be blacklisted and jailed foreve

* Staking - Proof-of-Stake layer for public blockchains;

  The staking module handles Proof-of-Stake related logics, which plays a very important part to the underneath consensus protocol.
