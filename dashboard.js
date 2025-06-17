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

var index = 0;
var result = 0;

function showContainer() {
    var hidden = document.getElementById("hidden");
    document.getElementById('card').classList.add('hidden');
   Swal.fire({
  title: "🎯 Let's Begin!",
  html: `<b>Total Questions:</b> ${question.length}<br><small>Answer wisely! 😎</small>`,
  icon: "info",
  confirmButtonText: "Start Quiz",
  confirmButtonColor: "#00c9ff",
  background: "#1f2937",
  color: "#fff",
});

    hidden.style.display = "block";
    renderQues();
}

function renderQues() {
    var container = document.getElementById('container');
    var option = document.getElementsByName('option');
    var hidden = document.getElementById("hidden");

    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            if (question[index - 1].ans === option[i].value) {
                result++;
            }
        }
    }

    if (index >= question.length) {
        if (result <= 5) {
            Swal.fire({
  title: "😢 Oops, You Failed!",
  text: `Your score is ${result}. Better luck next time!`,
  icon: "error",
  confirmButtonText: "Try Again",
  confirmButtonColor: "#ff416c",
  background: "#1f2937",
  color: "#fff",
});

        } else {
            Swal.fire({
  title: "🎉 Congratulations!",
  text: `You passed the quiz with a score of ${result}!`,
  icon: "success",
  confirmButtonText: "Awesome!",
  confirmButtonColor: "#00c9ff",
  background: "#1f2937",
  color: "#fff",
});

        }
        hidden.style.display = "none";
        index = 0;
        result = 0;
        return;
    }

    container.innerHTML = `
        <p class="question">${index + 1}. ${question[index].question}</p><hr>
        <div class="optionDiv p-2 m-1"><label><input type="radio" name="option" value="${question[index].opt1}" onclick="showBtn()" class="form-check-input"> ${question[index].opt1}</label></div>
        <div class="optionDiv p-2 m-1"><label><input type="radio" name="option" value="${question[index].opt2}" onclick="showBtn()" class="form-check-input"> ${question[index].opt2}</label></div>
        <div class="optionDiv p-2 m-1"><label><input type="radio" name="option" value="${question[index].opt3}" onclick="showBtn()" class="form-check-input"> ${question[index].opt3}</label></div>
        <div class="optionDiv p-2 m-1"><label><input type="radio" name="option" value="${question[index].opt4}" onclick="showBtn()" class="form-check-input"> ${question[index].opt4}</label></div><br>
        <div class="btnDiv">
            ${index > 0 ? '<button onclick="goBack()" class="btn quizbtn hiddenbtn">Back</button>' : ''}
            <button onclick="nextQues()" id="hiddenbtn" class="btn quizbtn" style="display:none;">Next</button>
        </div>`;
}

function nextQues() {
    index++;
    renderQues();
}

function goBack() {
    index--;
    renderQues();
}

function showBtn() {
    var hiddenbtn = document.getElementById('hiddenbtn');
    if (hiddenbtn) hiddenbtn.style.display = "inline-block";
}
