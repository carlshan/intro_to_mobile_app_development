# Part 1 of 3 of the Tic-Tac-Toe Tutorial
Written by: Carl Shan, CS teacher at Nueva School in San Mateo, CA

Acknowledgements: Some code and ideas borrowed from [Zhen Wang](http://blog.zmxv.com/2016/01/lets-write-a-mobile-game-with-react-native.html) and [Nicolas Gallagher](https://codepen.io/necolas/pen/eJaLZd?editors=0010).

This is part 1 of a 3 part tutorial. You can find the other two links to the tutorial below:
1. [Part 2 of the Tutorial](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/Tutorial_Part_2.md)
2. [Part 3 of the Tutorial](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/Tutorial_Part_3.md)



## Introduction
In this tutorial we are going to make a tic-tac-toe game using React Native. 

Your final React Native app will look like the below:

![Final Tictactoe](https://raw.githubusercontent.com/carlshan/intro_to_mobile_app_development/master/fall_2017/tictactoe/images/final_tictactoe.png)

## Setup
We need to do a few things in order to start off our program.

**NOTE for Middle School Students:** Remember that, for many of you, since you don't have `sudo` access you couldn't `npm start` in new folders you created with the `create-react-native-app`. Instead, we are going to modify the `my-app` folder that many of you were successfully able to use.

Here's what you need to do:

1. Go into your `my-app` folder and save your old work by making a copy of the files. We are going to be overwriting the `App.js` file.
	* You can save the old `App.js` with a different name.
2. Now delete everything in `App.js` and save.
3. Make a folder called `images` in the folder.
4. Go to the following two links, save them and put them into the 'images' folder.
	* [Download this image of "X"](https://raw.githubusercontent.com/carlshan/intro_to_mobile_app_development/master/tictactoe/images/X.png)
	* [Download this image of "O"](https://raw.githubusercontent.com/carlshan/intro_to_mobile_app_development/master/tictactoe/images/O.png)
5. Make another folder called `components` in the `my-app` folder.
6. Make an empty file called `Piece.js` in the `components` folder.
7. Make another empty file called `Board.js` in the `components` folder.

When you are done, your file and folder structure should look like the following:

![File and Folders](https://raw.github.com/carlshan/intro_to_mobile_app_development/master/fall_2017/tictactoe/images/file_and_folders2.png)

The reason we are making these files is to separate the code that controls different parts of our program into different files. We want each file to be "resposible" for a different part of our code.

See the below for what I mean:

![Division](https://raw.github.com/carlshan/intro_to_mobile_app_development/master/fall_2017/tictactoe/images/division.png?raw=true)

So now let's get to editing each of the three files.

## App.js
Our App.js file is going to be super simple.

All it's going to do is render the <Board> </Board> component. Copy and paste the following code into your App.js file:

```javascript
// App.js
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

## Editing `Board.js`
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
// Board.js 

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

### Rendering An Actual Board
Now that we have the skeleton down, let's actually render the board.

In order to do that, we need a few additional elements. Modify your `Board.js` file to have a few more functions:

1. `constructor()` - This function is like the **setup** function that will perform all the janitorial tasks.
2. `renderBoard()` - This will actually do the render of the 9 spaces.
3. `render()` - This is the critical function that all Components need in order to display anything.

Let's tackle each of these one-by-one.

#### 1. The `Constructor()` function

Add the `constructor()` function to the beginning of the Board component.

```javascript
// Board.js

import ...

export default class Board extends Component {
    constructor() {
        super();
      }
	
    render () {
        ...
    }
}

```

> **What the `constructor()` do?:** This is the function that gets called when your component is first created. It does all the messy work of setting up your component.

#### 2. The `renderBoard()` function

Now, let's add the `renderBoard()` function. 

> **NOTE:** Even after you copy in the code below, your program still won't work. We need a few additional steps before we are there.

```javascript
// Board.js
...

export default class Board extends Component {
    constructor() {
        super();
      }
      
    renderBoard () {
        let result = [];

        for (let row = 0; row < SIZE; row++) {
          for (let col = 0; col < SIZE; col++) {
            let square_key = row * SIZE + col;
            let position = {
              left: col * SQUARE_SIZE + SQUARE_PADDING + 40,
              top: row * SQUARE_SIZE + SQUARE_PADDING + 200
            }

            let square = <View key={square_key} style={[styles.square, position]}>
                            <TouchableOpacity onPress={() => {}} >
                              <Text>{square_key}</Text>
                            </TouchableOpacity>
                         </View>
            result.push(square);

          }

        }

        return result;
    }
	
    render () {
        ...
    }
}

```

Let's add the plumbing in order to get all this to link up.

Modify the `constructor()` function like so:

```javascript
// Board.js
....

export default class Board extends Component {
    constructor() {
        super();
        this.renderBoard = this.renderBoard.bind(this); // <- Add this additional line
    }
    
    render () {
        ...
    }
}

...
```

> **What the `this.renderBoard.bind(this)` do?:** This *binds* the function to the component. You need to do this for every function you write in the class.

#### 3. Modifying the `render()` function
Now, let's modify the `render()` function like so:

```javascript
// Board.js

...

    render () {
        return (
        <View style={styles.container}>
            <Text style={styles.instructionText}> This is the board </Text>
            {this.renderBoard()} // <- Add this additional line
        </View>
        )
    }
   
...
```

> **What the `{this.renderBoard()}` do?:** This *calls* the `renderBoard()` function. Since the function returns an array of other components, all of these other components will get rendered.

Now that we've done all this plumbing, try running your program. You should see the following:

![Final Tictactoe](https://raw.github.com/carlshan/intro_to_mobile_app_development/master/fall_2017/tictactoe/images/numbers.png?raw=true)

Nice job!

So now let's go on to the next part of the tutorial: [go to Part 2.](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/Tutorial_Part_2.md)

