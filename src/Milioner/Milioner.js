import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";
import styles from "./Milioner.module.css";
import AnswersQuestions from "./anssersQuestions/AnssersQuestions";

export default function Milioner() {
  return (
    <>
      {AnswersQuestions.map((item, i) => (
        <div key={i} className={styles.milioner}>
          <Questions item={item} />
          <Answers item={item} />
        </div>
      ))}
    </>
  );
}
