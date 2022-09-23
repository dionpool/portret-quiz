// Joop questions
var myQuestions = [
    {
        question: "Hoi, mijn naam is...",
        answers: {
            a: 'Bas',
            b: 'Piter',
            c: 'Jeroen'
        },
        correctAnswer: 'b'
    },
    {
        question: "Mijn beroep is...",
        answers: {
            a: 'Boswachter',
            b: 'Geschiedenis leraar',
            c: 'Muziekant'
        },
        correctAnswer: 'c'
    },
    {
        question: "En ik woon al mij hele leven in...",
        answers: {
            a: 'Dokkum',
            b: 'Leeuwarden',
            c: 'Marsum'
        },
        correctAnswer: 'c'
    },
    {
        question: "Iets wat mij echt raakt is...",
        answers: {
            a: 'De Friese taal',
            b: 'De natuur',
            c: 'Muziek'
        },
        correctAnswer: 'a'
    },
    {
        question: "Iets anders wat ik erg leuk vind is...",
        answers: {
            a: 'Voetballen',
            b: 'De wereld zien',
            c: 'Naar de film gaan'
        },
        correctAnswer: 'b'
    },
    {
        question: "Ik beschouw Friesland als...",
        answers: {
            a: 'Mijn thuis',
            b: 'De beste plek op aarde',
            c: 'Een fanastische omgeving'
        },
        correctAnswer: 'a'
    },
];

var quizContainer = document.getElementById('piterQuiz');
var resultsContainer = document.getElementById('piterResults');
var submitButton = document.getElementById('piterSubmit');

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