# Understanding `props`
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## Before you read this, make sure you understand:
1. How to read a React Native file.
	* Tutorial: [Reading React files](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Reading_React.md)
2. What are React Native Components and JSX
	* Tutorial: [Understanding React Native Components](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Understanding_Components.md)
3. What does `this.state` mean and do?
	* Tutorial: [Understanding `this.state`](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Understanding_State.md)

## What are `props`?
`props` are the way that React Native components pass information to each other.

Consider the following example:

```javascript
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
```

In the above code, we made our own custom component called `Greeting`.

In our component we had a line of code that said:

```javascript
return (
      <Text>Hello {this.props.name}!</Text>
    );
```

What is `{this.props.name}`?

Well, when we use the `Greeting` component we are passing it the `prop` called `name`.

```javascript
    <Greeting name='Rexxar' />
    <Greeting name='Jaina' />
    <Greeting name='Valeera' />
```

As a result, the `Greeting` child component can receive the information from the `LotsOfGreetings` parent component.

This is how we pass data from the parent component to the child component.

## Other examples
Most React Native components work like this. Take a look at this example:

```javascript
<Button
    onPress = {this.doSomething}
    title = "Press me!"
/>
```

The `<Button>` component currently has two props: `onPress` and `title`.

Those `props` are being passed down somewhere to subcomponents that `<Button>` is using in order to render itself.

## Summary
`props` are an object on components that can allow the programmer to pass data from one component to another. 

You access props on a child component with `{this.props.NameOfProp}` and you pass it in the parent component with:

```javascript
<SomeComponent
	prop1=value1
	prop2=value2
	prop3=value3
/>
```