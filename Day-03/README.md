# Day 03 – REST API Basics using Node.js & Express

## Overview
On Day 03, I worked on understanding the fundamentals of backend development by creating a basic REST API using Node.js and Express. The main goal of this task was to understand how a server is created, how it listens for client requests, and how data is exchanged between the client and server using HTTP methods.

This day focused more on **concept clarity with hands-on implementation**, rather than just theory.

---

## Topics Covered
- What an API is and why it is needed
- Client–Server architecture
- REST APIs and REST principles
- HTTP methods (GET and POST)
- JSON data handling in backend
- Testing APIs using browser and Postman
- Difference between GET and POST requests

---

## Key Concepts Explained

### What is an API?
An API (Application Programming Interface) acts as a bridge between the client and the server. It allows the client to request data or send data to the server in a structured and standardized way using HTTP.

---

### Client–Server Architecture
In a client–server model:
- The **client** (browser, frontend, Postman, etc.) sends a request
- The **server** processes the request
- The server sends back a response (usually in JSON format)

This separation allows frontend and backend to work independently.

---

### What is a REST API?
A REST API follows a set of architectural rules where:
- Each request is independent (stateless)
- HTTP methods define the type of operation
- Data is usually exchanged in JSON format

REST makes APIs simple, scalable, and easy to use.

---

### HTTP Methods Used

#### GET Method
- Used to **fetch data** from the server
- Can be tested directly in the browser
- Does not send data in the request body

#### POST Method
- Used to **send data** to the server
- Requires a request body
- Cannot be tested directly from the browser URL bar
- Must be tested using tools like Postman or frontend code

---

## Implementation Details
In this project:
- An Express server was created using Node.js
- `express.json()` middleware was used to parse incoming JSON data
- A GET API endpoint was created to send a confirmation message
- A POST API endpoint was created to accept JSON input and return it in the response
- APIs were tested locally to verify correct request–response flow

---

## API Endpoints

### GET `/message`
**Purpose:**  
Used to check whether the server is running properly.

**Response:**
```json
{
  "message": "API is working 🚀"
}
