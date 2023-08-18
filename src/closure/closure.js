function saludar() {
    let userName = 'Octavio'

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const s = saludar();
console.log(s);
console.log(s());