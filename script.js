const quizData = [
    {
        q:"Q.1 Javascript is an _______ language?",
        option:["1.Object_Base","2.Object-Oriented","3.procedural","4.None of the above"],
        answer:"2.Object-Oriented",
    },
    {
        q:"Q.2 Which of the following keywords is used to define a variable in Javascript?",
        option:["1.var","2.let","3.Both A and B","4.None of the above"],
        answer:"3.Both A and B",
    },
    {
        q:"Q.3 Which of the following methods can be used to display data in some form using Javascript?",
        option:["1.document.write()","2.console.log","3.Window.alert","4.All of the above"],
        answer:"4.All of the above",
    },
    {
        q:"Q.4 How can a datatype be declared to be a constant type?",
        option:["1.const","2.var","3.let","4.constant"],
        answer:"1.const",
    },
    {
        q:"Q.5 When an operator’s value is NULL, the typeof returned by the unary operator is:",
        option:["1.Boolean","2.Undefined","3.Object","4.Integer"],
        answer:"3.Object",
    }
];
let landingPage = document.querySelector('#question-box');

landingPage.innerHTML = '<h1>Start Quiz</h1><br>Click on Next';
landingPage.style = "align-items: center;";


let nextBtn = document.getElementById('next-button');
nextBtn.innerHTML = "Start";
nextBtn.style = 'font-size:35px;';



let subBtn = document.getElementById('submit-button');

subBtn.innerHTML = '';
subBtn.style = 'all:unset;'





let score = 0;

function next(i){

    subBtn.innerHTML = "Submit";
    subBtn.style = 'all:set;'
  

    if(i<=quizData.length-1){
        nextBtn.textContent = 'Next';
        nextBtn.style = `all:set`;
    }
    
    let question = document.getElementById('question-box');

    let optionText = document.createElement('div')

    question.innerHTML = quizData[i].q;

    

    let optfrag = document.createDocumentFragment();

    for (let key of quizData[i].option) {
        
        let optNew = document.createElement('button');
        optNew.textContent = key;

        
        
        optNew.addEventListener('click',(e)=>{

            let ans =  quizData[i].answer;
    
            if( e.target.textContent == ans ){
                score++;
            }

            oncall();
            
        });
        optfrag.appendChild(optNew);
        optionText.appendChild(optfrag);
    }
    
    question.appendChild(optionText);


}

let k=0;

function oncall(){
    if(k<quizData.length){
        next(k);
    }
    if(k == quizData.length){

        let question = document.getElementById('question-box');
        question.innerHTML = "<h2>Congratulation</h2><br> <p>You Have Successfully Completed the QUIZ<h4><br>SUBMIT</h4><br> TO KNOW YOUR SCORE </p>";
        question.style.textAlign = 'center';

        
        nextBtn.innerHTML = "";
        nextBtn.style = `all:unset`;
        d=0;
        
    }    
    k++;
}


let d=0;
function submitBtn(){

    d++;

    let question = document.getElementById('question-box');

    let gifContainer = document.createElement('div');
    gifContainer.style = "width:100%; height:100%; align-items: center;"

    let emoji = document.createElement('img');
    
    question.innerHTML = "<h4><br><br>Your Score<br><h4>" +score+"/5";
    question.style.textAlign = 'center';
    

    if(score>=5){
        emoji.src = "firework-1.webp";
        emoji.style = "width:100%; height:83%;";
       
    }else{
        emoji.src = "f.gif";
        emoji.style = "width:50%; height:70%";
    }
    gifContainer.appendChild(emoji);
    question.appendChild(gifContainer);
    
    subBtn.innerHTML = "Try Again";
    subBtn.style = ` background: #1E5128; color: #D8E9A8;`;
    if(d>1){
        score = 0;
        k=0;
        d=0;
        oncall();
        starting(); 
    
    }  
}
//end //








