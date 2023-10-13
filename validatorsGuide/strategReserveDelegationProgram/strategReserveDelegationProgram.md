<!--
order: 1
-->

# C4E Strategic Reserve Delegation Program v1.2

**Revision 1.2 - 2023/10/13**

## Document versions

| Version          |   Date     | Author         | 
|------------------|------------|----------------|
| Revision 1.0     | 2023/-2/17 | C4E Team       |
| Revision 1.1     | 2023/-2/24 | Greg Sikora    |
| Revision 1.2     | 2023/10/13 | Greg Sikora    |

**Revision 1.2 changes**

Rebalancing Subjective/Objective ratio based on the [proposal #6](https://wallet.c4e.io/governance/6)

**Revision 1.1 changes**

Small cosmetic changes
- Should be *"Amount of delegated tokens"* instead *"Amount of delegated nodes"* in [Early supporter criteria](#early-supporter-criteria)
- Changes FDP to SRDP in the last section

## Overview

Chain4Energy will allocate 54.000.000 C4E from the Strategic Pool for the **Strategic Reserve
Delegation Program**. This allocation will be splitted into four categories: Eligibility, Early supporter, Objective and Subjective.
Objective criteria will be evaluated automatically based on parameters that are tracked by the Smart Delegation Program (SDP).
Subjective criteria are parameters which are not possible to evaluate on-chain, therefore the CORE Team will take care of this and score them individually.

| Delegation Program category          |   Amount of token in the category |
|:-------------------------------------|----------------------------------:|
| Delegation Program - Eligibility     |                     4.000.000 C4E |
| Delegation Program - Early supporter |                    10.000.000 C4E |
| Delegation Program - Objective       |                    30.000.000 C4E |
| Delegation Program - Subjective      |                    10.000.000 C4E | 

**Note:
Some validators who are managed by the team or who have a separate contract with Chain4Energy are excluded from this program. This means that most of the tokens from this program may be intended for community validators.**

## Eligibility criteria

1. **Proven track record** - Is active validator for at least 3 months in two other cosmos chains
2. **Commission rate** - between 1% - 10%
3. **Geography** - Validator location outside of Countries which are on the embargo list&#185;. At least the following countries are excluded: Russia, Iran, Syria, Venezuela, North Korea, Belarus. The list will be continuously evaluated and updated.
4. **Not being jailed in last 90d** - Validator missing 9500 blocks out of 10k (missed blocks) or 15.8 hours downtime -> would lead to slashing and being jailed
5. **Uptime** - 95% of blocks must be signed during the last 90d. Taken into account for disqualification. For qualification not verified.

***
&#185; Embargo lists taken into consideration:

- [https://www.tradecompliance.pitt.edu/embargoed-and-sanctioned-countries](https://www.tradecompliance.pitt.edu/embargoed-and-sanctioned-countries).
- [https://en.wikipedia.org/wiki/United_States_sanctions ](https://en.wikipedia.org/wiki/United_States_sanctions).
- [ https://www.sanctionsmap.eu/#/main]( https://www.sanctionsmap.eu/#/main).
***

In case you fulfill the eligibility criterias a base delegation of 40.000 C4E is guaranteed in case Objective or Subjective Parameters are met the Validator can receive more delegation on top of it.
The maximum number of validators eligible is 100. It means that validators who are outside of the active set can receive delegation as well and contribute to the project.
For Validators who are in the inactive set and fulfill the first 4 eligibility criteria the Uptime criteria will not be applied, as Uptime can’t be tracked from Validator in the inactive set.

Validators who do NOT fulfill this criterias will be ineligible for the current Strategic Reserve Delegation round. But they have the chance to work to improve their performance, adjust their commissions or more their Validator to another location to get eligible for the next round. This will be checked automatically. In case a validator currently gets any kind of Strategic Reserve Delegation and decides to increase their commission above or below the allowed range, move their Node into a prohibited location, provide poor performance he will get ineligible and the Strategic Reserve Delegation will be removed immediately.

## Early supporter criteria

Early supporters are those validators who decided to spin up a node and continue without stopping at the early stage of the project between September and December.
We want to incentivise them by supporting the project without any incentive at that stage by delegating additional amounts of tokens from the strategic reserve.

**Criteria:** As long as your validator node is running without being jailed or disqualified from the Strategic Reserve Delegation program you have rights for this delegation!
It is untouchable nevertheless what is the score of your node.

| Spin up node date        | Number of validators | Amount of delegated tokens |
|:-------------------------|---------------------:|---------------------------:|
| September - October 2022 |                    6 |                    250.000 |
| November 1-15 2022       |                   10 |                    200.000 |
| November 16-30 2022      |                   36 |                    150.000 |
| December 2022            |                    5 |                    100.000 |
| **Total**                |                   57 |                ~10.000.000 |


## Objective Parameters

The amount of the Strategic Reserve Delegation for Objective Parameters will be consistently tracked and evaluated. Therefore a consistent re-delegation in a period of 14-30 Days will happen.

The importance of specific objective parameters is provided in the following table. The Percentage can vary from quarter to quarter. Once changed it will be updated at least 1 month before the next quarter.

| Percentage | factor                    |
|:-----------|:--------------------------|
| 20         | Uptime                    |
| 30         | Internet Service Provider |
| 30         | Geographic distribution   |
| 5          | Commission Rate           |
| 15         | Governance Participation  |

- Uptime - % signed blocks for last 30 days

Below 95% → score is 0% for this parameter.

Above 99% → score is 100% for this parameter.

9.900 blocks out of every 10k signed would lead to a constant uptime of 99%.

- ISP - Internet Service Provider

Above 20% concentration → score is 0% for this parameter

At 10% concentration and below  → score is 100% for this parameter

- Geography - Location of Validator

Above 20% concentration → score is 0% for this parameter

At 10% concentration and below  → score is 100% for this parameter

- Commision rate -

At 10% Commision rate → score is 50%

At 5% Commission rate → score is 100%

The score is increasing linearly towards 5%, i.e. a Validator with a Commision rate of 7,5% will have a score for this parameter of 75%. Validators with Commision rate below 1% and above 10% are not eligible for Strategic Reserve Delegations anyway.

- Governance participation - Votes on Governance proposals (last 90 days)

Below 75% participation rate → score is 0%

Above and at 75% participation rate → score is 100%

This will allow Validators to abstain on certain Gov. proposals without pushing the turnout rate and reaching quorum.

## Subjective Parameters

The amount of the Strategic Reserve Delegation for the Subjective Parameters will subsequently be quarterly as the C4E-core team evaluates current and future applications as well as contributions.

The subjective Parameters are divided into three different sectors. All sectors are weighted equally. To qualify for Strategic Reserve Delegation within the subjective parameters the Validator has to send in an application with their contributions. More information down below.


Community Contribution:
- Tutorials
- Translations
- YT Videos
- Adding Chain4Energy at own web page
- Marketing materials e.g. Christmas greetings
- Participation in C4E Twitter Spaces and asking useful questions
- Social media contribution (writing Threads, posts, and being active across various C4E channels)
- AMA with validator team

Technical Contribution:
- Code contributions (bug fixes, improvements etc.)
- Github proposals
- Adding to documentation

Public Goods:
- IBC Relayer
- RPC Nodes
- Seed Nodes
- Archive Nodes
- Building Explorer (forks of Ping.Pub do NOT count)
- Testnet participation

The Applications for any kind of Contributions can be handed in here via google form (LINK) every 3 months so basically 4 times a year. The applications have to be submitted 2 - 4 weeks prior to the new period. These Contributions in kind of public good, technical or community contributions will be evaluated through the C4E Team. As these contributions are difficult to standardize and measure objectively the Foundation decided to evaluate these contributions subjectively. Whereas the scoring and the Strategic Reserve Delegation will remain public and transparent. The C4E Team was in favor of the approach which Stride was following by evaluating the subjective parameters by an Advisory council formed by Validators. But decided to not go with that approach in the beginning as a council needs resources to organize, structure and monitor the council. Furthermore the resources will be concentrated even more in focusing on the product and infrastructure.

Strategic Reserve Delegations for subjective parameters starts on the following dates:

Q1 SRDP 01.01 → Q2 SRDP 01.04  → Q3 SRDP 01.07 → Q4 01.09

To qualify for Q1 (01.12 - 14.12 Application // 15.12 - 30.12. Scoring and evaluating)

To qualify for Q2 (01.03 - 14.03 Application // 15.03 - 30.03. Scoring and evaluating)

To qualify for Q3 (01.06 - 14.06 Application // 15.06 - 30.06. Scoring and evaluating)

To qualify for Q4 (01.08 - 14.08 Application // 15.08 - 30.08. Scoring and evaluating)

## Final disclaimer

The program is valid for a 1 year with option to extend for another year, since it was put into effect. The continuation of the program depends on the use of the Strategic Pool in the future.

The Chain4Energy team reserve rights to discontinue the Strategic Reserve Delegation Program for any reason.

The team reserves rights to un-delegate/redelegate tokens if the amount of lost blocks is higher than 7500 and the validator does not sign blocks.

The team reserves rights to un-delegate/redelegate tokens if the validator doesn’t complete the upgrade within the first 5 hours.
