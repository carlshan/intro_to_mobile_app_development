# Tic Tac Toe Tutorial
In this tutorial we are going to make a tic-tac-toe game using React Native. 

Your final product will look like the below:

![Final Tictactoe](/images/final_tictactoe.png)

## Setup
We need to do a few things in order to start off our program.

> **NOTE:** Remember that, for many of you, you couldn't `npm start` in new folders you created with the `create-react-native-app`. Instead, we are going to modify the `my-app` folder that many of you were successfully able to use.

1. Go into your `my-app` folder and save your old work by making a copy of the files. We are going to be overwriting the `App.js` file.
	* You can save the old `App.js` with a different name.
2. Now delete everything in `App.js`
3. Download the `images` folder on Google Classroom and move it into your `my-app` folder. This folder contains two images. 
	* Take a look to see what they are.
4. Make a folder called `components` in the `my-app` folder.
5. Make a file called `Piece.js` in the `components` folder.
6. Make another file called `Board.js` in the `components` folder.

The reason we are making these files is to separate the code that controls different parts of our program into different files. We want each file to be "resposible" for a different part of our code.

See the below for what I mean:

![Division](/images/division.png)

So now let's get to editing each of the three files.

## App.js
Our App.js file is going to be super simple.

All it's going to do is render the <Board> </Board> component. Copy and paste the following code into your App.js file:

```javascript
import Board from './components/Board';
import React, { Component } from 'react';

export default class TicTacToe extends Component {
  render() {
    return (
        <Board> </Board>
    );
  }
}
```

Now, we are done with `App.js`! We will not be modifying it for the rest of the tutorial.

## Board.js

