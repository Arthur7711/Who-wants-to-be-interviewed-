import { useState, useEffect } from "react";
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
    if (id === data.trueAnswerIndex ) {
      console.log(questionNum);
      setQuestionNum((prevNum) => prevNum + 1);
      setPoint((prevPoint) => prevPoint + 1);
    } else {
      setPoint(0);
      setQuestionNum(0);
    }
  };

  useEffect(() => {
    setData(AnswersQuestions[questionNum]);
  }, [questionNum]);

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
