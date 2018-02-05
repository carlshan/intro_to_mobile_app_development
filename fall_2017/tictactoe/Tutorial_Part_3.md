# Part 3 of 3 of the Tic-Tac-Toe Game Tutorial

Make sure you've completed [part 2 of this tutorial](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/fall_2017/tictactoe/Tutorial_Part_2.md) before you continue.

In this third and final part of the game tutorial, you will complete the following exercises.

If you solve these exercises, help those around you finish them!

## Exercise 0: Show whose turn it is in

Edit the `render()` function to display whose turn it is.

I've written the skeleton code for you below:

```javascript

render () {

    let currentPlayer = '';

    if (this.state.lastPlaced == "X") {
    	// **YOUR CODE HERE**
    } else if (this.state.lastPlaced == "O") {
        // **YOUR CODE HERE**
    } else {
        // This only occurs if this.state.lastplaced == ''
        // **YOUR CODE HERE**
    }

    return (
    <View style={styles.container}>
            <Text style={styles.instructionText}> Current Player: {currentPlayer}. </Text>
              {this.renderBoard()}
    </View>
      )
}
```

## Exercise 1: Define the `restartGame()` function

In the `render()` method of our `Board` component, add a `<Button>` component underneath `this.renderBoard()`. 

```javascript
<Button
    title="Restart Game"
    onPress={this.restartGame}
    color="white"
    style={styles.restartButton}
/>
```

Now it is **YOUR** job to define a function called `restartGame` inside the `Board` component that will make this button work.

> **HINT:** Since the `Board` component relies upon `this.state.gamePositions` to render everything, what should `this.state.gamePositions` change into when someone taps the *Restart Game* button?

> **HINT:** You will need to use `this.setState()`.

> **HINT:** Remember to also add the `this.restartGame = this.restartGame.bind(this);` line to the `constructor()` function.

## Exercise 2: Checking to see if Player has won
Currently, our game doesn't check to see if anyone has won.

Write a function called `checkWin()` inside the `Board` component to check if a player has won. The function should return `true` if there is a winner and `false` otherwise:

I've written the skeleton of this function for you below:

```javascript

checkWin() {
    for (each row) {
    	if (all the elements in the row have the same character AND that character is not '') {
    	    return true
    	}
    }
    
    for (each column) {
    	if (all the elements in the column have the same character AND that character is not '') {
    	    return true
    	}
    }
    
    if (left-to-right diagonal have the same character AND that character is not '') {
        return true
    }
    
    if (right-to-left diagonal have the same character AND that character is not '') {
        return true
    }
    
    // the only time the line below will execute is if everything above has failed
    return false;
}
  ```
  
After you're done writing it, check to see if it's successful by adding this in the `render()` method of the `Board` component to the beginning of the function:
  
```javascript
...
render() {
    let win = this.checkWin();
    if (win == true) {
        return (
        <View style={styles.container}>
            <Text style={styles.instructionText}> You won! </Text>
        </View>
        )
    }
    
    ...
   
}
...
```
  
  > **HINT:** Remember to also add the `this.checkWin = this.checkWin.bind(this);` line to the `constructor()` function.
  
  ## Finished?
  If you've completed all three steps above, congratulations! You have a functioning tic-tac-toe game built using React Native. Great work!
