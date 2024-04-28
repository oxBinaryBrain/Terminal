# Terminal Chat Application - JavaScript Client

This is a simple terminal-based chat client written in JavaScript using Node.js. It allows users to connect to a chat server and send messages.

## Requirements

- Node.js installed on your system

## Installation

1. Clone this repository or download the client.js file.
2. Navigate to the directory containing client.js in your terminal.

## Usage

1. Start the client by running the following command:
2. Enter your username when prompted and press Enter.
3. Start typing messages and press Enter to send them to the chat server.
4. You will see messages from other users appearing in the terminal.

## Dependencies

- `net`: This module provides an asynchronous network API for creating stream-based TCP servers (net.Server) and clients (net.Socket).
- `readline`: This module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

## Notes

- Make sure to start the chat server before running the client. The client will attempt to connect to the server at 'localhost' on port 9999 by default. If your server is running on a different host or port, you may need to modify the client.js file accordingly.
- This client code assumes a basic understanding of how to run JavaScript code using Node.js in a terminal environment.
- This is a basic implementation and lacks features such as error handling, user authentication, and user interface enhancements. It's intended as a starting point for building more complex chat applications.
- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


