<!--
order: 1
-->

# Hardware requirements
This page contains three main hardware configurations that can be used in order to create a new c4e
validator machine. Please note that higher the effort you will put into creating a stable and robust machine and lower 
the chances of getting slashed due to downtime. 

## Requirements
- [Validator hardware](#validator-hardware)
  - [Requirements](#requirements)
  - [Testnet](#testnet)
  - [Mainnet](#mainnet)

## Testnet
While running a testnet node, you can use any hardware you want. 

During this guide we will assume that you will use a simple cloud server, to avoid having to deal with 
complicated stuff that is not really necessary.  
Due to this reason, the following lines are written for Digital Ocean, but everything you will read is applicable to 
any other cloud provider like Amazon AWS, Google Cloud, Microsoft Azure, Alibaba Cloud or Scaleway.

For the sake of simplicity, we will assume you have selected the following DigitalOcean configuration. 
Please not that this is just an example, but any configuration similar to this one will work perfectly fine.      

| Characteristic | Specification |
| :------------: | :-----------: |
| Operative System | Ubuntu 18.04 or later LTS |
| Number of CPUs | 4 |
| RAM | 16GB |
| SSD | 129GB | 

Also, we need to make sure the following requirements are met: 
* Allow incoming connections on port `26656`
* Have a static IP address
* Have access to the root user

## Mainnet

| Characteristic | Specification |
| :------------: | :-----------: |
| Operative System | Ubuntu 18.04 or later LTS |
| Number of CPUs | 8 |
| RAM | 32GB |
| SSD/NVME | 120GB (need grow up dimension in the future) |

## Next {hide}

Learn how to [System preparation](./system-preparation.md) {hide}