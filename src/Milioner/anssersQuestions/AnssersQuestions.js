const AnswersQuestions = [
  {
    question:
      "Which of the following would be correct way to read the 'age' property of a 'person' object ?",
    answers: ["person::age", "person[age]", "person.age", "person_age"],
    trueAnswerIndex: 2,
  },
  {
    question: "Which of the following Javascript conditions is true ?",
    answers: ["'1' === 1", "false == '0'", "false === ''", "NaN == NaN"],
    trueAnswerIndex: 1,
  },
  {
    question:
      "What will this code output console.log(typeof a) console.log(typeof b) function a(){} var b=function(){}",
    answers: [
      "function function",
      "undefined function",
      "undefined undefined",
      "function undefined",
    ],
    trueAnswerIndex: 3,
  },
  {
    question:
      "var x = 2; var y = 4; if ( ( y > x || y++ === 4) && ++y === 5){ x = 1} else { x = 4 }",
    answers: [
      "x = 4 , y = 5",
      "x = 4 , y = 4",
      "x = 1 , y = 5",
      "x = 1 , y = 6",
    ],
    trueAnswerIndex: 2,
  },
  {
    question: "Which of the following Javascript conditions is true ?",
    answers: ["{}+1 === 0", "{}+[] === NaN", "{}+[] === 0", "{}-[]===NaN"],
    trueAnswerIndex: 2,
  },
  {
    question: " What will this code output {} + '' - [] ?",
    answers: ["0", "NaN", "- 0", "error"],
    trueAnswerIndex: 0,
  },
  {
    question: "Which one is not true version ?",
    answers: ["let $ = 1", "let _ = 2", "let 1a = 3", "let աժ = 5"],
    trueAnswerIndex: 2,
  },
  {
    question: "let a = ( 1,5 - 1 ) * 2 console.log( a ) ?",
    answers: ["1", "8", "0.1", "NaN"],
    trueAnswerIndex: 1,
  },
  {
    question:
      "What's the length of this function function foo (a , d , b = true , c = 1 , m ) {} foo.length ?",
    answers: ["1", "2", "3", "error"],
    trueAnswerIndex: 1,
  },
  {
    question: "What is not Comparison Operator ?",
    answers: ["if , else", "? : ", "??", "switch , case"],
    trueAnswerIndex: 2,
  },
  {
    question: "Which one is 'immutable' Array method",
    answers: ["sort()", "concat()", "fill()", "reverse()"],
    trueAnswerIndex: 1,
  },
  {
    question: "Which one is true",
    answers: [
      "true + false === 1",
      "false / false === 0",
      "false / false === 1 ",
      "true + false === NaN",
    ],
    trueAnswerIndex: 0,
  },
  {
    question: "Which one is not from The Four Principles of ' OOP '",
    answers: ["Abstraction", "Extends", "Polymorphism", "Encapsulation"],
    trueAnswerIndex: 1,
  },

  {
    question:
      "for (var i = 0 ; i < 6 ; i++){ setTimeout( ( ) => { console.log ( i ) } , 0 ) }",
    answers: ["0,1,2,3,4,5", "6,6,6,6,6,6", "1,2,3,4,5,6", "0,0,0,0,0,0"],
    trueAnswerIndex: 1,
  },
  {
    question: "What datatype does local storage accept",
    answers: ["String", "Number", "Object", "Function"],
    trueAnswerIndex: 0,
  },
  {
    question: "Congratulations,You Win!!!",
    answers: [],
    trueAnswerIndex: 0,
  },
];

export default AnswersQuestions;
