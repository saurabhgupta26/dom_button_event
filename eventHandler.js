// making a click event as when it get clicked, a prompt opens and the text in the entered will be put on the button text.
//1 selecting the button

let btn = document.querySelector("button");

function clickedEvent() {
    let text = prompt("Enter the text for button");
    btn.innerText = text;
}

//2 manipulating the element

btn.addEventListener("click",clickedEvent);