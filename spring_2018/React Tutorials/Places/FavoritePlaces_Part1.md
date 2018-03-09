# Favorite Places Tutorial Part 1
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## Description
This is Part 1 of a 2-part tutorial on learning how to use `<TabNavigator>` and also `<MapView>`.

Here is Part 2 of the tutorial:

* [Part 2](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Places/FavoritePlaces_Part2.md)

This first part of the tutorial will cover the basics of `<TabNavigator>` and `<MapView>`. The second part of the tutorial will cover passing data around different screens by taking advantage of how `<TabNavigator>` works.

By going through this tutorial you will learn:

1. How to create a tab
2. How to create a map in your application
3. How to pass data around two sibling components

## What are we building?

We are going to be building an application that renders a real map, as well as a screen that allows you to add markers on the map that will then show up.

In other words, this will store a number of our favorite places!

Here is our final app:

![Final App](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/FinalApp.gif)

## Setup

First, let's create the folder for this app. Do that by:

`create-react-native-app <your folder name>`

For the purposes of this tutorial, I'm going to name my folder `Places`. You will see that through the rest of this tutorial.

### Installing `react-navigation` and `react-native-maps`

In order to build this, we actually need to install another Javascript library called `react-navigation`. This is an external library with components that other programmers have built that extends the default Facebook component library.

Install it in Terminal with:

`cd Places`
`npm install --save react-navigation`

This library contains a lot of code that allows us to use other pre-built components and customize them as we see fit.

We need to do the same thing with `react-native-maps` since this will provide the component we need to display actual maps.

`npm install --save react-native-maps`

### Setting Up Folders

Let's make a folder called `components` in our `Places` folder (or whatever you named your project folder) to hold all the components we have.

In our `components` folder, make the following two files:

1. `PlaceMap.js` - this will contain the code that depicts the map
2. `AddPlace.js` - this file creates the screen that allows us to add a marker to the map.

### Creating our Tab Navigator

Now, let's edit `App.js` so that it will show a tab bar on the bottom of the screen.

This is a new component we are learning today that I have not taught before.

```javascript
// App.js

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class App extends Component {

    ...

}

```

The thing we just imported, `TabNavigator` is not a component itself.

It is actually a function that takes in several parameters and returns to you a component class.

So we're going to call the `TabNavigator()` function. But what do we call it with?

### Learning about how to use the `TabNavigator()` function

Well when programmers are not sure how to use external tools and libraries, they typically Google around and look for online *documentation* or an *API reference*. This may be the first time you're hearing of those vocabulary words.

Essentially both *documentation* and *API reference* refer to examples and walkthroughs that have been officially (or unofficially) created to document and describe how these external tools and libraries work.

So let's look around for what the `TabNavigator` function needs.

If you Google for `TabNavigator react-navigation` you will eventually find the following page: [TabNavigator reference](https://reactnavigation.org/docs/tab-based-navigation.html)

![React Navigation](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/react_navigation_api_reference.png)

This is the official `API reference` for this function.

It tells us that `TabNavigator` is a function that takes in two arguments:

* `RouteConfigs` 
* `TabNavigatorConfig`

The documentation describes what each of these two arguments should also contain.

Okay, that's great and all, but it may be a bit too much information right now. Let's try to find a more concrete example.

Well, if you click on `Docs` at the top of the web browser, it will bring you to the official documentation. There is a link on the left-hand sidebar that says `Tab navigation`.

Click on that (or just [click here](https://reactnavigation.org/docs/tab-based-navigation.html)) to see a written document describing the use of `TabNavigator()` with an example:

![React Navigation](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/react_navigation_documentation.png)

Looking at this example, we can tell that `TabNavigator()` needs its first argument to look something like the following:

```javascript
// First argument to TabNavigator() needs to look like

{ 
    NameOfYourAppsFirstScreen: { screen: ComponentClassToRender },
    NameOfYourAppsSecondScreen: { screen: ComponentClassToRender },
    ...
}

```

Okay, so let's try to build off of the example and make two different classes that will be rendered by `TabNavigator()`.

So we need to modify `PlaceMap.js` and `AddPlace.js`.

Let's modify each of our files the following way:

#### PlaceMap.js

Copy the following lines of code into `PlaceMap.js`

```javascript
import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';

export default class PlaceMap extends Component {


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map Here!</Text>
      </View>
    );
  }
}

```

#### AddPlace.js

We also need to do the same for `AddPlace.js`

```javascript
import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';

export default class AddPlace extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add a Place Here!</Text>
      </View>
    );
  }
}

```

#### App.js

So let's go back into `App.js` and now use these two new components so that our `TabNavigator()` can render them.

First, let's delete everything in `App.js` so that we can start from fresh.

At the top of your App.js, copy in the following lines of code.

```javascript
import { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import PlaceMap from './components/PlaceMap'
import AddPlace from './components/AddPlace'
```

After we import the relevant files, let's use the `TabNavigator()` function to return a component.

Add the next few lines of code into your file.

```javascript
// Create the component and store it in a variable
const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  }
)
```

Okay, great! But this still isn't enough. We need to use the `TabNav` variable we just created using the `TabNavigator()` function and use it as a component in a class.

Our class is going to be really simple. It will just return the `TabNav` variable as a component.

So let's add this to the bottom of `App.js`.

```javascript
export default class App extends Component {

  render() {
    return(
      <TabNav />
    )
  }
}
```

Great! Now, when you boot up your app on your phone or emulator it should look like this:

![Working Tabs](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/WorkingTabs.gif)

Hooray!

Now let's learn about how to put some nicer icons and color schemes by using another feature of `TabNavigator()`.

### Adding `TabNavigatorConfig`

`TabNavigator()` doesn't just allow you to note which screens render which components.

We can also add options. The first option we're going to add is called `tabBarOptions` which will allow us to change the color of the tab when it's clicked.

Modify the `TabNavigator()` function call to look like the following:

```javascript
const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
```

Now, save your code and your app should now show the tab that is being colored as orange.

![Orange Tabs](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/orange_tabs.png)

Great!

But we can do more than that. Now we need to add icons.

I'm not going into great depth in explaining the following bit of code, since it involves quite a bit of new material in order to parse, but I'll explain the key parts of it.

Change the `TabNavigator()` function call to now look like the following:

> **NOTE:** Make sure that you're putting `navigatorOptions` inside of the `{}` of the second argument for `TabNavigator()`! You may accidentally put it as a third argument to the function if you are not careful.

```jsx
const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    // ********************** //
    // below is the new stuff //
    // ********************** //
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'FavoritePlaces') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-map' + suffix;

        } else if (routeName === 'AddPlace') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-add-circle' + suffix;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // You can see the full list of icons here: https://ionicframework.com/docs/ionicons/
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
  }
)

```

At the top of our file we also need to import the set of icons that comes pre-installed with our version of React Native:

```javascript
import Ionicons from 'react-native-vector-icons/Ionicons';
```

Now save your code and you should have icons!

![Working Icons](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/ColoredIcons.gif)

### OPTIONAL SECTION: Changing the icons.

> **NOTE:** This is an optional section that teaches you how the change the icons. If you are not interested, you can move onto the next section.

Now, if you want to use different icons you need to see the full list of icons [here](https://ionicframework.com/docs/ionicons/) and click on an icon. 

Whatever is the name of that icon (e.g., `ios-alarm` if you are developing for iOS or `md-alarm` if you are developing for Android), you can place it into the following two lines of code that is inside the `navigationOptions`:

> **NOTE:** Remember, the `...` just means it's the same code as you already have, and I just didn't want to clutter up this tutorial with redundant code.

```javascript
navigationOptions: (
    ...
    
    if (...) {
    
        ...
        iconName = <<NEW ICON NAME HERE>> + suffix
    } else if (...) {
    
        ...
        iconName = <<NEW ICON NAME HERE>> + suffix
    }
    
    ...
)
```

You don't need to actually change the icons in this tutorial, but I just wanted to show you how to.

### Now, using `<MapView />`

Great, now that we have `App.js` working, let's get a map set up.

Well, remember when you used `npm` to install `react-native-maps`? We're going to import from there now in our `PlaceMap.js` file.

Go into `PlaceMap.js` and add the following line of code:

```javascript
import MapView from 'react-native-maps'
```

We are also going to change the render function of the `PlaceMap` component so that it actually renders a `<MapView />` component:

```jsx
render() {
    return(
        <MapView style={styles.map}>
        </MapView>
    )
}

```

In addition, we are going to add a style to this map so that it actually shows up. Add the following to the bottom fo `PlaceMap.js`.

```javascript
const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
```

Awesome. Now when you reload your app you should have a map of the United States!

![Working MapView](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/working_mapview.png)

### Centering on Nueva

Let's add a prop to our `<MapView />` component so that it relocates the center of our map onto Nueva.

It turns out that `<MapView />` has a `initialRegion` prop that takes in a Javascript object that describes the initial region we want to take a look at.

> **NOTE:** If you would like to find out other ways of using the `<MapView />` component, you can look at the [API documentation here](https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md)

Change the `render()` function so that it now returns:

```jsx
<MapView style={styles.map}
  initialRegion={{
        latitude: 37.545135,
        longitude: -122.299969,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
        mapType: 'standard',
        title: "Nueva School"
}}>
</MapView>
```

Voila! Now the map centers on the Nueva School!

![Nueva Centered](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/nueva_centered.png)

You are now done with Part 1 of this tutorial.

Click here to go onto [Part 2](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Places/FavoritePlaces_Part2.md).

