# Learning how to use `AsyncStorage`
By Carl Shan, Computer Science teacher at [The Nueva School](www.nuevaschool.org).

## What is AsyncStorage?

`AsyncStorage` is a class and set of functions given to you by the `react-native` library to save small amounts of data that will *persist* even between app reloads. This data will always be available to your app, until you clear it.

You can import it by:

```javascript
import { AsyncStorage } from 'react-native';
```

Using `AsyncStorage` you can save data directly onto your smartphone.

That means that you can save some information, reload your app, and the data will still be around!

![Take that for data](https://media1.tenor.com/images/e491fff293250d76c1ed8d2bac4acc60/tenor.gif?itemid=8401179)


## When should I **NOT** use `AsyncStorage`

Nearly all popular smartphone apps do not use `AsyncStorage` as their primary method of saving data. Instead, they use databases or other tools.

Here are some downsides to just using AsyncStorage:

1. It's slow (compared to other data persistence software)
2. It can only save strings, so all data needs to be convered to strings first.
3. It can eat up space on your phone.
4. It is completely unencrypted.


So don't save usernames and passwords using `AsyncStorage`! If your app gets hacked all of your data will be easily accessed.


![Not Secure](https://media1.tenor.com/images/05729f2e534ba37254f95b39e9647d29/tenor.gif?itemid=3552791)
*Clearly some hacking is going on ...*

If you need something more powerful and secure, instead of `AsyncStorage` you can check out other tools such as Realm ([link](https://realm.io/docs/javascript/latest/)) or Firebase ([link](https://rnfirebase.io/)).

These are harder to learn and use, but offer more of the features a real-world app would need.


## So when **SHOULD** I use `AsyncStorage`?

You should use it if:

1. If you are just saving and retrieving small amounts of data.
2. You are using it to test or prototype an app idea.
3. You only need the unencrypted information for simple, non-secure cases (E.g., displaying a user's name on your app).


## How do I use `AsyncStorage`?

`AsyncStorage` has a few important functions to know. Here's each one.

### 1. Saving Data
To save data, use the `AsyncStorage.setItem()` function. Here's how it works:

```javascript
AsyncStorage.setItem("myName", "Carl Shan")
```

This will create a file on your smartphone's app that stores the value `"Carl Shan"` under the key `"myName"`.

To help you imagine what this does, you can think of it as if a text file on your phone was created that had the following contents:

```json
[
    {
        "myName": "Carl Shan"
    }
]

```

If you run the code:

```javascript
AsyncStorage.setItem("myName", "Jen Selby")
```

This will modify the value of `"myName"` from `"Carl Shan"` to `"Jen Selby"`. 

```json
[
    {
        "myName": "Jen Selby"
    }
]

```

### 2. Retrieving Data
Now that we have saved some data somewhere, how do we get it again?

Here's where the second useful function comes into play. That function is `AsyncStorage.getItem()`. Here's how to use it:

```javascript
AsyncStorage.getItem(<some key here>)
```

The key that's passed in **needs to be a string.**

For example:

```javascript
AsyncStorage.getItem("myName")
```

Okay, you say. So this seems easy enough. 

But wait. There's a catch. You can't just store the return result of `.getItem()` into a variable.

**THAT MEANS YOU CANNOT JUST DO THIS:**

```javascript
let name = AsyncStorage.getItem("myName")
```

Why not? Doesn't `.getItem()` simply get the item at the relevant piece of data?

No.

It doesn't.

Wait, what?

![whut](https://media1.tenor.com/images/d102fbc60a1b9907e55c460d117a925a/tenor.gif?itemid=5654320)

Why not? Why doesn't `.getItem()` just return whatever you're trying to get? Isn't that it's function.

Well you're right, but there's a catch. `.getItem()` won't work quite like that.

That's because `AyncStorage` is an `asynchronous` function (after all that's what the `Async` part of `AsyncStorage` is all about). For code to be `asynchronous` can mean a bunch of things. The details are outside the scope of this class, but suffice to say that it doesn't work in the normal way that your code does. 

In brief, you cannot rely that `AsyncStorage.getItem()` will actually perform the operation you expect immediately. That's what makes it *asynchronous*. 

([If you want to learn more about `Promises` you can read this explanation.](https://spring.io/understanding/javascript-promises))

Instead, `.getItem()` returns something called a `Promise` object, which you can think of a placeholder that represents the eventual result value.

So instead of storing it into a variable, there's a different way to operate on the return value.

### 3 Using `.then()`

After you use `.getItem()` you can call a function called `.then()` on it like this:

```javascript
AsyncStorage.getItem("myName").then()
```

`.then()` is a function that takes in one input: another function! This is the function that will be called **only when AsyncStorage has actually returned something**

Okay, okay I understand. There's a lot of functions here. Here's a more concrete example:

```javascript
AsyncStorage.getItem("myName").then((result) => {
        console.log(result)
        // additional code can go here
    }
);
```

> **NOTE:** The above example created a function on the fly using something called an *arrow function*. If you forgot about or are not sure how to use arrow functions, [check out this explanation](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc).

As a result, the variable `result` will get logged to your console when `AsyncStorage.getItem()` **actually returns something**. 

So what is this variable `result`? It's simply the value you care about. The value that is associated with `"myName"`.

**Now** you can modify it however you wish.

The function that `.then()` takes as its input is called a *callback function*. You can think of it being named a *callback function* because the function gets "called back" once `.getItem()` has finally returned something.

### 4. Removing data

Say you don't want to clog up space on your phone and want to remove some data. There's a handle function for you as well:

```javascript
AsyncStorage.removeItem(key)
```

This will delete the data associated with whatever key you pass it.

## Converting data to strings

Now throughout all of this, I hope you have noticed that all of the critical `AsyncStorage` functions take keys and data as strings. So even if you made a variable that was a list, you have to convert it to a string.

How can you do that?

Luckily for us, there are some nifty functions that are built-in for you to string-ify things and to unstring-ify them.

These functions are provided to us by a built-in module called `JSON`.



### 1. `JSON.stringify()`

We can take some data and turn it into a string using the `JSON.stringify()` function like so:

```javascript
let myData = {'name': 'Carl', 'subject': 'Computer Science'}
let myDataString = JSON.stringify(myData)
```

Now, I can prove to you that what was originally an `Object` has now been turned into a `string`:

```javascript
console.log(myDataString)
// '{"name":"Carl","subject":"Computer Science"}'

typeof(myDataString)
// 'string'

```

So you can use this in the following manner:

```javascript
let someData = {'name': 'Carl', 'subject': 'Computer Science'}
AsyncStorage.setItem('carlAttributes', JSON.stringify(someData))
```

### 2. `JSON.parse()`

Okay, now that we know how to store the data after it's been converted to a string, how we do get the data back into its original type?

There's another command called `JSON.parse()` that does just that. It takes a `string` and converts it back into a native Javascript object:

```javascript
let someData = {'name': 'Carl', 'subject': 'Computer Science'}
AsyncStorage.setItem('carlAttributes', JSON.stringify(someData))

// ... some time later ...
// Now we want to get the data back

AsyncStorage.getItem('carlAttributes').then( (result) => {
        let parsedData = JSON.parse(result)

        console.log(parsedData)
        // {'name': 'Carl', 'subject': 'Computer Science'}
        typeof(parsedData)
        // 'object'
    }
)
```


### When should we use the saved data?

If you want to load some saved data you can do it in a built-in function called `componentDidMount()`.

This is a function that is built into React Native components that is called **once your component has been rendered.**

> **NOTE:** It turns out there is a whole host of functions that get called before and after `render()`. They all have different uses and purposes. To learn more about them you can check out [this post](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1).

Since `componentDidMount()` is called right after you `render()`, you can do something like the below:

```javascript
export default class App extends React.Component {

  componentDidMount() {
    AsyncStorage.getItem('name').then((result) => {
      this.setState({ name: result })
    })
  }

    render() {
        // does some fancy rendering
    }

}
```

The above code will first `render()` and then get whatever data has been previously stored, and update state with it. This will trigger a re-render and your app should quickly (and unnoticeably by the user) load the data.

And that's it! Great job learning `AsyncStorage`.

![Well Done](https://media1.tenor.com/images/1fa0bf4c58df5e5f5142af2098943832/tenor.gif?itemid=3892850)

## Learn More
To learn more about `AsyncStorage`, including a bunch of methods I didn't have time to explain (`mergeItem()`, `getAllKeys()`, `clear()` and more), check out the [official Facebook documentation](https://facebook.github.io/react-native/docs/asyncstorage.html).


