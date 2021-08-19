import { useState } from "react";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";
import AnswersQuestions from "./anssersQuestions/AnssersQuestions";
import Bank from "./components/bank/Bank";
import styles from "./Milioner.module.css";

export default function Milioner() {
  const [questionNum, setQuestionNum] = useState(0);
  const [data, setData] = useState(AnswersQuestions[questionNum]);
  const [point, setPoint] = useState(0);

  const trueAnswer = (id) => {
    //ushacnuma 1 qayl gorcoxutyunnern
    if (id === data.trueAnswerIndex) {
      console.log(true);
      setQuestionNum((prevNum) => prevNum + 1);
      setPoint((prevPoint) => prevPoint + 1);
      setData(AnswersQuestions[questionNum]);
      console.log(questionNum);
    } else {
      setPoint(0);
      setQuestionNum(0)
      console.log("you lose this game");
    }
  };

  return (
    <div className={styles.parentMilioner}>
      <Bank point={point} />
      <div className={styles.milioner}>
        <Questions item={data.question} />
        <Answers trueAnswer={trueAnswer} item={data.answers} />
      </div>
    </div>
  );
}
