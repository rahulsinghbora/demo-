const container = document.querySelector(".container")
const questionbox = document.querySelector(".questions")
const optionbox = document.querySelector(".options")
const nextbtn = document.querySelector(".btn")
const scorecard = document.querySelector(".scorecard")

/******************making variable******* */
let currentquesindex = 0;
let score = 0

//make an array of object*************************

const quiz = [
    {
        question: "Q. which of the following is not a css box model property ?",
        choices: ["margin", "border", "padding", "border radius"],
        answer: "border-collapse"
    },
    {
        question: "Q.which of the foll is not a valid way to declare a function in js",
        choices: ["function", "{}", "let my function", "declare"],
        answer: "declare"
    },
    {
        question: "Q.which is not a js data types?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q.what  is the purpose of this keyword?",
        choices: ["current function", "current object"],
        answer: "current object"
    }
]

//declaring show question************************
const showquestions = () => {
    const questiondetail = quiz[currentquesindex]
    questionbox.textContent = questiondetail.question;

    for (let i = 0; i < questiondetail.choices.length; i++) {
        const optionall = questiondetail.choices[i]
        const optionvalue = document.createElement("div");
        optionvalue.textContent = optionall;
        optionbox.appendChild(optionvalue)
        optionvalue.classList.add("choice")

       optionvalue.addEventListener("click",()=>{
        if(optionvalue.classList.contains("selected")){
            optionvalue.classList.remove("selected")
        }else{ optionvalue.classList.add("selected")}
       })
    }

}
/************************to check answer************* */
const checkans =()=>{
    const selectedans= document.querySelector('.choice.selected');
   if (selectedans.textContent === quiz[currentquesindex].answer){
    console.log("true"); 
   }
}


nextbtn.addEventListener("click", () => {
    optionbox.textContent = ""
    showquestions();
    checkans();
    if(currentquesindex<quiz.length-1){
        
        currentquesindex++;
    }

})






























/*
const quiz = [
    {
        question: "Q. which of the following is not a css box model property ?",
        choices: ["margin", "border", "padding", "border radius"],
        answer: "border-collapse"
    },
    {
        question: "Q.which of the foll is not a valid way to declare a function in js",
        choices: ["function", "{}", "let my function", "declare"],
        answer: "declare"
    },
    {
        question: "Q.which is not a js data types?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q.what  is the purpose of this keyword?",
        choices: ["current function", "current object"],
        answer: "current object"
    }
]
const showquestions = () => {
    const questiondetails = quiz[currentquesindex];
    questionbox.textContent = questiondetails.question;

    optionbox.textContent = ""
    for (let i = 0; i < questiondetails.choices.length; i++) {
        const currentchoice = questiondetails.choices[i];
        const choicediv = document.createElement("div");
        choicediv.textContent = currentchoice;
        choicediv.classList.add("choice")
        optionbox.appendChild(choicediv)

        choicediv.addEventListener("click",()=>{
          if(choicediv.classList.contains("selected")){
            choicediv.classList.remove("selected")
          }
          else{ choicediv.classList.add("selected")}
        })
    }
}


*/


/*******************check answer*********************** */
/*
const checkanswer=()=>{
   const selectedchoice=document.querySelector(".choice.selected")
   if(selectedchoice.textContent===quiz[currentquesindex].answer){
    alert ("correct")
    score++;
   }else{alert ("wrong")}
}
currentquesindex++;
if (currentquesindex < quiz.length) {
    showquestions()
} else{
    showscore()
}


showquestions();
nextbtn.addEventListener("click", () => {
    checkanswer()
})

*/

/****************************to show score****************** */
/*
const showscore=()=>{
    scorecard.textContent=`you scored ${score} out of ${quiz.length}`;
}
*/