---
sidebar_position: 1
---

# FundWeave Backend Architecture

## Introduction

The backend architecture of FundWeave is designed to handle user requests and interactions, manage data, and ensure communication with the blockchain network. This document outlines the backend architecture and the main components involved.

## Technology Stack

The primary technology for building the backend is Node.js, an open-source, back-end, JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

Express.js, a minimal and flexible Node.js web application framework, is used to build our APIs. 

## Main Components

### User Management

This component handles user registration, authentication, and profile management. It interacts with the frontend and the database to manage user data.

### Project Management

This component is responsible for handling all actions related to the crowdfunding projects, such as creating, updating, fetching, and deleting projects.

### Transaction Management

This component deals with transactions made on the platform. It records each transaction, communicates with the blockchain network, and updates the database.

### Blockchain Interaction

This component is crucial for interacting with the Ethereum blockchain. It handles the deployment and execution of smart contracts, transactions, and updates the state of the blockchain.

## Communication with Frontend

The backend communicates with the frontend via REST API endpoints. Axios, a promise-based HTTP client, is used on the frontend to make requests to these endpoints.

## Communication with Database

The backend communicates with the MongoDB database using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model the application data.

## Security

Security is a crucial aspect of the backend architecture. We use JSON Web Tokens (JWT) for user authentication, ensuring secure and authorized access to the necessary endpoints.

## Conclusion

This document provides a general overview of the backend architecture of FundWeave. The exact implementation may vary based on the specific requirements and constraints of the project. The key aim is to create a secure, efficient, and scalable backend for the crowdfunding platform.

