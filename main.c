#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 9999
#define BUFFER_SIZE 1024

int main() {
    int client_socket;
    struct sockaddr_in server_addr;
    char username[BUFFER_SIZE];
    char message[BUFFER_SIZE];
    char buffer[BUFFER_SIZE];

    // Create socket
    client_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (client_socket == -1) {
        perror("Error creating socket");
        exit(EXIT_FAILURE);
    }

    // Set server information
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    server_addr.sin_addr.s_addr = inet_addr("127.0.0.1");

    // Connect to server
    if (connect(client_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == -1) {
        perror("Error connecting to server");
        exit(EXIT_FAILURE);
    }

    // Get username from user
    printf("Enter your username: ");
    fgets(username, BUFFER_SIZE, stdin);
    username[strcspn(username, "\n")] = 0; // Remove newline character

    // Send username to server
    send(client_socket, username, strlen(username), 0);

    // Receive welcome message from server
    recv(client_socket, buffer, BUFFER_SIZE, 0);
    printf("%s\n", buffer);

    // Main loop to send and receive messages
    while (1) {
        printf("> ");
        fgets(message, BUFFER_SIZE, stdin);
        message[strcspn(message, "\n")] = 0; // Remove newline character

        // Send message to server
        send(client_socket, message, strlen(message), 0);

        // Receive message from server
        recv(client_socket, buffer, BUFFER_SIZE, 0);
        printf("%s\n", buffer);
    }

    // Close socket
    close(client_socket);

    return 0;
}
