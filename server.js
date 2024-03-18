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

// Create server
const server = net.createServer((socket) => {
    socket.setEncoding('utf-8');

    socket.write("Welcome to the chat!\n");

    socket.on('data', (data) => {
        const message = data.trim();
        const username = socket.username;

        if (username === undefined) {
            if (message === ADMIN_USERNAME) {
                socket.username = ADMIN_USERNAME;
                socket.write("Please enter the admin password: ");
            } else {
                connectedUsers[username] = socket;
                broadcast(`${username} has joined the chat.\n`);
            }
        } else if (username === ADMIN_USERNAME) {
            if (message === ADMIN_PASSWORD) {
                socket.write("You are now authenticated as admin.\n");
                // TODO: Implement admin commands
            } else {
                socket.write("Invalid admin password. Closing connection.\n");
                socket.end();
            }
        } else {
            broadcast(`${username}: ${message}\n`);
        }
    });

    socket.on('end', () => {
        const username = socket.username;
        if (username !== undefined && username !== ADMIN_USERNAME) {
            delete connectedUsers[username];
            broadcast(`${username} has left the chat.\n`);
        }
    });

    socket.on('error', (err) => {
        console.error(err);
    });
});

server.listen(9999, () => {
    console.log('Server started. Waiting for connections...');
});
