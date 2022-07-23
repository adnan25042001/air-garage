let form = document.querySelector("form");
form.addEventListener("submit", checkuser);

let data = JSON.parse(localStorage.getItem("userData")) || [];

function checkuser(event) {
    event.preventDefault();

    if (form.email.value == "" || form.password.value == "") {
        alert("Fill all fields");
        return;
    }
    let flag = false;
    for (let i = 0; i < data.length; i++) {
        if (
            form.email.value == data[i].email &&
            form.password.value == data[i].password
        ) {
            flag = true;
            break;
        }
    }
    if (flag == true) {
        alert("Login Successfull");
        window.location.href = "index.html";
    } else {
        alert("Wrong Credentials!");
    }
}
