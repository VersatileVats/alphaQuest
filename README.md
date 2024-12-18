# Alpha Quest
Made for winning the Reddit hackathon

<p align="justify">
  Let's have a look at the scripts that I am using in my <a href="./webroot/scripts">webview application</a>:<br>
  1. animate & gsap js: Handling the animations that are being done on the landing page<br>
  2. audio & howler js : Library that is responsible for the sound effects in the app<br>
  3. confetti.js: Library handling the confetti drop effect<br>
  4. q&a.js: Questions for the week<br>
  5. script.js: Handling DOM manipulations and process flow
</p>

<p align="justify">
  The onMessage event handler is handling the messages that are being sent from webview to Devvit. The following are the different cases in the<a herf="https://github.com/VersatileVats/alphaQuest/blob/master/src/main.tsx#L48">main.trx file</a>:
  <ul>
    <li><b>incScore:</b> Incrementing or decrementing the scores once the user provide response. Used incrBy function of Redis to adjust the numerical value</li>
    <li><b>getScore:</b> One of the first data request being sent, so that the UI can be populated</li>
    <li><b>playedLevel:</b> Returns a boolean value, indicating whether the user has played a particular level or not?</li>
  </ul>
</p>

<br>

> Apart from the gameplay, numerous features and services are seamlessly integrated to bring this project to life. I hope you enjoy playing it as much as I enjoyed creating it.
