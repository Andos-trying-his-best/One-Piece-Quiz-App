//BeginQuiz block
const beginsection = document.getElementById("BeginID");
const beginbutton = document.getElementById("BeginButtonID");
const quizresultsection = document.getElementById("QuizResultsID");
const appsection = document.getElementById("AppID");
const quizimage = document.getElementById("ImageID");
const quizresultsimage = document.getElementById("quizresultsimageID");
const app = document.getElementById("ContentID");

beginbutton.addEventListener("click",()=>{
    appsection.style.display = "block";
    beginsection.style.display = "none";
})
//

//quiz counter block
const quizcounter = document.getElementById("QuestionCounterID");
const option1 = document.getElementById("Option1ID");
const option2 = document.getElementById("Option2ID");
const option3 = document.getElementById("Option3ID");

const option1text = document.getElementById("p1ID");
const option2text = document.getElementById("p2ID");
const option3text = document.getElementById("p3ID");
const questiontext = document.getElementById("QuestionID");
const quizresults = document.getElementById("pQuizResults");

let option = 0;

option1.addEventListener("click", () => {
    option=1;
                        option1.style.border = "2px solid #cacacaff";
                        option1.style.transform = "scale(1.05)";
                        option2.style.border = "none";
                        option2.style.transform = "scale(1.00)";
                        option3.style.border = "none";
                        option3.style.transform = "scale(1.00)";

});

option2.addEventListener("click", () => {
    option=2;
                        option2.style.border = "2px solid #cacacaff";
                        option2.style.transform = "scale(1.05)";
                        option1.style.border = "none";
                        option1.style.transform = "scale(1.00)";
                        option3.style.border = "none";
                        option3.style.transform = "scale(1.00)";
    
});

option3.addEventListener("click", () => {
    option=3;
                        option3.style.border = "2px solid #cacacaff";
                        option3.style.transform = "scale(1.05)";
                        option1.style.border = "none";
                        option1.style.transform = "scale(1.00)";
                        option2.style.border = "none";
                        option2.style.transform = "scale(1.00)";

});

//confirmer
let answerscorrect=0;
const select = document.getElementById("SelectId");
select.addEventListener("click",()=>{
    let count = Number(quizcounter.textContent);
    let option1Text,option2Text,option3Text;
    if(count===1){
        if(option===1){
                        option1.style.border = "1px solid green";
                        option1.style.color = "green";
                        answerscorrect++;
            setTimeout(() => {
                                    questiontext.textContent = "What is the name of the dog in Orange Town?";
                                    quizcounter.textContent = "2";
                                    option1Text = "a) Lasoo?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Chouchou?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Linlin?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    quizimage.src = "chouchou.gif"
                                    option = 0;
            },800);

        }else if(option===2){
                        option2.style.border = "1px solid red";
                        option2.style.color = "red";
            setTimeout(() => {
                                    questiontext.textContent = "What is the name of the dog in Orange Town?";
                                    quizcounter.textContent = "2";
                                    option1Text = "a) Lasoo?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Chouchou?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Linlin?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "chouchou.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
            },800);
        }else if(option===3){
                        option3.style.border = "1px solid red";
                        option3.style.color = "red";
                        setTimeout(() => {
                                    questiontext.textContent = "What is the name of the dog in Orange Town?";
                                    quizcounter.textContent = "2";
                                    option1Text = "a) Lasoo?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Chouchou?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Linlin?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "chouchou.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                            },800);
        }else{
                        app.style.border = "1px solid red";
                        setTimeout(() => {
                                    app.style.border = "none";
                                    questiontext.textContent = "What is the name of the dog in Orange Town?";
                                    quizcounter.textContent = "2";
                                    option1Text = "a) Lasoo?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Chouchou?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Linlin?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "chouchou.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                            },800);
        }
    }else if(count===2){
        if(option===2){
            console.log("correct");
                        option2.style.border = "1px solid green";
                        option2.style.color = "green";
                        answerscorrect++;
            setTimeout(() => {
                                    questiontext.textContent = "What is the name of Luffy's devil fruit?";
                                    quizcounter.textContent = "3";
                                    option1Text = "a) The Noodle-Noodle Fruit?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Gum-Gum Fruit?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Resin-Resin Fruit?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "Luffy.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
            },800);

        }else if(option===1){
            console.log("incorrect");
                        option1.style.border = "1px solid red";
                        option1.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "What is the name of Luffy's devil fruit?";
                                    quizcounter.textContent = "3";
                                    option1Text = "a) The Noodle-Noodle Fruit?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Gum-Gum Fruit?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Resin-Resin Fruit?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "Luffy.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else if(option===3){
                        option3.style.border = "1px solid red";
                        option3.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "What is the name of Luffy's devil fruit?";
                                    quizcounter.textContent = "3";
                                    option1Text = "a) The Noodle-Noodle Fruit?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Gum-Gum Fruit?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Resin-Resin Fruit?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "Luffy.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else{
            app.style.border = "1px solid red";
                        setTimeout(() => {
                                    app.style.border = "none";
                                    questiontext.textContent = "What is the name of Luffy's devil fruit?";
                                    quizcounter.textContent = "3";
                                    option1Text = "a) The Noodle-Noodle Fruit?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Gum-Gum Fruit?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Resin-Resin Fruit?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "Luffy.gif"
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                            },800);

        }
    }else if(count===3){
        if(option===2){
            console.log("correct");
                        option2.style.border = "1px solid green";
                        option2.style.color = "green";
                        answerscorrect++;
            setTimeout(() => {
                                    questiontext.textContent = "Who was the first person to join the Straw Hat Pirates crew?";
                                    quizcounter.textContent = "4";
                                    option1Text = "a) Nami?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Usopp?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Roronoa Zoro?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
            },800);

        }else if(option===1){
            console.log("incorrect");
                        option1.style.border = "1px solid red";
                        option1.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "Who was the first person to join the Straw Hat Pirates crew?";
                                    quizcounter.textContent = "4";
                                    option1Text = "a) Nami?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Usopp?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Roronoa Zoro?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else if(option===3){
                        option3.style.border = "1px solid red";
                        option3.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "Who was the first person to join the Straw Hat Pirates crew?";
                                    quizcounter.textContent = "4";
                                    option1Text = "a) Nami?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Usopp?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Roronoa Zoro?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else{
            app.style.border = "1px solid red";
                        setTimeout(() => {
                                    app.style.border = "none";
                                    questiontext.textContent = "Who was the first person to join the Straw Hat Pirates crew?";
                                    quizcounter.textContent = "4";
                                    option1Text = "a) Nami?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) Usopp?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) Roronoa Zoro?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                            },800);

        }
    }else if(count===4){
        if(option===3){
            console.log("correct");
                        option3.style.border = "1px solid green";
                        option3.style.color = "green";
                        answerscorrect++;

            setTimeout(() => {
                                    questiontext.textContent = "What is the name of the Straw Hat Pirates' first ship?";
                                    quizcounter.textContent = "5";
                                    option1Text = "a) The Thousand Sunny?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Going Merry?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Red Force?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "merry.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
            },800);

        }else if(option===1){
            console.log("incorrect");
                        option1.style.border = "1px solid red";
                        option1.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "What is the name of the Straw Hat Pirates' first ship?";
                                    quizcounter.textContent = "5";
                                    option1Text = "a) The Thousand Sunny?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Going Merry?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Red Force?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "merry.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else if(option===2){
                        option2.style.border = "1px solid red";
                        option2.style.color = "red";
                    setTimeout(() => {
                                    questiontext.textContent = "What is the name of the Straw Hat Pirates' first ship?";
                                    quizcounter.textContent = "5";
                                    option1Text = "a) The Thousand Sunny?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Going Merry?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Red Force?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "merry.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                     },800);
        }else{
            app.style.border = "1px solid red";
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                        setTimeout(() => {
                                    app.style.border = "none";
                                    questiontext.textContent = "What is the name of the Straw Hat Pirates' first ship?";
                                    quizcounter.textContent = "5";
                                    option1Text = "a) The Thousand Sunny?";
                                    option1.textContent = option1Text;
                                    option2Text = "b) The Going Merry?";
                                    option2.textContent = option2Text;
                                    option3Text = "c) The Red Force?";
                                    option3.textContent = option3Text;

                                    //resetting the controls
                                    quizimage.src = "merry.gif"
                                    quizimage.src = "strawhats.gif"
                                    option3.style.border = "none";
                                    option3.style.transform = "scale(1.00)";
                                    option3.style.color = "rgb(54, 54, 54)";
                                    option2.style.border = "none";
                                    option2.style.transform = "scale(1.00)";
                                    option2.style.color = "rgb(54, 54, 54)";
                                    option1.style.border = "none";
                                    option1.style.transform = "scale(1.00)";
                                    option1.style.color = "rgb(54, 54, 54)";
                                    option = 0;
                            },800);

        }
    }else if(count===5){
        if(option===2){
            console.log("correct");
                        option2.style.border = "1px solid green";
                        option2.style.color = "green";
                        answerscorrect++;
            setTimeout(() => {
                        quizresultsection.style.display = "Block";
                        appsection.style.display = "none";
                        if(answerscorrect>=4){
                        quizresultsimage.src="high.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your a True Crewmember!";
                        }else if(answerscorrect>=3){
                        quizresultsimage.src="low.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your an....ehhh Crewmember!";  
                        }else{
                        quizresultsimage.src="bad.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Get off our ship....";  
                        }
                                    option = 0;
            },800);

        }else if(option===1){
            console.log("incorrect");
                        option1.style.border = "1px solid red";
                        option1.style.color = "red";
                        console.log(answerscorrect);
                    setTimeout(() => {
                        quizresultsection.style.display = "Block";
                        appsection.style.display = "none";
                        if(answerscorrect>=4){
                        quizresultsimage.src="high.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your a True Crewmember!";
                        }else if(answerscorrect>=3){
                        quizresultsimage.src="low.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your an....ehhh Crewmember!";  
                        }else{
                        quizresultsimage.src="bad.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Get off our ship....";  
                        }
                                    option = 0;
                     },800);
        }else if(option===3){
                        option2.style.border = "1px solid red";
                        option2.style.color = "red";
                        console.log(answerscorrect);
                    setTimeout(() => {
                        quizresultsection.style.display = "Block";
                        appsection.style.display = "none";
                        if(answerscorrect>=4){
                        quizresultsimage.src="high.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your a True Crewmember!";
                        }else if(answerscorrect>=3){
                        quizresultsimage.src="low.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your an....ehhh Crewmember!";  
                        }else{
                        quizresultsimage.src="bad.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Get off our ship....";  
                        }
                                    option = 0;
                     },800);
        }else{
            app.style.border = "1px solid red";
                        console.log(answerscorrect);
                        setTimeout(() => {
                        quizresultsection.style.display = "Block";
                        appsection.style.display = "none";
                        if(answerscorrect>=4){
                        quizresultsimage.src="high.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your a True Crewmember!";
                        }else if(answerscorrect>=3){
                        quizresultsimage.src="low.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Your an....ehhh Crewmember!";  
                        }else{
                        quizresultsimage.src="bad.gif";
                        quizresults.textContent =  "You got " + answerscorrect + " correct! Get off our ship....";  
                        }
                                    option = 0;

                            },800);

        }
    }
    


})