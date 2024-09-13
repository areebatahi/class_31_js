
function registration() {
    event.preventDefault()
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');
    // console.log(name.value, email.value, phoneNumber.value, password.value, cpassword.value)

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
    setTimeout(() => {
        window.location.href = "./dashboard.html"
    }, 2);
}

function getLocalData() {
    var getLocalDataDiv = document.getElementById('getLocalDataDiv');
    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);
    console.log(parseData)
    getLocalDataDiv.innerHTML = `
    <ul>
      <li>Name: ${parseData.name} </li>
      <li>Email: ${parseData.email} </li>
      <li>Phone Number: ${parseData.phoneNumber} </li>
    </ul>
    `
}
getLocalData()

function redirect() {
    window.location.href = "./index.html"
}

function login(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var getData = localStorage.getItem("userData");
    var parseData = JSON.parse(getData);
    console.log(parseData);

    if(parseData.email !== email){
        alert('Invalid Email');
    }else if(parseData.password !== parseData){
        alert('Invalid Email');
    }

}