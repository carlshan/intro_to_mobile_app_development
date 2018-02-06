# Understanding `<FlatList>`
By Carl Shan of The Nueva School

## What is `<FlatList>`?
`<FlatList>` is a component that allows us to render a list of data in our app.

However it may be a bit confusing to use and immediately understand.

![Confused](https://media1.tenor.com/images/ab88a00d81329f24e01f739875cb702a/tenor.gif?itemid=9286799)

This introduction will introduce you to the basics of `<FlatList>` so that you can use it as early as possible.

## An `<FlatList>` example

Here's a really quick look at how to use a `<FlatList>`:

```javascript
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        
          data = {[
            {key: 'Carl Shan'},
            {key: 'Jen Selby'},
            {key: 'Pi Patel'},
          ]}
          
          renderItem = {( {item} ) => {return <Text>{item}</Text>}}

         />
      </View>
    );
  }
}
```

## The 2-minute description
A `<FlatList>` needs two `props`:

1. `data`: this needs to be a Javascript array of Objects, where each Object has a key called `key`. In other words it needs to look like this:

```javascript
data = {[
	{key: 'Carl Shan'},
	{key: 'Jen Selby'},
	{key: 'Pi Patel'},
]}
```

2. `renderItem`: this needs to be a function that returns what should be rendered for each row of the data. In my example it looks like this:

```javascript
renderItem = {( {item} ) => {return <Text>{item}</Text>}}
```

## Breaking this down
So now let's more deeply understand each of the important `props`.

### `data`
Let's start with analyzing the `data` prop:

```javascript
data = {[
	{key: 'Carl Shan'},
	{key: 'Jen Selby'},
	{key: 'Pi Patel'},
]}
```
> **NOTE:** Remember the `{}` outside of the array of data turns it into a Javascript expression.


The `data` prop here is an array of 3 different Javascript `Objects`. Each `Object` represents a row of data:

`{key: 'Carl Shan'}`

As you can see above, each `Object` has a key called `key`. 

The key needs to be called `key`. Otherwise React Native will give you a warning. This is becauseReact Native needs to know what to re-render every time something happens in the app (e.g., a user taps on a button), and having a `key` in the data allows it to more quickly find what has changed.

### `renderItem`

Now let's look at the `renderItem` prop:

```javascript
renderItem = {( {item} ) => {return <Text>{item}</Text>}}
```

What the heck is going on here? 

![Huh](https://media1.tenor.com/images/4dfa1dd335f8885a026667441f4b8ab1/tenor.gif?itemid=4331503)


That looks pretty confusing. Let's take it piece by piece.

#### Part 1: Passing the prop

`renderItem = { ... }`
This part of the line is pretty simple. It's simply passing a `prop`.

#### Part 2: Understanding the function being passed
The function being passed to the `renderItem` prop is:

`( {item} ) => { return <Text> {item} </Text> }`

Here's that function in an expanded form (e.g., not as an arrow function):

```javascript
function ( {item} ) {
	return <Text> {item} </Text>
}
```

This part probably doesn't look too weird.

But what does this part mean?

`function ( {item} ) { ... } `

Wait a second. What is `{item}` doing in there? Most functions would look like:

`function ( item ) { ... } `

Why do we have `{item}` instead of `item` in the function?

What is this new wizardy? Is it something to do with React? JSX? That's definitely what the curly braces `{}` mean right?

![What is going on?](https://media1.tenor.com/images/56f7a352c93060450d06d5562032214f/tenor.gif?itemid=5606296)

**NO!**

This is actually a new Javascript feature that got released in the latest version called `destructuring`.

What does that do?

But essentially, it allows us to quickly get elements out of an Object.

For example:

```
// Let's make an Object.
var myObject = {name: 'Carl', role: 'CS Teacher'};

// Now let's use destructuring.
let {name, role} = myObject;
```

**Destructuring allows us to get elements from an Object**

In the past we had to do this:

```
var myObject = {name: 'Carl', role: 'CS Teacher'};

var name = myObject.name
var role = myObject.role

```

But now with destructuring we can do:

```javascript
var myObject = {name: 'Carl', role: 'CS Teacher'};
var {name, role} = myObject;
```

So let's see how that went:

```javascript
// Let's see what values the variables have
console.log(name);
// prints 'Carl'

console.log(role);
// prints 'CS Teacher'

```

> You can read this [helpful introductory tutorial on destructuring](http://wesbos.com/destructuring-objects/) if you want to learn more.


So, using our newfound knowledge of `destructuring` let's analyze this function again:

`function ( {item} ) { ... } `

So what's happening is that some `Object` is being passed to the `function` and we are only keeping the part of the `Object` that is named `item` and using that in our function.

#### Part 3: What to return?

Okay, so we understand the `function ( {item} ) { ... }` part of the line. 

Now we just need to figure out what it returns. In this case we want to return:

`<Text>{item}</Text>`

This just makes a `<Text>` component and puts the `item` inside of it.

In other words, the `renderItem` prop gets the function:

`( {item} ) => {return <Text>{item}</Text>}`

As a result it takes each row, finds the `item` attribute of the `Object` that's being passed and inserts it in our `<Text>`.

### Putting it all together

Let's go back to our example:

```javascript
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        
          data = {[
            {key: 'Carl Shan'},
            {key: 'Jen Selby'},
            {key: 'Pi Patel'},
          ]}
          
          renderItem = {( {item} ) => {return <Text>{item}</Text>}}

         />
      </View>
    );
  }
}
```

Can you now understand all the parts of this? I certainly hope so!

Huzzah!

![Huzzah!](https://media1.tenor.com/images/85f256863f4e628f62f1c588ff10709d/tenor.gif?itemid=5079416)

### Want to learn more?
If you want to see all the other props on `<FlatList>`, you can take a look at [Facebook's documentation here](https://facebook.github.io/react-native/docs/flatlist.html). There are a lot more props than the two that I've explained in this document!
