const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(9999, 'localhost', () => {
    console.log('Connected to server');

    rl.question('Enter your username: ', (username) => {
        client.write(username);
    });

    client.on('data', (data) => {
        console.log(data.toString());
    });

    rl.on('line', (input) => {
        client.write(input);
    });

    client.on('close', () => {
        console.log('Connection closed');
        process.exit(0);
    });
});

client.on('error', (err) => {
    console.error(err);
});
