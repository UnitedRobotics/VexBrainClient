let port;
let reader;
let writer;

export async function connectSerial() {

    port = await navigator.serial.requestPort();

    await port.open({
        baudRate: 115200
    });

    reader = port.readable.getReader();
    writer = port.writable.getWriter();

    return port;
}

export async function readLoop(callback) {

    while (true) {

        const {value, done} = await reader.read();

        if (done)
            break;

        if (value)
            callback(value);

    }

}

export async function writeData(data) {

    await writer.write(data);

}
