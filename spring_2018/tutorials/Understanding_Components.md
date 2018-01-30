# Understanding Components and JSX
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## What are React Native components?
Components are the name we give JavaScript classes that inherit from `React.Component`.

For example, below is the most simple structure of a component:

```javascript
default export class MyComponent extends React.Component {
    // Your code here
}
```

So what do you need to know about components?

## 1. Components must `render()` something
Each component defines a particular thing to `render()` when that component is made.

To `render()` something is to make it visible. Let's render some text in our Component.

```javascript
// App.js

import React from 'react';
import { Text } from 'react-native';

default export class MyComponent extends React.Component {
    render() {
        return <Text> Here is some chill text </Text>
    }
}
```

If you use `npm start` and boot up the app made above, it should look something like the below.

![Basic Render](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/basic_render.png)

Super easy right?

In this case, the above app renders a `<Text>` component that you're importing from the 'react-native' library.

## 2. Components `render()` JSX

In order to understand JSX, we need to first do a little digression into HTML.

HTML works in the following way: You have opening and closing `tags` and you put stuff in between them.

For example:

```html
<p> This is a paragraph. I know it's a paragraph because it's surrounded by the 'p' tag. </p>
```

In the above example `<p>` is the opening `p` tag and `</p>` is the closing `p` tag.

The `<p>` tag is used for paragraphs of text.

You can think of these opening and closing tags as the opening parenthesis `(` and closing parenthesis `)`. The stuff you put in between them will follow the rules of the `<p>` tag. There are hundreds of different types of tags out there and each one does a different thing.

In React Native, we are able to write things that look very similar to HTML. We call these bits of code JSX.

JSX stands for **J**ava**S**cript **X**ML. You don't really need to know why it's called that. But you do need to know that it kinda looks like HTML.

Let's take a look at our app again:


```javascript
// App.js

import React from 'react';
import { Text } from 'react-native';

default export class MyComponent extends React.Component {
    render() {
        return <Text> Here is some chill text </Text>
    }
}
```

Can you spot you see the line that renders JSX? 

Go ahead and try to find it.

...

...

...

It's this line here:

```javascript
return <Text> Here is some chill text </Text>
```

We say that the part of the line after the `return` statement is JSX. It looks like HTML but it's actually JavaScript. The smartypants at Facebook figured out a way for you to write code that looks like it's in one language (HTML) and have it end up actually being in a different language (JavaScript). 

All React Native components have a `render()` function and this `render()` function must return some JSX.


## 3. Components only `render()` one enclosing JSX at a time.

Say we wanted to render two lines of text. So we try the following:

```javascript
// App.js

import React from 'react';
import { Text, View } from 'react-native';

default export class MyComponent extends React.Component {
    render() {
        return (
        	<Text> Here is some chill text </Text>
        	<Text> Here is another line of text. </Text>
        	)
    }
}
```

Bzzzz. Error! This won't work.

Why not?

Well, it's because a component can only render **one** enclosing JSX at a time.

What does that mean?

Think of JSX elements as if they were each a Russian doll.

What I'm saying is that each component can only render one **outer** Russian doll.

When we have code that looks like:

```javascript
// App.js

return (
    <Text> Here is some chill text </Text>
    <Text> Here is another line of text. </Text>
    )
```

We are effectively trying to take two Russian dolls and put them next to each other.

Wrong!

We have to take the Russian dolls and make sure that they're enclosed by yet another doll. Like this:

```javascript
// App.js

import React from 'react';
import { Text, View } from 'react-native';

default export class MyComponent extends React.Component {
    render() {
        return (
        <View>
        	<Text> Here is some chill text </Text>
        	<Text> Here is another line of text. </Text>
        </View>
        	)
    }
}
```

In this above code we wrap the two lines of text with one enclosing `<View>` parent component. Now our `render()` is only return one enclosing JSX.

## 4. You can make your own components!

You don't have to use predefined components like `<Text>` or `<View>`. You can make your own! In fact that is what this class is about. I'll teach you how to write your own custom code that creates your own components.

Take a look at the below code.

```javascript
// App.js

import React from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello there.</Text>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting> </Greeting>
        <Greeting> </Greeting>
        <Greeting> </Greeting> 
      </View>
    );
  }
}
```

In the above code we are defining our own component called `Greeting` and then using it in the class `LotsOfGreetings`. It gets used just like any other component, with a `<Greeting> 

By the way, we can re-write this line: 

`<Greeting> </Greeting>` 

Itnstead we can write it simply as:

`<Greeting />`

It'll save us a few characters.

## 5. To maintain clean code, we should split up our Components into different files.

Currently our `App.js` file looks like this:

```javascript
// App.js

import React from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello there.</Text>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting> </Greeting>
        <Greeting> </Greeting>
        <Greeting> </Greeting> 
      </View>
    );
  }
}
```

But imagine we had dozens of components we made ourselves. We don't want to cram all of them into `App.js`. Instead we want to *modularize* our code by splitting it up into different chunks.

Let's take the custom `Greeting` component we made and copy and paste it into a file called `Greeting.js` and put it in the same folder as our original `App.js` file.

Below is the `Greeting.js` file:

**Greeting.js**

```javascript
// Greeting.js

import React from 'react';
import { Text } from 'react-native';

default export class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello there.</Text>
    );
  }
}

```

Here is what our `App.js` file now looks like:

**App.js**

```javascript
// App.js

import React from 'react';
import { Text, View } from 'react-native';
import Greeting from './Greeting';

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting> </Greeting>
        <Greeting> </Greeting>
        <Greeting> </Greeting> 
      </View>
    );
  }
}
```

See how we are now modularizing our code?

Our `App.js` file simply imports from './Greeting' and we can get our own custom component.

Great job! You've now learned many of the basics of React Native.