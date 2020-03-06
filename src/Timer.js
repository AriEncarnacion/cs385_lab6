import * as React from "react";

export function Timer(props) {
  return (
    <div>
      <h1>0 {/* replace the 0 with the value in your timer state */}</h1>
      <p>
        <small>Milliseconds elapsed</small>
      </p>
      <button>Stop</button>
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
}
