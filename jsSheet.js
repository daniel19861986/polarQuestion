function submitAnswers () {
    var totalQuestions = 5;
    var correctAnswers = 0;
  
  
  //get user input
  
  var q1 = document.forms["quizForm"]["q1"].value;
  
  var q2 = document.forms["quizForm"]["q2"].value;
  
  var q3 = document.forms["quizForm"]["q3"].value;
  
  var q4 = document.forms["quizForm"]["q4"].value;
  
  var q5 = document.forms["quizForm"]["q5"].value;
  
    for (i=1; i<=5; i++) {
      
      if (eval('q'+i) === null || eval('q'+i) === '') {
    alert('You missed question ' + i + '. Please finish all questions and resubmit the form.' );
    
    }
    }
   
    var answers = ["b","a","b","a","d"];
    for (i=1; i <=5; i++) {
     
      if (eval('q'+i) == answers[i-1]){
      correctAnswers++;
    } 
      
    }
    
    var results = document.getElementById('results');
    results.innerHTML = 'You scored ' + correctAnswers+ ' out of ' + totalQuestions +' <br>If you wish play again, please refresh the page!';
     
    return false; 
  } 