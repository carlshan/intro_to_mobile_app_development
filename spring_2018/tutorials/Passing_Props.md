# Passing Props Around
By Carl Shan, teacher at The Nueva School

## Introduction
A large part of developing in React and React Native is learning how to pass data around.

Since we frequently have multiple components, each of which need to get information from other components, we need to learn how to pass data around.

## Visualizing Passing Props Around
Imagine you have the following setup:

`<ParentComponent>` is a React Component that renders a bunch of other components in its `render()` function. It looks like this:

```javascript
default export class ParentComponent extends React.Component {

	render() {
		return (
			<ChildComponent />
		)
	}

}

```

In the above example, `<ChildComponent>` is another React Component that is rendered *by* `<ParentComponent>`.

![Passing Props](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/passing_props.jpg)

## Passing Props from `<Parent>` to `<Child>`

Passing `props` from the `<ParentComponent>` to `<ChildComponent>` is pretty straightforward.

*Unlike passing properties from parents to children in real life. Hahaha! Get it? ... Okay, I'll show myself out.*

![Bad Joke](https://media1.tenor.com/images/925aef22be01b04efc0ce8b90d3b7a4e/tenor.gif?itemid=9222911)


Okay, bad jokes aside, here's what passing props from `<Parent>` to `<Child>` looks like:

```javascript
default export class ParentComponent extends React.Component {

	render() {
		return (
			<ChildComponent 
				prop1={"some value here"}
				prop2={"some other value here"}
				...
			/>
		)
	}

}

```

Using this model, if something changes in the parent we have an easy way to update the child.

For example if we have a button that, when pressed, changes a value, we can simply store that value in the state and the `<ChildComponent>` will be re-rendered with the new value.

See below:

```javascript
default export class ParentComponent extends React.Component {

	render() {
		return (
			<ChildComponent 
				prop1={this.state.value1}
				prop2={this.state.value2}
				...
			/>
		)
	}

}

```

Easy enough.

But what about passing props from `<Child>` to `<Parent>`? How do we do that?

## Passing Props from `<Child>` to `<Parent>`

Sometimes we want to update the `<Parent>` given something that happens to the `<Child>`. 	

How do we do that? 

Think about it ...

What would you do?

Not sure? Don't worry, it's pretty confusing.

![Confused](https://media1.tenor.com/images/2c7fa0bfa6a69bb45b1a1ad7e715a6d7/tenor.gif?itemid=5883733)

I'll walk you through how you can pass data from a `<Child>` to a `<Parent>`.

### Step 1: Create a function in the `<Parent>` and pass it as a prop

First, let's make a function in the parent. It'll be the function that will get some data from the `<Child>` component.

```javascript
default export class ParentComponent extends React.Component {

	updateData(dataFromChild) {
		this.setState(
			{
				someData: dataFromChild
			}
		)
	}

	render() {
		return (
			<ChildComponent 
				update={this.updateData}
			/>
		)
	}

}

```

### Step 2: Call it in the `<Child>`

In the `<ChildComponent>` class:


```javascript
default export class ChildComponent extends React.Component {

	render() {
		return (
			<Button 
				onPress = {this.props.update}
			/>
		)
	}

}

```

**BUT WAIT!** That won't work. Because `this.props.update` is the `updateData` function. And that function has a parameter. It needs some data. Remember that the `updateData` function looks like this:

```javascript
updateData(dataFromChild) {
	this.setState(
		{
			someData: dataFromChild
		}
	)
}
```

How can we give it some argument that will be called `dataFromChild`?

### Step 3: Create a helper function that passes the data in the `<Child>`

We're going to create one more function that will *help* us out. Let's call that a *helper* function.

![Helper](https://media1.tenor.com/images/b5edd3233454fd5bead9c7a47bce18f9/tenor.gif?itemid=5870123)

> **Note:** In programming *helper functions* are functions that assist in the running of other functions.

In this case, all the helper function does is call the `this.props.update` function with some given input.

```javascript
default export class ChildComponent extends React.Component {

	helperFunction() {
	
		this.props.update(someValue)
		
	}

	...

}

```

As a result, we can now use that as our `onPress` in our `<Button>` component in the `<Child>`:


```javascript
default export class ChildComponent extends React.Component {

	helperFunction() {
	
		this.props.update(someValue)
		
	}


	render() {
		return (
			<Button 
				onPress = {this.helperFunction}
			/>
		)
	}

}

```

And that's basically it!

Boom. You just learned something. Amazing, right?

![Learning](https://media1.tenor.com/images/80556186b94ecaff7a570a9c8148fb00/tenor.gif?itemid=4535602)

## Summary
Here are the key takeaways:

1. **Passing Data from `<Parent>` to `<Child>`:**
	* Simply give it to the child via normal prop passing.

2. **Passing Data from `<Child>` to `<Parent>`:**
	* In the `<Parent>`, create a funcion that will receive the data from the `<Child>`
	* In the `<Child>`, create a helper function that will call the receiving function with the right parameters.


