import styles from "./App.module.css";
import { useState } from "react";
import QuizPage from "./quiz/components/QuizPage";
import people from "./quiz/assets/data/people";

const App: React.FC = () => {
  const [start, setStart] = useState(false);
  const [successCount, setSuccessCount] = useState(-1);

  const finishGame = (count: number) => {
    setStart(false);
    setSuccessCount(count);
  };

  const startGame = () => {
    setStart(true);
    setSuccessCount(-1);
  };

  if (start) return <QuizPage finishGame={finishGame} />;

  if (successCount === people.length) {
    return (
      <div className={styles.App}>
        <h1>모든 문제 맞추기 성공!</h1>
        <button onClick={startGame}>다시 시작</button>
      </div>
    );
  }

  if (successCount >= 0) {
    return (
      <div className={styles.App}>
        <h1>땡! {successCount}개 맞춤!</h1>
        <button onClick={startGame}>다시 시작</button>
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <h1>신서유기 인물퀴즈</h1>
      <button onClick={startGame}>시작하기</button>
    </div>
  );
};

export default App;
