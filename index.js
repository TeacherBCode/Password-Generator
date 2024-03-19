const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const letters_numbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letters_symbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const letters_numbers_symbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]


const button = document.getElementById("generatePassword");

const passOneBox = document.getElementById("passOneBox");
const passTwoBox = document.getElementById("passTwoBox")
const passOne = document.getElementById("passOne");
const passTwo = document.getElementById("passTwo");
const symbolsBtn = document.getElementById("symbolsBtn");
const numbersBtn = document.getElementById("numbersBtn");


// Characters based on users requirements:
let characters = [];


button.addEventListener("click", function () {
    //To use Numbers and Symbls based on Users Requirements

    characters = letters;
    if (symbolsBtn.checked && numbersBtn.checked) {
        characters = letters_numbers_symbols;
    } else if (numbersBtn.checked) {
        characters = letters_numbers;
    } else if (symbolsBtn.checked) {
        characters = letters_symbols;
    }

    //To get the input from user => Password Length
    let passLen = document.getElementById("passLen").value;

    //To display the password in the text div
    passOne.innerText = passGenerator(passLen);

    //To display the copy me button after
    passOneBox.innerHTML = `<span class="d-flex mt-1 justify-content-center  "> <button  class="btn btn-outline-secondary btn-sm" onclick="copyMeOneClipboard()" >Copy Me <img src="./images/copy.png" width=30px height= 30px;> </button>
    </span>`;


    passTwo.innerText = passGenerator(passLen);
    passTwoBox.innerHTML = `<span class="d-flex mt-1 justify-content-center  "> <button  class="btn btn-outline-secondary btn-sm" onclick="copyMeTwoClipboard()" >Copy Me <img src="./images/copy.png" width=30px height= 30px;> </button>
    </span>`;


});

// To generate Password
function passGenerator(passLen) {
    let passKey = "";
    for (let i = 0; i < passLen; i++) {
        let num = Math.floor(Math.random() * characters.length);
        passKey += characters[num];
    }
    return passKey;
}





// To copy to the clipboard
const showText = document.getElementById("copyMeDisplay")
//First Copy Button
function copyMeOneClipboard() {

    let text = passOne.innerText;
    let input = document.createElement('input');
    input.value = text;
    console.log(input.value);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    showText.innerText = `${input.value} is copied`;
    document.body.removeChild(input);
}

//Second Copy Button
function copyMeTwoClipboard() {

    let text = passTwo.innerText;
    let input = document.createElement('input');
    input.value = text;
    console.log(input.value);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    showText.innerText = `${input.value}  is copied`;
    document.body.removeChild(input);
}

