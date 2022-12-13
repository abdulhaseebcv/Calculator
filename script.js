var screen = document.getElementById("outputfield")

function buttonclick(val) {
    screen.value += val
}

function equalClicked() {
    var text = screen.value
    var result = eval(text)
    screen.value = result
}

function cleardisplay() {
    screen.value = ""
}

function deletebtn() {
    screen.value = screen.value.slice(0, -1)
}


