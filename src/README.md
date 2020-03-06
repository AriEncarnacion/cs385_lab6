# CS 385 Lab 6

## Overview

Create a "stopwatch" UI showing number of milliseconds elapsed with a stop/start button and a reset button to control it. [View the completed example](https://g9x85.csb.app).

## Instructions

Use `setInterval` to continuously increment a `timer` state by 32 every 32ms once the start button is clicked. Reset your timer to 0 when reset is clicked.

## Hints

- You will need two states: `timer` and `isRunning`.

- You may need to refresh your sandbox multiple times while working on the lab because live code changes will not always clear or restart side effects.

- You will need to start your interval inside of a `React.useEffect`. Starting an interval/timer is considered a "side effect".

- You should start your interval only when isRunning is true.

- You will also need to stop your interval when isRunning changes to false. The useEffect cleanup function will be useful for this. You can cancel an interval with the `clearInterval` method. To do this, you need to save the return from `setInterval` (aka let interval = setInterval() etc...`and pass it to`clearInterval`like`clearInterval(interval)`).

- Your setTimer call should look like this: `setTimer(prev => prev + 32)`. The reason why is because we can't access `timer` inside of our useEffect. To work around this, we can use the alternative setState API which lets you provide a callback that gives you access to the previous state. You can find more information about this in the React docs.
