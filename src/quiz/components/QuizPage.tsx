import { useEffect, useState } from "react";
import people from "../assets/data/people";
import useInterval from "../hooks/useInterval";
import usePerson from "../hooks/usePerson";
import useRecognizer from "../hooks/useRecognizer";

import styles from "./QuizPage.module.css";

type Props = {
  finishGame: Function;
};

const QuizPage = ({ finishGame }: Props) => {
  const [count, setCount] = useState(3);
  const [successCount, setSuccessCount] = useState(0);
  const [person, nextPerson] = usePerson();
  const [output, startRecognizer, endRecognizer] = useRecognizer();
  const [successName, setSuccessName] = useState("");
  const [isRec, setIsRec] = useState(false);

  useEffect(() => {
    if (successCount === people.length) finishGame(successCount);
  }, [successCount, finishGame]);

  useInterval(() => {
    if (count >= 0) setCount(count - 1);
  }, 1000);

  useEffect(() => {
    if (count === 0) {
      if (isRec) {
        endRecognizer();
        finishGame(successCount);
      } else {
        startRecognizer();
        setIsRec(true);
        setCount(5);
      }
    }
  }, [
    count,
    isRec,
    successCount,
    endRecognizer,
    startRecognizer,
    setIsRec,
    setCount,
    finishGame,
  ]);

  useEffect(() => {
    if (output) {
      endRecognizer();
      setIsRec(false);
      if (output.includes(person.name)) {
        setCount(5);
        setSuccessCount((c) => c + 1);
        setSuccessName(person.name);
        nextPerson();
      } else {
        finishGame(successCount);
      }
    }
  }, [
    output,
    person,
    successCount,
    endRecognizer,
    setCount,
    setSuccessCount,
    setSuccessName,
    nextPerson,
    finishGame,
  ]);

  if (isRec) {
    return (
      <div className={styles.QuizPage}>
        {count > 1 && <span className={styles.center}>{count - 2}</span>}
        <img src={person.image} alt="인물퀴즈" />
      </div>
    );
  }

  if (count > 3) {
    return <div className={styles.QuizPage}>{successName} 정답!</div>;
  }

  return <div className={styles.QuizPage}>{count}</div>;
};

export default QuizPage;
