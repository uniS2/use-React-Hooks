import { useState } from "react";
function Timer() {
  const [timer, setTimer] = useState(10);
  const [isStart, setIsStart] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const handleStart = () => {
    setIsStart((isStart) => !isStart);

    if (!isStart) {
      const interval = setInterval(() => {
        setTimer((timer) => {
          if (timer === 0) {
            alert("시간이 종료되었습니다!");
            setIsStart(false);
            setTimer(10);
            clearInterval(interval);
            return timer;
          }
          return timer - 1;
        });
      }, 1000);
      setTimerInterval(interval);
    } else {
      clearInterval(timerInterval);
    }
  };

  const handleReset = () => {
    setTimer(10);
    clearInterval(timerInterval);
    setIsStart(false);
  };

  return (
    <div>
      <p>0:{timer < 10 ? `0${timer}` : timer}</p>
      <button onClick={handleStart}>{isStart ? "정지" : "시작"}</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  );
}

export default Timer;
