# Notes-app

Simple Note app using Nodejs.

Steps to run :::

1. npm install --> install all the necessary packages based on package.json
2. node app.js --help  --> Provides the available operations can be performed to take notes.
3. add :: node app.js add --title="some title" --body="some body".
4. remove :: node app.js remove --title="existing title".
5. list ::node app.js list
6. read :: node app.js read --title="some title"
7. add "debugger" command to any part of progaram, cmd :: node inspect app.js list.
   open chrome :: chrome://inspect ---> shows the available connections --> opens the debugger console.