function makeButtons() {
    document.getElementById("makeButtons").disabled = true; // disable button to make the buttons
    let numberOfButtons = document.getElementById("number").value;
    let mainDiv = document.getElementsByTagName("div")[0];
    let buttonsDiv = document.createElement("div");
    mainDiv.appendChild(buttonsDiv);
    buttonsDiv.className = "text";
    buttonsDiv.id = "buttonsDiv";
    for (let i = 1; i <= numberOfButtons; ++i) { // create buttons
        let button = document.createElement("button");
        button.innerHTML = "butonul " + i;
        button.id = i;
        button.className = "innerButtons";
        button.setAttribute("onclick", "javascript: checkButton(this.id);");
        buttonsDiv.appendChild(button);
    }
}

function checkButton(clicked_id) {
    let goodButtonId = Math.floor(Math.random() * document.getElementById("number").value) + 1;
    let text = document.createElement("div");
    let mainDiv = document.getElementsByTagName("div")[0];
    if (clicked_id == goodButtonId) {
        text.innerHTML = "Ai castigat!";
    } else {
        text.innerHTML = "Ai pierdut!";
    }
    mainDiv.appendChild(text);
    text.id = "textDiv";
    let nodes = document.getElementById("buttonsDiv").getElementsByTagName('*'); // disable buttons after click
    for(let i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;
    }
}

resetButton.addEventListener('click', deleteDivs => {
    document.getElementById("makeButtons").disabled = false; // enable button to make buttons
    let containerButtons = document.getElementById("buttonsDiv");
    let containerText = document.getElementById("textDiv");
    containerButtons.remove(); 
    containerText.remove(); 
   
});