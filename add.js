// S E L E C T O R S 
const option1 = document.getElementById("option1"),    
      option2 = document.getElementById("option2"),    
      option3 = document.getElementById("option3")  
var answer = 0;                                       

function generate_equation() {
     // Generating a random number between 0 and 12 and assigning it to "num1" and "num2"
  var num1 = Math.floor(Math.random() * 13),          
      num2 = Math.floor(Math.random() * 13),          
      dummyAnswer1 = Math.floor(Math.random() * 10),   // Generating a random number between 0 and 9 for the incorrect answer choices 
      dummyAnswer2 = Math.floor(Math.random() * 10),  
      allAnswers = [],                                 // Creating an empty array to store all possible answers
      switchAnswers = [];                              // Creating an empty array to store the shuffled answers

  answer = eval(num1 + num2);                          // holds the correct addition answer
  
  document.getElementById("num1").innerHTML = num1;   // Setting the innerHTML of the random numbers generated for the addition equation
  document.getElementById("num2").innerHTML = num2;   

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];   // Storing the corret answer and incorrect answers

  for (i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);   // Shuffling the answers and storing them in the "switchAnswers" array
  };

  // Setting the innerHTML of the answer choice options
  option1.innerHTML = switchAnswers[0];                
  option2.innerHTML = switchAnswers[1];                
  option3.innerHTML = switchAnswers[2];                

  option1.onclick = function() {                       // Adding an onclick event listener to all the answer choices
    if (switchAnswers[0] == answer) {   
              // Checking if the clicked answer is the correct answer                           
      document.getElementById("modal").style.display = "block";   // Displaying the modal by setting its display property to "block" --  if correct answer is clicked
      document.getElementById("modal-correct-answer").innerHTML = answer;   // Setting the innerHTML of the element with ID "modal-correct-answer" to the correct answer
      setTimeout(function() {
        document.getElementById("modal").style.display = "none";    // Hiding the modal by setting its display property to "none"
        generate_equation();                                          // Generating a new equation
      }, 5000);
    } else {
        option1.innerHTML ="Try again"
    }
  }

  option2.onclick = function() {
    if (switchAnswers[1] == answer) {
      document.getElementById("modal").style.display = "block";
      document.getElementById("modal-correct-answer").innerHTML = answer;
      setTimeout(function() {
        document.getElementById("modal").style.display = "none";
        generate_equation();
      }, 5000);
    } else {
        option2.innerHTML = "Try again"
    }
  }

  option3.onclick = function() {
    if (switchAnswers[2] == answer) {
      document.getElementById("modal").style.display = "block";
      document.getElementById("modal-correct-answer").innerHTML = answer;
      setTimeout(function() {
        document.getElementById("modal").style.display = "none";
        generate_equation();
      }, 5000);
    } else{
        option3.innerHTML = "Try again"
    }
  }
}

generate_equation();
