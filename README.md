# VEX IQ Peer Bridge

A browser-based serial bridge for the **VEX IQ Brain User Port** that allows two remote computers to exchange serial data over the Internet.

The application runs entirely in the browser and can be hosted on **GitHub Pages**. It uses the **Web Serial API** to communicate with a local serial device and **PeerJS/WebRTC** to transmit serial data between peers.

## Features

* No server required (other than PeerJS signaling)
* Runs entirely in the browser
* Compatible with GitHub Pages
* Uses Web Serial API
* Host mode

  * Reads data from the local serial port
  * Broadcasts data to connected clients
* Client mode

  * Connects to a host using a Peer ID
  * Writes received data directly to the local serial port
* Low-latency peer-to-peer communication

## Project Structure

```text
.
├── index.html
├── style.css
├── app.js
├── serial.js
├── peer.js
└── README.md
```

## Requirements

### Browser

A Chromium-based browser that supports the Web Serial API, such as:

* Google Chrome
* Microsoft Edge
* Opera

Firefox and Safari do not currently support Web Serial.

### Hardware

Each computer should have:

* A VEX IQ Brain connected through a serial interface that appears as a serial port to the operating system.
* A USB connection (or compatible USB-to-serial adapter) recognized by the browser.

## Hosting

The project is designed to be hosted on GitHub Pages.

1. Create a GitHub repository.
2. Upload all project files.
3. Enable GitHub Pages.
4. Open the generated GitHub Pages URL in a supported browser.

Because GitHub Pages uses HTTPS, the Web Serial API is available without additional configuration.

## Usage

### Host

1. Open the website.
2. Click **Connect Serial**.
3. Select the VEX IQ serial device.
4. Click **Host**.
5. Copy the displayed Peer ID.
6. Send the Peer ID to anyone who should connect.

The host continuously reads bytes from the serial port and sends them to connected clients.

### Client

1. Open the website.
2. Click **Connect Serial**.
3. Select the local VEX IQ serial device.
4. Click **Client**.
5. Enter the Host's Peer ID.
6. Click **Connect**.

Incoming data is immediately written to the local serial port.

## Data Flow

```text
Host VEX IQ Brain
        │
        ▼
 Web Serial API
        │
        ▼
 Host Browser
        │
     PeerJS
        │
        ▼
 Client Browser
        │
 Web Serial API
        ▼
Client VEX IQ Brain
```

## Limitations

* Web Serial requires user permission each time a serial device is selected.
* Browser support is currently limited to Chromium-based browsers.
* The example implementation supports a single client connection. It can be extended to broadcast data to multiple clients.
* The public PeerJS signaling server is intended for development and small projects. For greater reliability, consider hosting your own PeerServer.

## Future Improvements

* Multiple simultaneous clients
* Automatic reconnection
* Serial configuration options
* Packet counters and bandwidth statistics
* Configurable logging
* Optional packet framing and CRC validation
* End-to-end encryption options
* Self-hosted PeerJS signaling server

## License

MIT License

Feel free to use, modify, and distribute this project for educational, personal, or commercial use under the terms of the MIT License.
