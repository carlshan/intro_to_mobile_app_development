# Part 2 of 3 of the Tic-Tac-Toe Game Tutorial

Make sure you completed everything in [Part 1 of this tutorial](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/README.md) before you go on.

## Editing `Piece.js`

We are going to now modify our `Piece.js` file. This is the file that will create a Component that represents an `X` or `O` tictactoe piece.

So let's modify the `Piece.js` file.

I'm going to break the code we're adding into the `Piece.js` file into three sections and explain each one:

### Part 1: Importing libraries
```javascript
// Piece.js

import {
  StyleSheet,
  Image,
} from 'react-native';
import React, { Component } from 'react';
```

Nothing fancy to see here. This just imports things as we've seen before.

Copy it into the top of `Piece.js`

### Part 2: Creating the `Piece` Component

Now add this code to `Piece.js`:

```javascript
// Piece.js

export default class Piece extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let img;
        if (this.props.pieceType == "X") {
            img = <Image style={styles.piece} source={require('../images/X.png')} />
        } else if (this.props.pieceType == "O"){
            img = <Image style={styles.piece} source={require('../images/O.png')} />
        } else {
            img = <Image style={styles.piece} />
        }
        return (
            img
        )
    }
}
```
What does this do?

The above code creates our Component class called `Piece`.

It has a `constructor()` function as we've seen in the `Board` component. This constructor looks a little bit funky.

Wait. So why do we have the following? What's up with the `props` argument in the `constructor()` function? And in the `super()` function?

```javascript
// Piece.js

export default class Piece extends Component {
    constructor(props) {
        super(props);
    }
}
```

What does this `props` stuff mean?

> **What is `props`?:** props is essentially a JavaScript object that contains all of the data and information that will be passed to this `Piece` component by the `Board` component.

Finally, let's add this `style` variable to the bottom of the `Piece.js` file:

```javascript
// Piece.js

...

const styles = StyleSheet.create({
  piece: {
    height: 50,
    width: 50
  }
});
```

This adds the styling that our `Piece` component will use.

Reload your application. 

It shouldn't change. Why not?

It's because although we made a `Piece` component that we stuck in the `Piece.js` file, we haven't used this component anywhere else!

Let's add it to our `Board` component back in `Board.js`.

## Modifying `Board.js`

Let's go back to the `Board` class and modify the `renderBoard()` function to take advantage of our `Piece` component.

### Step 1: Importing libraries
First, let's import the Piece component. Add this the top of the `Board.js` file:

```javascript
// Board.js

import Piece from './Piece';
...
```

### Step 2: Using the <Piece> Component in `renderBoard()`
Now that we have imported the `Piece` component, we need to use it:

```javascript
// Board.js

...
    renderBoard() {
        ...
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                ...
                let square = <View key={square_key} style={[styles.square, position]}>
                        <TouchableOpacity onPress={() => {}} >
                          <Piece pieceType="X"></Piece> // <- Add this line of code.
                        </TouchableOpacity>
                     </View>
                 ...
                      
    }
    ...
```

Your app should now render this:

![With Xs](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/images/board_placeholder_xs.png?raw=true)

So why is everything an "X"?

That's because if you look closely at the code you just copied in, you will notice this:

```javascript
<Piece pieceType="X"></Piece>
```

See that `pieceType="X"` part? 

Here's how to say that in English:
> The `Piece` component has received a `pieceType` `prop` that has the value of `"X"`.

There's that word again. `Prop`.

Remember what props are?

> **What is `props`?:** props is essentially a JavaScript object that contains all of the data and information that will be passed to this `Piece` component by the `Board` component.

If you look at the `Piece` component in the `Piece.js` file, there is code in there that checks for what has been passed to it under the `pieceType` prop and it will render something differently depending on what it received.

Here is what you copied into the `Piece.js` file earlier in this tutorial.

```javascript
// Piece.js

render() {
    let img;
    if (this.props.pieceType == "X") {
      img = <Image style={styles.piece} source={require('../images/X.png')} />
    } else if (this.props.pieceType == "O"){
      img = <Image style={styles.piece} source={require('../images/O.png')} />
    } else {
      img = <Image style={styles.piece} />
    }
    return (
      img
    )
  }
```
Looking at the code above, can you see the `if` and `else if` conditionals checking to see what `this.props.pieceType` is `==` to?

So what do you think would happen if we went back to `Board.js` and changed:

```javascript
<Piece pieceType="X"></Piece>
```

to instead

```javascript
<Piece pieceType="O"></Piece>
```

Try that for yourself to see what happens!

## Allowing for User Input
Let's now allow for users to tap on squares and set a X or O.

Modify the `Board.js` file as follows.

### Step 1: Modify the `constructor()` function

We are going to add a `.state` attribute to Board to hold an internal representation of the game's positions. We'll store that in a variable called `gamePositions`.

We are also going to keep track of whose turn it is by keeping track of who the last person to put something down is in a variable called `lastPlaced`.

```javascript
// Board.js
...
export default class Board extends Component {
    constructor(props){
        super(props);
        this.renderBoard = this.renderBoard.bind(this);
        this.state = {
            lastPlaced: '',
            gamePositions: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ]
       }
  }
```

### Step 2: Adding the `updatePosition` function
Now that we have add a function that will execute every time someone taps on one of the 9 squares.

Add the following function below:

```javascript
// Board.js

...

export default class Board extends Component {
   ...
   
    updatePosition(row, col) {
        // the below line makes a copy of this.state.gamePositions
        let newPositions = Object.assign({}, this.state.gamePositions);
        let toPlace = this.state.lastPlaced == 'X' ? 'O' : 'X'
        let currentPiece = newPositions[row][col];
        if (currentPiece == '') {
            // since currentPiece is an empty string '', we can put down a piece
           newPositions[row][col] = toPlace

           this.setState({
               gamePositions: newPositions,
           lastPlaced: toPlace
          })
        } else {
          // there's already a piece there so we can't put anything down.
          // so this function should just return nothing.
          return null
        }
  }
  ...
  }
  ```
  
The above `updatePosition()` function modifies `this.state.gamePositions` variable depending on which row and column the user tapped.
  
Okay, but now we need to `.bind()` it. Remember, we have to `.bind()` every function we make in our component.

### Step 3: Modifying the `constructor` and `render`
Modify the constructor function:

```javascript
// Board.js

constructor() {
     super();
    ...
    this.updatePosition = this.updatePosition.bind(this);
    ...
}
```
  
Now, we need to modify the `render()` function to take use our `updatePosition` function.
  
  Change the `render()` function to the below:
  
  ```javascript
  ...
      render () {
          ...
          let square = <View key={square_key} style={[styles.square, position]}>
                        <TouchableOpacity onPress={(e) => this.updatePosition(row, col)} > // <- Modify this line.
                            <Piece pieceType={this.state.gamePositions[row][col]} /> // <- Modify this line.
                        </TouchableOpacity>
                     </View>
          ...  
    }
    ...

  ```
  
What did we do?
  
Instead of passing to the `Piece` component either "X" or "O", we pass it whatever happens to be in the row and column position of `this.state.gamePositions`.
  
And `this.state.gamePositions` is updated every time the square is tapped through the `onPress` prop of the `TouchableOpacity` component. We gave the `onPress` prop a new function that essentially calls `this.updatePosition()` function with the relevant `row` and `col` arguments.

Tada! Now we have linked everything together so that users can tap squares and put down an "X" or "O".

Try your code to verify that everything works up until this point.

If everything is dandy, you can [move on to the last part of the tutorial where you will be working on a number of different exercises](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/tictactoe/Tutorial_Part_3.md).

