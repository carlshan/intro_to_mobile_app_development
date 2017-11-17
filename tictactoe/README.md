# Tic Tac Toe Tutorial
In this tutorial we are going to make a tic-tac-toe game using React Native. 

Your final product will look like the below:

![Final Tictactoe](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/images/final_tictactoe.png?raw=true)

## Setup for Middle School
We need to do a few things in order to start off our program.

> **NOTE for Middle School Students:** Remember that, for many of you, since you don't have `sudo` access you couldn't `npm start` in new folders you created with the `create-react-native-app`. Instead, we are going to modify the `my-app` folder that many of you were successfully able to use.

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

![Division](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/images/division.png?raw=true)

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

But your app won't run yet until we fill out `Board.js` and `Piece.js`.

## Board.js
Now let's just draw out the simply layout of the board.

Open the `Board.js` file in your `components` folder and copy the following code into it:

```javascript
// Board.js

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import React, { Component } from 'react';

const {width, height} = require('Dimensions').get('window');
const SIZE = 3; // 3-by-3 grid for Tic-Tac-Toe
const SQUARE_SIZE = Math.floor(width * 0.25);
const SQUARE_PADDING = Math.floor(SQUARE_SIZE * 0.05);
const BORDER_RADIUS = SQUARE_PADDING * 2;
```

So we've imported a bunch of React libaries, and we have also set up a bunch of variables such as `SIZE` and `width` to calculate some values that we're going to use to style our board.

Speaking of styling, let's copy the following styles to the bottom of the `Board.js` file:

```javascript
// Board.js
...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#644B62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartButton: {
    bottom: 150
  },
  instructionText: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 150,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pickText: {
    opacity: 0.4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    flex: 1,
    position: 'absolute',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: BORDER_RADIUS,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  }
});
```

Now that we have our styles, let's actually create a Component class called `Board` and add  a `render` function. Put it in between the declaration of all the constants (`const`) and the `style` variable.:

``` javascript
import ...

...

export default class Board extends Component {
    render () {
        return (
        <View style={styles.container}>
        	<Text style={styles.instructionText}> This is the board </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({ ...
```

This `render()` function doesn't do anything too complicated. Currently it should just render the text `This is the board.`

If you run things you should see the following:

![Blank Screen](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/images/blank_screen.png?raw=true)


