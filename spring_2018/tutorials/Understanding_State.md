# Understanding `State`
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## What is `state`?
`state` is an important variable that we will use in our React components again and again.

It essential stores the data that our component will use in render JSX.

## Show me an example.
Here's an example of an app that sets up a `state`.

```javascript
// App.js
import React from 'react';
import { Text } from 'react-native';

default export class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {name: 'Carl'}
    }
	
    render() {
        return (
        <Text> Hello {this.state.name} </Text>
        )
    }

}
```

In the above file, the `constructor()` function creates a JavaScript object on the `this` variable called `state`. (If you don't remember what Objects are, [review them here.](https://javascript.info/object))

Then, in the `render()` function we use `this.state.name` to access the `name` property of the `state` Object to actually display it.

## Why is all this useful?
We do this because we will be updating state throughout a program.

Consider the program we wrote above. Now, let's add a button so that when someone presses it the text displays `Hello Donald Duck` instead of `Hello Carl`.

In order to achieve this we need to modify the state. How can we do that? I've written out the steps below.

### 1. First we need to add the `<Button>` component

Let's modify our `render()` function to also return a `<Button />`

```javascript
render() {
    return (
        <Text> Hello {this.state.name} </Text>
        <Button />
    )
}
```

However, since React Native doesn't allow our `render()` function to return multiple components, we need to wrap all of it in a `<View>` component.

```javascript
render() {
    return (
        <View>
            <Text> Hello {this.state.name} </Text>
             <Button />
        </View>
    )
}
```

### 2. Now we need to give the `<Button>` some properties

```javascript
render() {
    return (
        <View>
            <Text> Hello {this.state.name} </Text>
            <Button 
                title="Press Me!"
            />
        </View>
        )
}
```

Now the button says "Press Me!"

### 3. Let's have the button call a function when pressed
Specificially, let's make a function called `changeName()` that updates the `state`.

Right now the function will be empty but we'll add to it.

```javascript
changeName() {
}

render() {
    return (
        <View>
            <Text> Hello {this.state.name} </Text>
            <Button 
                title="Press Me!"
                onPress = {this.changeName}
            />
        </View>
        )
}
```

Okay, so when we press the Button nothing happens because the function `this.changeName` doesn't do anything.

### 4. Use the function `changeName()` to update the `state`

Take a look at the changes to the `changeName()` function below and see if you can figure out how it works.

```javascript
changeName() {
    let newName = "Donald Duck"
    this.setState( {name: newName} )
}

render() {
    return (
        <View>
            <Text> Hello {this.state.name} </Text>
            <Button 
                title="Press Me!"
                onPress = {this.changeName}
            />
        </View>
        )
}
```

Get it?

We use the built-in `setState` function to update the `this.state` Object. Specifically, we update the `name` part of `this.state` to be the variable `newName`.

Okay, almost there. But this still doesn't work. In fact you'll get an error saying that `this.changeName()` is not a function.

Why's that?

Well, we need to do one last thing.

### 5. Update the `constructor()` function to bind

We need to update the `constructor()` function as so:

```javascript
constructor() {
    super();
    this.changeName = this.changeName.bind(this)
    this.state = {name: 'Carl'}
}

```

Why do we need to do this? Well it's a bit complicated to explain, but the short version is that we need to tell our program to remember that the `this` variable refers to the class.

If you want a more thorough explanation, [read this article.](https://codeburst.io/binding-functions-in-react-b168d2d006cb)

Alright, now we got a working app!


## Summary
Here's a short summary of the key points to remember:

1. `this.state` is created in the `constructor()` function of a Component
2. It needs to be an Object
3. `this.state` stores values we will use in our App
4. We use `this.setState` to update the `state`
5. Functions that call `this.setState` need to be bound in the `constructor()` function using `.bind(this)`