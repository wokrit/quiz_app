//dummy questions
const questions = [
    {
        question:"What is the capital city of Nigeria",
        answers: ["Lagos", "Abia", "Portharcourt", "Abuja"],
        correct: 3
    },
    {
        question:"What is the full meaning of Lmao",
        answers: ["Lmao na", "Laughing my a** off", "wo e no get meaning", "omo!!!"],
        correct: 1
    },
    {
        question:"Who is your guy?",
        answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
        correct: 2
    }
]

let currQuestion = 0
let score = 0

function displayQuestion(){
    document.getElementById('question').innerText = questions[currQuestion].question
    const answers = questions[currQuestion].answers
    const answerOptions = answers.map((answer, index) => 
        `<button class = "option" onclick = selectAnswer(${index})>${answer}</button>`
    ).join('');
    document.getElementById('options').innerHTML = answerOptions
}
 function selectAnswer(index) {
    if (index === questions[currQuestion].correct){
        score++
    }
    document.getElementById('next').disabled = false
 }

 document.getElementById('next').addEventListener('click', () =>{
    currQuestion++
    if(currQuestion < questions.length){
        displayQuestion();
        document.getElementById('next').disabled = true
    } else {
        document.getElementById('result').innerHTML = `<p>Your Total Score is: ${score}/${questions.length}</p>`
    }
 })

 displayQuestion()
