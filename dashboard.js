//_____________________________Quiz app___________________________ 

var question = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName",
        opt2: "let variableName",
        opt3: "const variableName",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "<>",
        ans: "{}"
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseIntrger()",
        opt3: "parseNumber()",
        opt4: "paerseFloat()",
        ans: "parseInt()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        opt1: "/* This is a comment */",
        opt2: "# This is a comment",
        opt3: "$ This is a comment",
        opt4: "// This is a comment",
        ans: "// This is a comment"
    },
    {
        question: "What is the output of console.log(typeof null); in JavaScript?",
        opt1: "null",
        opt2: "object",
        opt3: "undefined",
        opt4: "string",
        ans: "object"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        opt1: "Django",
        opt2: "Flask",
        opt3: "Angular",
        opt4: "Ruby on Rails",
        ans: "Angular"
    },
    {
        question: "How do you define a function in JavaScript?",
        opt1: "function myFunction() {}",
        opt2: "def myFunction() {}",
        opt3: "void myFunction() {}",
        opt4: "function: myFunction() {}",
        ans: "function myFunction() {}"
    },
    {
        question: "Which of the following is the correct way to write an array in JavaScript?",
        opt1: "var colors = 'red', 'green', 'blue';",
        opt2: "var colors = ['red', 'green', 'blue'];",
        opt3: "var colors = (1:'red', 2:'green', 3:'blue');",
        opt4: "var colors = {red, green, blue};",
        ans: "var colors = ['red', 'green', 'blue'];"
    },
    {
        question: "What will be the output of the following code? console.log('5' + 5);",
        opt1: "10",
        opt2: "55",
        opt3: "TypeError",
        opt4: "NaN",
        ans: "55"
    },
    {
        question: "How do you check if a variable x is an array in JavaScript?",
        opt1: "if (x.isArray())",
        opt2: "if (Array.isArray(x))",
        opt3: "if (x.instanceOf(Array))",
        opt4: "if (x === array)",
        ans: "if (Array.isArray(x))"
    },
];

function showContainer() {
    var hidden = document.getElementById("hidden");

    document.getElementById('card').style.display = "none";
    Swal.fire({
        title: `Good Luck`,
        text: `Total questions are 10`,
    });
    hidden.style.display = "block";
}

var index = 0;
var result = 0;

function renderQues() {
    var container = document.getElementById('container');
    var option = document.getElementsByName('option');
    var hidden = document.getElementById("hidden");

    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {

            if (question[index - 1].ans === option[i].value) {
                result++
            }
            console.log(option[i].value, question[index - 1].ans)
        }
    }

    if (!question[index]) {
        if (result <= 5) {
            Swal.fire({
                title: `Failed`,
                text: `Oops! Your sorce is ${result}`,
                icon: "error"
            });
        } else {
            Swal.fire({
                title: `Passed`,
                text: `Congratulation! Your sorce is ${result}`,
                icon: "success"
            });
        }
        document.getElementById('card').style.display = "block";
        hidden.style.display = "none";
        if (index !== 0) {
            index = 0;
            console.log(index)
        }
        return;
    } else {
        container.innerHTML = `
        <p class="question">${index + 1}. ${question[index].question}</p><hr>
        <div class="optionDiv p-2 m-1"><label for="opt1"><input type="radio" name="option" value="${question[index].opt1}" onclick="showBtn()" id="opt1" class="form-check-input">  ${question[index].opt1}</label></div>
        <div class="optionDiv p-2 m-1"><label for="opt2"><input type="radio" name="option" value="${question[index].opt2}" onclick="showBtn()" id="opt2" class="form-check-input">  ${question[index].opt2}</label></div>
        <div class="optionDiv p-2 m-1"><label for="opt3"><input type="radio" name="option" value="${question[index].opt3}" onclick="showBtn()" id="opt3" class="form-check-input">  ${question[index].opt3}</label></div>
        <div class="optionDiv p-2 m-1"><label for="opt4"><input type="radio" name="option" value="${question[index].opt4}" onclick="showBtn()" id="opt4" class="form-check-input">  ${question[index].opt4}</label></div><br>
        <div class="btnDiv">
        <button id="backBtn" class="btn quizbtn hiddenbtn">Back</button>
        <button onclick="renderQues(); showPerBtn()" id="hiddenbtn" class="btn quizbtn">Next</button>
        </div>`


        if (true) {
            document.getElementById('backBtn').addEventListener("click", function () {
                index--
                container.innerHTML = `
            <p class="question">${index}. ${question[index - 1].question}</p><hr>
            <div class="optionDiv p-2 m-1"><label for="opt1"><input type="radio" name="option" value="${question[index - 1].opt1}" onclick="showBtn()" id="opt1" class="form-check-input">  ${question[index - 1].opt1}</label></div>
            <div class="optionDiv p-2 m-1"><label for="opt2"><input type="radio" name="option" value="${question[index - 1].opt2}" onclick="showBtn()" id="opt2" class="form-check-input">  ${question[index - 1].opt2}</label></div>
            <div class="optionDiv p-2 m-1"><label for="opt3"><input type="radio" name="option" value="${question[index - 1].opt3}" onclick="showBtn()" id="opt3" class="form-check-input">  ${question[index - 1].opt3}</label></div>
            <div class="optionDiv p-2 m-1"><label for="opt4"><input type="radio" name="option" value="${question[index - 1].opt4}" onclick="showBtn()" id="opt4" class="form-check-input">  ${question[index - 1].opt4}</label></div><br>
            <div class="btnDiv">
            <button id="backBtn" class="btn quizbtn hiddenbtn">Back</button>
            <button onclick="renderQues(); showPerBtn()" id="hiddenbtn" class="btn quizbtn">Next</button>
            </div>`
                index = index++
                return
            })
            index++
        }



    }
}
renderQues()
document.getElementById('backBtn').addEventListener('click', function () {
    index--
})

function showBtn() {
    var hiddenbtn = document.getElementById('hiddenbtn');
    hiddenbtn.style.display = "block"
}

function showPerBtn() {
    document.getElementById('backBtn').style.display = "block"
}