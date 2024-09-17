function registration() {
    event.preventDefault()
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');
    // console.log(name.value, email.value, phoneNumber.value, password.value, cpassword.value)

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (password.value !== cpassword.value) {
        Swal.fire({
            icon: "error",
            // title: "Oops...",
            text: "password should be same!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else if (!regex.test(password.value)) {
        Swal.fire(`At least one lowercase alphabet i.e. [a-z]
        At least one uppercase alphabet i.e. [A-Z]
        At least one Numeric digit i.e. [0-9]
        At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
        Also, the total length must be in the range [8-15]`);
    } else {
        if (phoneNumber.value.length == 11) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.href = "./dashboard.html"
            }, 2000); z
        } else {
            Swal.fire({
                icon: "error",
                // title: "Oops...",
                text: "Phone Number must contain 11 digits",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    var userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        cpassword: cpassword.value
    }
    // console.log(userData);

    localStorage.setItem("userData", JSON.stringify(userData));
    // var getData = localStorage.getItem("userData");
    // var parseData = JSON.parse(getData);
    // console.log(parseData);

}

function getLocalData() {
    var getLocalDataDiv = document.getElementById('getLocalDataDiv');
    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);
    console.log(parseData)
    getLocalDataDiv.innerHTML = `

    `
}
getLocalData()

function redirect() {
    window.location.href = "./index.html"
}

function login() {
    event.preventDefault()
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);

    if (parseData.email !== email.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else if (parseData.password !== password.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid passward",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Succussfully",
            showConfirmButton: false,
            timer: 1500
        });
        window.location.href = "./dashboard.html"
    }
}