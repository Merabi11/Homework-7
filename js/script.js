let topic = prompt(
  'Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'
);

let question;
let answer;

switch (topic) {
  case '1':
    question = 'რა არის რა არის typeof(5)?';
    answer = 'number';
    break;
}

switch (topic) {
  case '2':
    question = 'შეიძლება თუ არა let-ის რედეკლალირება';
    answer = 'yes';
    break;
}

switch (topic) {
  case '3':
    question = 'რას აბრუნებს console.log(Math.floor(2.1)) ';
    answer = 'ori';
    break;
}

let userAnswer = prompt(question);

if (userAnswer.toLocaleLowerCase() === answer) {
  alert('თქვენი პასუხი სავსებით სწორია👍');
} else {
  alert('სამწუხაროდ თქვენ პასუხი არასწორია🫤');
}
