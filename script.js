let question = {
    title: 'What song did the Grateful Dead play the most amount of times live?',
    alternatives: ['Sugar Magnolia', 'Drums', 'Space', "Truckin'"],
    correctAnswer: 1
};

//define array that stores all questions
let questions = [
    {
        title: 'What song did the Grateful Dead play the most amount of times live?',
        alternatives: ['Sugar Magnolia', 'Drums', 'Space', "Truckin'"],
        correctAnswer: 1
    },
    {
        title: 'Who was the first keyboardist?',
        alternatives: ['Ron "Pigpen" McKernan', 'Keith Godchaux', 'Tom Constanten', 'Jeff Chimenti'],
        correctAnswer: 0
    },
    {
        title: 'What was the band called before they were called Grateful Dead?',
        alternatives: ['The Ungrateful Dead', 'Benny and the Jets', 'The Warlocks', 'Phish'],
        correctAnswer: 2
    },
    {
        title: 'What instrument did Phil Lesh play?',
        alternatives: ['Bass', 'Clarinet', 'Violin', 'Guitar'],
        correctAnswer: 0
    },
    {
        title: 'What city did the band form in?',
        alternatives: ['Los Angeles', 'San Francisco', 'Dubuque', 'Detroit'],
        correctAnswer: 1
    },
    {
        title: 'Which of these is not an actual album name?',
        alternatives: ['Aoxomoxoa', 'Live Dead', 'Skull & Roses', 'I Love You Jesus Christ'],
        correctAnswer: 3
    },
    {
        title: "What was the band's most played at venue?",
        alternatives: ['Alpine Valley', 'Oakland Coliseum', 'Fillmore East', 'The Majestic'],
        correctAnswer: 1
    },
    {
        title: 'How many shows did the band play on their Europe 1972 tour?',
        alternatives: ['22', '40', '11', '300'],
        correctAnswer: 0
    },
];

let app = {
    start: function() {

        this.currPosition = 0;
        this.score = 0;

        let alts = document.querySelectorAll('.alternative')
        //get alternatives

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

        //refresh stats
        this.updateStats();

        //show first question
        this.showQuestion(questions[this.currPosition]);
    },
    showQuestion: function(q) {
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        //show alternatives
        let alts = document.querySelectorAll('.alternative')

        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function(userSelected) {
        let currQuestion = questions[this.currPosition];
        
        if(currQuestion.correctAnswer == userSelected) {
            //correct
            console.log('correct');
            this.score++;
            this.showResult(true);
        }
        else {
            //not correct
            console.log('wrong');
            this.showResult(false);
        }

        //refresh stats
        this.updateStats();

        //increase position
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        //increase current position
        this.currPosition++;

        if(this.currPosition == questions.length){
            //send back to beginnning
            this.currPosition = 0;
        }
    },
    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';
        
        //checks
        if(isCorrect) {
            result = 'Correct Answer!';
        }
        else{
            //get current question
            let currQuestion = questions[this.currPosition];

            //get correct answer (index)
            let correctAnswIndex = currQuestion.correctAnswer;

            //get correct answer (text)
            let correctAnswText = currQuestion.alternatives[correctAnswIndex];

            result = `Wrong! Correct answer: ${correctAnswText}`;
        }

        resultDiv.textContent = result;
    }
}

app.start();