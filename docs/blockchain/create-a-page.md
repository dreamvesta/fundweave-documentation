---
sidebar_position: 1
---

# FundWeave Blockchain Implementation

## Introduction

FundWeave utilizes the Ethereum blockchain to ensure transparency and security in its crowdfunding operations. This document explains how the Ethereum blockchain is used within the platform and how smart contracts are implemented.

## Ethereum Blockchain

Ethereum is an open-source, blockchain-based platform that enables developers to build and deploy decentralized applications (dApps). FundWeave uses Ethereum's blockchain to handle the transactions and the crowdfunding process.

## Smart Contracts

A key feature of Ethereum is the use of smart contracts - self-executing contracts with the terms of the agreement directly written into code. In FundWeave, smart contracts are used to handle the crowdfunding process.

### Crowdfunding Smart Contract

Each project on the platform has a corresponding smart contract deployed on the Ethereum blockchain. This contract holds the project's funding goal, deadline, and current funds. It also includes functions to invest in the project and to withdraw funds (for both project creator and investors).

The contract operates under the following rules:
- If the project's funding goal is reached by the deadline, the project creator can withdraw the funds.
- If the funding goal is not reached by the deadline, the investors can withdraw their investments.

This setup ensures that funds are only transferred if the project's funding goal is met, providing protection for the investors.

## Interacting with the Blockchain

Web3.js, a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket, is used to interact with the Ethereum network. It's used to deploy the smart contracts, make transactions, and fetch blockchain data.

## Gas and Transactions

Transactions on the Ethereum network require gas, a measure of computational effort. The platform needs to handle the gas costs for deploying contracts and making transactions. These costs can be covered by the platform itself or passed onto the users (either the project creators or investors, depending on the transaction).

## Conclusion

This document provides an overview of how the Ethereum blockchain is implemented within the FundWeave platform. The use of Ethereum and smart contracts allows for a secure and transparent crowdfunding process, ensuring trust within the platform.
