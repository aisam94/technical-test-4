# Random Hash Machine (RHM) Application

This is an API Service for a Random Hash Machine(RHM) application.

There are two API endpoints:

- '/hash': return a unique hash string and not repeatable. This endpoint shall only return after 1 seconds.
- '/odd-num-hash': keep requesting a hash string from endpoint '/hash', and this endpoint shall only return a success response body when last 1 character of the hash is a number and it is an odd number.

## Installation

- install packages dependencies via 'npm install'

## Usage

- run the server via 'npm run dev'
- send GET request to 'http://localhost:5000/hash' for the first endpoint and 'http://localhost:5000/odd-num-hash' for the second endpoint

## Load Testing

using Artillery is preferred for the load testing

- install Artillery via 'npm install -g artillery'
- run artillery via 'artillery run load-test.yaml'