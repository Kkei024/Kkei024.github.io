console.log("letters test");
let blanks = document.getElementById('lettercont');

let words = [
    "STATE",
    "GOVERNMENT",
    "SOVEREIGNTY",
    "ACCOUNTABILITY",
    "BRANCHES",
    "BOUNDARIES",
    "POWER",
    "TERRITORY",
    "RECOGNITION",
    "SOURCE"
];
let i = 0;

function question() {
    let curren = words[i];

    localStorage.setItem("wordpicker", curren);

    console.log("curren says "+ curren);

    let kawaii = curren.length;

    blanks.innerHTML = `
        <input type="text" class="inp" id="ans" maxlength="${kawaii}" autofocus>
    `;

    
    function disp() {
        if (i <= 8) {
            for (let x = 0 ; x < kawaii ; x++) {
                blanks.innerHTML += `
                <div class="blank">
                <h2 id="text${x}"></h2>
                </div>`;
            }
        }

        else {
            for (let x = 0 ; x < kawaii ; x++) {
                blanks.innerHTML += `
                <div class="blank">
                <h2 id="text${x}">${curren[x]}</h2>
                </div>`;
        }
    }
} disp()

    

    document.addEventListener("keydown", (held) => {
        if (held.repeat) {
            held.preventDefault();
        }

        let answer = document.getElementById('ans').value;
        let y = answer.length - 1;

        if ((y < kawaii) && (held.key != "Backspace")) {
            document.getElementById(`text${y}`).innerText = `${answer[y]}`;
        }
    })
    document.addEventListener("keyup", function(pressed){
        let answer = document.getElementById('ans').value;
        let y = answer.length - 1;


        if ((pressed.key == "Backspace")) {
            y += 1;
            document.getElementById(`text${y}`).innerText = ``;
        }

        else if (y < kawaii) {
            document.getElementById(`text${y}`).innerText = `${answer[y]}`;
        }

        
    });
} 

question();

function nextQ() {
    i = Number(localStorage.getItem('numbers'));
    question();
}
