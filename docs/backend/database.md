---
sidebar_position: 2
---

# FundWeave Database Architecture and Usage of MongoDB

## Introduction

FundWeave uses MongoDB as its primary database. This document explains the database architecture and how MongoDB is used in the context of FundWeave.

## MongoDB and FundWeave

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.

For FundWeave, MongoDB is used to store user data, project data, and transaction data. It provides flexibility, scalability, and is well-suited for handling large amounts of data with diverse structures.

## Database Schema

### User Collection

The User collection stores user data, including username, password (hashed and salted for security), email, and investment history.

### Project Collection

The Project collection stores data about each crowdfunding project. This includes the project title, description, funding goal, current funds, deadline, and creator details.

### Transaction Collection

The Transaction collection stores the details of each transaction, including the sender, receiver, amount, date/time, and associated project.

## Interacting with MongoDB

Mongoose, a MongoDB object modeling tool, is used to interact with the database. It provides a schema-based solution to model the application data and includes built-in type casting, validation, query building, and business logic hooks.

## Indexing

For efficient querying, MongoDB supports indexing on any field in the data record. For FundWeave, indexing can be particularly beneficial for fields that are frequently queried, such as user id, project id, and transaction id.

## Conclusion

This document provides an overview of the database architecture for the FundWeave platform and how MongoDB is used. Given MongoDB's flexibility and scalability, it is well-suited to support the diverse and potentially large data needs of the crowdfunding platform.

