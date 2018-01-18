# Reading React Native Files
By Carl Shan
Nueva School

## Description
This short tutorial describes how to read each of the different sections of a React Native JavaScript file.

These JavaScript files (e.g., App.js) will largely be broken up into two sections, each of which we will explore further. The two sections are:

1. The header
2. The component

For the purposes of this guide I will be using the App.js file that gets created when you run `create-react-native-app 01_firstapp`.

## Header
In the header, we import all the tools we need and we set up everything we want. 

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
```

The above lines of code simply bring the modules 'react' and 'react-native' into your file. Specifically, we retreive from these two modules the React, StyleSheet, Text and View components.

But wait, you might ask. Where in the world did 'react' and 'react-native' come from?

Well, when you ran `create-react-native-app 01_firstapp` a folder called `node_modules` was created in `01_firstapp`. If you open that folder up, it will look like this:

![Node Modules](www.google.com)

Inside this folder are a bunch of libraries that the command `create-react-native-app 01_firstapp` installed. 

Libraries are code that other people have written and published publicly so that programmers from all over the world can use it.

'react' and 'react-native' are both libraries published by Facebook to allow programmers and students build apps quickly.

So again, when we run the following code:

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
```

We are importing from the 'react' folder and 'react-native' folder in node_modules.

Specifically, we are importing all of the classes named React, StyleSheet, Text and View from those two folders.

## The Component
So in the header we imported things. 

But most of the work of a React JavaScript file happens in the body. It happens where we make something called a `component`. This is just the name React gives a JavaScript class that inherits from the React.Component class.

Let's take a look for how a React Component is coded:

```javascript
export default class App extends React.Component {
	...
}
```

The above lines of code creates a class called `App` that inherits from React.Component.

```javascript
export default class App extends React.Component {
  render() {
   	 ...  
    }
}
```

All React Component classes need to `render()` something. `render()` is a function that actually will display something to your screen.

The above lines of code defines a function called `render()` that takes in no arguments. This function is part of the `App` class.

If this function doesn't exist, your component will render nothing.

```javascript
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
```

The remaining code that looks like HTML actually describes what's rendered.

This HTML-like code is actually called JSX. It may *look* like HTML, but it's secretly JavaScript. The smart engineers at Facebook figured out a way to allow you to write HTML-looking code that will then be converted to JavaScript later.

This makes the life of the programmer easier since they are usually familiar with HTML.

## Summary
Here are the key points you need to remember:

1. React Native apps are made up of a lot of JavaScript files
2. At the top of these files there is usually some set of `import` statements that gets all the tools we need.
3. But the majority of the work in this file is done in the `component`, which is the name we give a class that inherits from `React.Component`
4. Inside of this `component` there is a function called `render()` that does most of the work of displaying something.
5. The `render()` function needs to return JSX, which is code that looks like HTML but is really converted to JavaScript.

 