import { useState } from "react";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";
import styles from "./Milioner.module.css";
import AnswersQuestions from "./anssersQuestions/AnssersQuestions";

export default function Milioner() {
  const [questionNum, setQuestionNum] = useState(0);
  const [data, setData] = useState(AnswersQuestions[questionNum]);

  const trueAnswer = (id) => {
    if (id === data.trueAnswerIndex) {
      console.log(true);
      setQuestionNum(questionNum + 1);
      setData(questionNum);
      console.log(questionNum);
    } else {
      console.log("you lose this game");
    }
  };

  return (
    <div className={styles.parentMilioner}>
      <div className={styles.milioner}>
        <Questions item={data.question} />
        <Answers
          trueAnswer={trueAnswer}
          istrue={data.trueAnswerIndex}
          item={data.answers}
        />
      </div>
    </div>
  );
}
