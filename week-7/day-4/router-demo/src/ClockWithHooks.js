import React, { useState } from 'react';

export function ClockWithHooks() {
  //2:31:10 PM
  const initialTime = new Date().toLocaleTimeString();
  const [timeNow, UpdateTimeNow] = useState(initialTime);

  const updateClock = () => {
    UpdateTimeNow(new Date().toLocaleTimeString());
  };

  // setInterval(() => updateClock(), 1000);

  return (
    <div>
      <br></br>
      <button onClick={() => updateClock()}> Tick </button> <br></br>
      <h1>Hello, world!</h1>
      <h2>It is {timeNow}.</h2>
    </div>
  );
}
