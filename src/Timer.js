import * as React from "react";

export function Timer(props) {
  const [timer, setTimer] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const renderStartStop = () => {
    if (!isRunning) {
      return <button onClick={startTimer}>Start</button>;
    } else {
      return <button onClick={stopTimer}>Stop</button>;
    }
  };

  const resetTimer = () => {
    setTimer(0);
  };

  React.useEffect(() => {
    console.log("effect");
    const interval = setInterval(() => {
      // console.log("This will run every second!");
      if (isRunning) {
        setTimer(prev => {
          return 32 + prev;
        });
      }
    }, 32);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>{timer}</h1>
      <p>
        <small>Milliseconds elapsed</small>
      </p>
      {renderStartStop()}
      {/* <button onClick={stopTimer}>Stop</button> */}
      {/* <button onClick={startTimer}>Start</button> */}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
