const net = require('net');

// Admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "adminpass";

// List of connected users
const connectedUsers = {};

// Function to broadcast message to all clients
function broadcast(message) {
    for (const userSocket of Object.values(connectedUsers)) {
        userSocket.write(message);
    }
}