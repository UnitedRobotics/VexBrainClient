import * as serial from "./serial.js";
import * as peer from "./peer.js";

const log = document.getElementById("log");

function println(s) {
    log.textContent += s + "\n";
}

document.getElementById("serialBtn").onclick = async () => {

    await serial.connectSerial();

    println("Serial Connected");

};

document.getElementById("hostBtn").onclick = () => {

    document.getElementById("hostPanel").hidden = false;

    peer.host(async data => {

        await serial.writeData(new Uint8Array(data));

    });

    serial.readLoop(data => {

        peer.send(data);

    });

};

document.getElementById("clientBtn").onclick = () => {

    document.getElementById("clientPanel").hidden = false;

};

document.getElementById("connectBtn").onclick = () => {

    const id = document.getElementById("hostID").value;

    peer.connect(id, async data => {

        await serial.writeData(new Uint8Array(data));

    });

};
