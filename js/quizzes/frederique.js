// Frederique questions
var myQuestions = [
    {
        question: "Hoi, mijn naam is...",
        answers: {
            a: 'Elske',
            b: 'Sietske',
            c: 'Frederique'
        },
        correctAnswer: 'c'
    },
    {
        question: "Ik heb hondje als huisdier en die heet...",
        answers: {
            a: 'Lulu',
            b: 'Amber',
            c: 'Pip'
        },
        correctAnswer: 'a'
    },
    {
        question: "In het dagelijks leven...",
        answers: {
            a: 'Werk ik bij een kinderopvang',
            b: 'Ben ik veel bezig met schilderen',
            c: 'Begeleid ik mensen met een beperking'
        },
        correctAnswer: 'c'
    },
    {
        question: "Ik hou ontzettend veel van...",
        answers: {
            a: 'Friese muziek',
            b: 'Kijken naar sportkanalen',
            c: 'Lesgeven over dieren'
        },
        correctAnswer: 'a'
    },
    {
        question: "Ik sta ook wel bekend als...",
        answers: {
            a: 'Fire Girl',
            b: 'Dragon Girl',
            c: 'Woman of Flames'
        },
        correctAnswer: 'b'
    },
    {
        question: "Ik sta als model in een kalender, bekend als...",
        answers: {
            a: 'Kalender van bekende Friezen',
            b: 'Boerinnenkalender',
            c: 'Vuurkalender'
        },
        correctAnswer: 'b'
    },
];

var quizContainer = document.getElementById('frederiqueQuiz');
var resultsContainer = document.getElementById('frederiqueResults');
var submitButton = document.getElementById('frederiqueSubmit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // Storing answers and choices
        var output = [];
        var answers;

        // For each question...
        for(var i=0; i<questions.length; i++) {

            // Reset the list of answers
            answers = [];

            // For each available question...
            for(letter in questions[i].answers) {

                // ...add an HTML radio button
                answers.push(
                    '',
                    '<label>'
                    + '<input type="radio" class="me-1" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label><br>'
                );
            }

            // Add this question and its answers in an output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // Combines output list into one string
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        // Gather answers from the containers
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // Keep track of answers from users
        var userAnswer = '';
        var numCorrect = 0;

        // For each question...
        for(var i=0; i<questions.length; i++) {
            // ...find selected answers
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // If the answer is correct...
            if(userAnswer===questions[i].correctAnswer) {
                // ...add to the number of correct answers
                numCorrect++;

                // ...color the answers green
                answerContainers[i].style.color = 'green';
            }
            // If answer is wrong or blank...
            else {
                // ...color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // Show number of correct answers
        resultsContainer.innerHTML = numCorrect + ' goed van de ' + questions.length + ' vragen.';
    }

    // Show questions right away
    showQuestions(questions, quizContainer);

    // Show results on submit
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}