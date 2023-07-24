const questions = [
    {
        question: "In what year did the first website go live ?",
        optionA: "1989",
        optionB: "1991",
        optionC: "5 days",
        optionD: "7 days",
        correct: "optionB"
    },

    {
        question: "Which of the following is an example of a soft skill ?",
        optionA: "Problem solving",
        optionB: "Time management",
        optionC: "Communication abilities",
        optionD: "All Options",
        correct: "optionD"
    },

    {
        question: "What document acts as an overall outline for a project ?",
        optionA: "Meeting Minutes Document",
        optionB: "User Manual",
        optionC: "Design Concept",
        optionD: "Design Brief",
        correct: "optionD"
    },

    {
        question: "Please fill in the blank. _______ sit between columns and rows.",
        optionA: "Modules",
        optionB: "Format",
        optionC: "Gutters",
        optionD: "Margins",
        correct: "optionC"
    },

    {
        question: "How many heading elements are there in HTML ?",
        optionA: "2",
        optionB: "3",
        optionC: "6",
        optionD: "12",
        correct: "optionC"
    },

    {
        question: "What does HSL stand for in CSS ?",
        optionA: "Hue Saturation Lightness",
        optionB: "Howling Sound Language",
        optionC: "High Saturation Level",
        optionD: "Hyperlink Styling Language",
        correct: "optionA"
    },

    {
        question: "What properties can be defined with the border shorthand ?",
        optionA: "border-color",
        optionB: "border-width",
        optionC: "border-style",
        optionD: "All Options",
        correct: "optionD"
    },

    {
        question: "What is the default value of the position property ?",
        optionA: "static",
        optionB: "relative",
        optionC: "absolute",
        optionD: "fixed",
        correct: "optionA"
    },

    {
        question: "What is the full form of URL ?",
        optionA: "Unconventional Resource Link",
        optionB: "Uniform Resource Locator",
        optionC: "Unique Resource Link",
        optionD: "User Resource Locator",
        correct: "optionB"
    },

    {
        question: "Who created HTML and in what year was it first released ?",
        optionA: "Tim Berners-Lee, 1991",
        optionB: "Bill Gates, 1994",
        optionC: "Mark Zuckerberg, 2003",
        optionD: "Steve Jobs, 1997",
        correct: "optionA"
    },

    {
        question: "What does the <tr> tag define ?",
        optionA: "A table row",
        optionB: "A table header",
        optionC: "A table column",
        optionD: "A table cell",
        correct: "optionA"
    },

    {
        question: "What does the abbreviation HTML stand for ?",
        optionA: "High-Tech Machine Language",
        optionB: "Hypertext Markup Language",
        optionC: "High-Tech Mailing Listing",
        optionD: "Hypertext Marketing Language",
        correct: "optionB"
    },


    {
        question: "What property can be used to avoid double border effects for our tables ?",
        optionA: "table-collapse",
        optionB: "table-separate",
        optionC: "border-collapse",
        optionD: "border-separate",
        correct: "optionC"
    },

    {
        question: "What does CSS stand for ?",
        optionA: "Cascading Style Sheets",
        optionB: "Creative Style Sheets",
        optionC: "Computer System Software",
        optionD: "Cascading Style Scripts",
        correct: "optionA"
    },

    {
        question: "In what year was JavaScript created ?",
        optionA: "1990",
        optionB: "1995",
        optionC: "2005",
        optionD: "2010",
        correct: "optionB"
    },

    {
        question: "Which of the following are different ways to add JavaScript to a project ?",
        optionA: "Inline scripting",
        optionB: "External scripting",
        optionC: "Internal scripting",
        optionD: "All Options",
        correct: "optionD"
    },

    {
        question: "What is the extension of an external JavaScript file ?",
        optionA: ".java",
        optionB: ".js",
        optionC: ".html",
        optionD: ".css",
        correct: "optionB"
    },

    {
        question: "What is the value of a declared variable that has yet to be assigned a value ?        ",
        optionA: "0",
        optionB: "false",
        optionC: "undefined",
        optionD: "empty",
        correct: "optionC"
    },

    {
        question: "Which of the following is NOT a relational operator ?",
        optionA: "<",
        optionB: ">",
        optionC: ">=",
        optionD: "=",
        correct: "optionD"
    },

    {
        question: "Which of the following is NOT a logical operator ?",
        optionA: "||",
        optionB: "&&",
        optionC: ">",
        optionD: "!=",
        correct: "optionC"
    },

    {
        question: "What is the name of the notation syntax used to access an array item using its index ?",
        optionA: "Summation Notation",
        optionB: "Pi Notation",
        optionC: "Set Notation",
        optionD: "Bracket Notation",
        correct: "optionD"
    },

    {
        question: "Which of the following examples would increase the value of the num variable by 1 ?",
        optionA: "num = num + 1",
        optionB: "num++",
        optionC: "num += 1",
        optionD: "All of the above",
        correct: "optionD"
    },

    {
        question: "Fill in the blank: A value is to a _____ what a function is to a _______.",
        optionA: "noun, verb",
        optionB: "adjective, adverb",
        optionC: "verb, noun",
        optionD: "noun, pronoun",
        correct: "optionA"
    },

    {
        question: "What are the input values of a function called ?",
        optionA: "Variables",
        optionB: "Inputs",
        optionC: "Operands",
        optionD: "Parameters",
        correct: "optionD"
    },

    {
        question: "What does DOM stand for ?",
        optionA: "Data Object Model",
        optionB: "Document Object Method",
        optionC: "Document Object Model",
        optionD: "Design Object Method",
        correct: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold random questions

//function to shuffle and push 10 questions to shuffledQuestions array
function handleQuestions() {     
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to the DOM
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current question 
    const currentQuestionAnswer = currentQuestion.correct //gets current question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (the radio inputs)
    let correctOption = null

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
            break;
        }
    }
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green";
          playerScore++;
          indexNumber++;
          // Set a delay for updating the question number when the next question loads
          setTimeout(() => {
            questionNumber++;
          }, 1000);
          break; // Exit the loop since we found the correct option
        }
        
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    
    }
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    }
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}