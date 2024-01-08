function add_number() {
     
    let first_number = parseInt(document.getElementById("firstInput").value);
    let second_number = parseInt(document.getElementById("secondInput").value);

    if (isNaN(first_number) || isNaN(second_number)) {
        alert("Please enter valid numbers in both fields");
        return;
    }

    let result = first_number + second_number;
    document.getElementById("result").value = result;
}

function eraseText() {
    document.getElementById("firstInput").value = "";
    document.getElementById("secondInput").value = "";
    document.getElementById("result").value = "";
}