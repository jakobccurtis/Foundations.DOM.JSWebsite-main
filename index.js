const body = document.querySelector("body");
const mathCards = document.querySelector("#math-cards")
const userProfile = document.querySelector("#user-profile")
const messageForm = document.querySelector("#message-form")

// Math Cards code
// Tags
const mathCardTitle = document.createElement("h1");
mathCards.appendChild(mathCardTitle);
mathCardTitle.textContent = "Math Study Cards";
const lineBreak = document.createElement("p");
for(i = 0; i < 4; i++){
    const mathCard = document.createElement("div");
    mathCard.setAttribute('id','1234'[i])
    mathCards.appendChild(mathCard);
}

let id1 = document.getElementById("1");
let id2 = document.getElementById("2");
let id3 = document.getElementById("3");
let id4 = document.getElementById("4");

for(i = 0; i < 4; i++){
    const numbers = document.createElement("p");
    numbers.setAttribute("id", "5678"[i])
    id1.appendChild(numbers);
}

let id5 = document.getElementById("5");
let id6 = document.getElementById("6");
let id7 = document.getElementById("7");
let id8 = document.getElementById("8");

id5.innerHTML = "131";
id6.innerHTML = "+";
id7.innerHTML = "13";
id8.innerHTML = "144";
id7.appendChild(lineBreak);

lineBreak.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"
//MathCard1 Style
mathCardTitle.style.textDecoration = "underline";
id1.style.backgroundColor = "gray";
id1.style.width = "100px";
id1.style.height = "auto";
id6.style.display = "inline";
id7.style.display = "inline";
lineBreak.style.textDecoration = "underline";
