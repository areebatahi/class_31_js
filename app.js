function registration() {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (password.value !== cpassword.value) {
        Swal.fire({
            icon: "error",
            title: "🔐 Password Mismatch",
            text: "Your password and confirm password must be the same!",
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonColor: "#ef4444",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    if (!regex.test(password.value)) {
        Swal.fire({
            icon: "warning",
            title: "⚠️ Weak Password",
            html: `<ul style="text-align:left;">
                <li>At least one lowercase [a-z]</li>
                <li>At least one uppercase [A-Z]</li>
                <li>At least one digit [0-9]</li>
                <li>At least one special char [@.#$!%*?&^]</li>
                <li>Length: 8–15 characters</li>
            </ul>`,
            confirmButtonColor: "#f97316",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    if (phoneNumber.value.length !== 11) {
        Swal.fire({
            icon: "error",
            title: "📞 Invalid Phone Number",
            text: "Phone Number must contain exactly 11 digits.",
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonColor: "#ef4444",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    var userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        cpassword: cpassword.value
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "🎉 Registration Successful",
        showConfirmButton: false,
        timer: 1500,
        background: "#1f2937",
        color: "#ffffff"
    });

    setTimeout(() => {
        window.location.href = "./dashboard.html";
    }, 2000);
}

function login() {
    event.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);

    if (!parseData || !parseData.email || !parseData.password) {
        Swal.fire({
            icon: "error",
            title: "⚠️ No Account Found",
            text: "Please register first.",
            confirmButtonColor: "#ef4444",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    if (parseData.email !== email.value) {
        Swal.fire({
            icon: "error",
            title: "📧 Invalid Email",
            text: "This email is not registered.",
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonColor: "#ef4444",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    if (parseData.password !== password.value) {
        Swal.fire({
            icon: "error",
            title: "🔒 Invalid Password",
            text: "Please check your password again.",
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonColor: "#ef4444",
            background: "#1f2937",
            color: "#ffffff"
        });
        return;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "✅ Login Successful",
        showConfirmButton: false,
        timer: 1500,
        background: "#1f2937",
        color: "#ffffff"
    });

    setTimeout(() => {
        window.location.href = "./dashboard.html";
    }, 1600);
}

function redirect() {
    window.location.href = "./index.html";
}

function getLocalData() {
    var getLocalDataDiv = document.getElementById('getLocalDataDiv');
    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);
    console.log(parseData);
    getLocalDataDiv.innerHTML = ``;
}
getLocalData();
