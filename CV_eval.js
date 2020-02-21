function switchDisplay(id) {
    let state = document.getElementById(id).style.display;
    if(state === "none") {
        document.getElementById(id).style.display = "block";
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
}
