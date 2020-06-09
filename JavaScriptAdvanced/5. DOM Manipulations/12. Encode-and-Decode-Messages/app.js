function encodeAndDecodeMessages() {

    const encodeBtn = document.querySelectorAll('button')[0];
    const encodeMessageArea = document.querySelectorAll('textarea')[0];

    const decodeBtn = document.querySelectorAll('button')[1];
    const decodeMessageArea = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {

        const message = encodeMessageArea.value;
        let encodedMessage = '';

        for (let char of message) {
            let newCharValue = char.charCodeAt(0) + 1;
            encodedMessage += String.fromCharCode(newCharValue);
        }

        encodeMessageArea.value = '';
        decodeMessageArea.value = encodedMessage;
    }

    function decode() {
        const message = decodeMessageArea.value;
        let decodedMessage = '';

        for (let char of message) {
            let newCharValue = char.charCodeAt(0) - 1;
            decodedMessage += String.fromCharCode(newCharValue);
        }

        decodeMessageArea.value = decodedMessage;
    }
}