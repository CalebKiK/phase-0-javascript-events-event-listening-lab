const input = document.getElementById("button");

function addingEventListener() {
    function buttonClick() {
        alert ("I was clicked!");
    }
    input.addEventListener("click", buttonClick);
}


