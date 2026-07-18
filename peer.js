let peer;
let conn;

export function host(onReceive) {

    peer = new Peer();

    peer.on("open", id => {

        document.getElementById("peerID").textContent = id;

    });

    peer.on("connection", c => {

        conn = c;

        conn.on("data", onReceive);

    });

}

export function connect(hostID, onReceive) {

    peer = new Peer();

    peer.on("open", () => {

        conn = peer.connect(hostID);

        conn.on("open", () => {

            console.log("Connected");

        });

        conn.on("data", onReceive);

    });

}

export function send(data) {

    if (conn && conn.open)
        conn.send(data);

}
