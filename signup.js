let form = document.querySelector("form");
form.addEventListener("submit", data)

let dataArr = JSON.parse(localStorage.getItem("userData")) || [];

function data(event) {
    event.preventDefault()

    let check = false
    if (document.querySelector("#check").checked) {
        check = true
    }

    if (form.firstName.value == "" || form.lastName.value == "" || form.email.value == "" || form.password.value == "") {
        alert("Fill all fields!")
        return
    }
    if (check == false) {
        alert("Checkbox is empty!")
        return
    }
    for(let i=0;i<dataArr.length;i++){
        if(form.email.value==dataArr[i].email){
            alert("Email already exists!")
            return
        }
    }

    let dataObj = {
        name: form.firstName.value + " " + form.lastName.value,
        email: form.email.value,
        password: form.password.value,
    }

    dataArr.push(dataObj),
        localStorage.setItem("userData", JSON.stringify(dataArr))

    alert("Signup Successfull")
    window.location.href = "index.html"
} 
