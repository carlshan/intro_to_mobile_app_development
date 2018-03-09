# Favorite Places Tutorial: Part 2
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## Description

If you have not finished Part 1 of this tutorial, please go back and finish it.

* [Part 1](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/tutorials/Places/FavoritePlaces_Part1.md)

In Part 2 of the tutorial, we will learn how to pass data from the `AddPlace.js` screen to the `PlaceMap.js` screen.

Through this tutorial you will also work through a series of exercises for you to practice your knowledge of React Native.

As a result, we will enable our app to add markers to our map.

### Allow for user input in `AddPlace.js`

We're going to add some `<TextInput>`s and a `<Button>` to `AddPlace.js`.

So let's import `<TextInput>` and `<Button>`:

```javascript
import { TextInput, Button } from 'react-native';
```

Now we're ready to rumble.

But first, let's add the requisite styling to the bottom of the file.

```javascript
const styles = StyleSheet.create({
  description: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    padding: 12,
    borderRadius: 6,
    flex: 1
  },
  textInputShort: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5
  },
  textInputLong: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5
  },
  addPlaceScreen: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
```

Now let's add some of `<TextInput>` components.

Change the `render()` function of `AddPlace.js` to now return the following:

```jsx
render() {
    return (
          <View style={styles.addPlaceScreen}>
            <View style={styles.description}>
              <Text> Add a Place! Enter a latitude, longitude, title and description. </Text>
            </View>
            <View style={styles.input}>
              <TextInput style={styles.textInputShort}
                placeholder="Latitude"
                keyboardType="numeric"
                onChangeText={(text) => {}}
              />
              <TextInput style={styles.textInputShort}
                placeholder="Longitude"
                keyboardType="numeric"
                onChangeText={(text) => {}}
              />
              <TextInput style={styles.textInputShort}
                placeholder="Title"
                onChangeText={(text) => {}}
              />
              <TextInput style={styles.textInputLong}
                placeholder="Description"
                onChangeText={(text) => {}}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => {}}
                title="Add Marker"
    
                />
            </View>
          </View>
        )
}
```

Great. So now users can input a piece of text.

![User Input](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/TestingUserInput.gif)

### Exercise: Save what users enter into `this.state`

Modify `AddPlace.js` to save the `latitude`, `longitude`, `title` and `description` into `this.state`.

> **HINT 1:** You'll have to create `this.state` in a `constructor()`
> 
> **HINT 2:** You also need to have some simple functions that saves the state. I suggest using the `onChangeText` in the `<TextInput>` component.
> 
> **HINT 3:** Remember that when you enter in something in a `<TextInput>`, it by default will be of type `String` object. But lat/lon can be floating decimal numbers (e.g., `12.828310`) So when users enter in a latitude and longitude, make sure you call `parseFloat` on the input to convert it to a `float` before saving it to `this.state`.

Try working through this with other students in the class, and by looking up errors on your own before asking your teacher for help.

Go on to the next section when you have completed this section.


### Adding A Marker to our Map

Now, let's think about how we can use the data they enter.

We want the data they enter to become a `<Marker>` on the `<MapView>` that we are rendering in `PlaceMap.js`. 

Let's go back to that file.

First, let's import the `Marker` component from `react-native-maps`:

```javascript
// PlaceMap.js

import MapView, { Marker } from 'react-native-maps';
```

Now, let's see how we can use it.

According to the Marker API [located here](https://github.com/react-community/react-native-maps/blob/master/docs/marker.md), markers need to be within a `<MapView>` component:

```jsx
<MapView style={styles.map}>
    <Marker />
</MapView>
```

They also need to have the following props:

1. `key`: This is a unique key that identifies this marker. It can be a String of some type (e.g., "NuevaSchool")
2. `title`: This will be the title of the marker that shows up on your screen.
3. `description`: This will be the full-sentence description of the location that pops up underneath the marker.
4. `coordinate`: This is a Javascript object with two elements: `latitude` and `longitude`.


In other words, it needs to look something like:

```jsx
<MapView style={styles.map}>
    <Marker
        key="nuevaschool"
        title="The Nueva School"
        description="A K-12 independent private school with two campuses in the Bay Area"
        coordinate={
            {
              latitude: 37.545135,
              longitude: -122.299969
            }
        }
    />
</MapView>
```

**Exercise:** Try adding a `<Marker />` to render on your map. 

> **NOTE:** You can find the latitude and longitude of a location by searching it on Google Maps, and then right-clicking on it and clicking on "What's here?".

If you are successful, you should see this:

![User Input](https://github.com/carlshan/intro_to_mobile_app_development/blob/master/spring_2018/images/places/nueva_marker.png)



### Allowing Users to Add a Place

Now that we have saved the data a user inputs into `this.state`, and we know how we can use it, we are going to be able to add a marker to the `<MapView>` component.

Go back to our `AddPlace.js` file.

Let's define a function called `addPlace()` in our component that will be the `onPress` prop for the `<Button>` component in our `AddPlace` class.

It should look something like the below (although you may have named your variables in `this.state` differently)

```javascript
  addPlace() {
    let marker = {
      longitude: parseFloat(this.state.longitude),
      latitude: parseFloat(this.state.latitude),
      title: this.state.title,
      description: this.state.description
    }
  }
```

>**NOTE:** Remember to do a `.bind` on this function! 

Now, add it to the `onPress` prop in `<Button>` that `AddPlace` renders:

```jsx
<Button
  onPress={this.addPlace}
  title="Add Place"
/>
```

### Passing Data Around

Okay, so now we've come to one of the most challenging parts of this tutorial.

We have to learn how to pass data from the `<AddPlace>` to `<PlaceMap>`.

Here's the tricky thing.

In the past tutorials, we had a parent-child relationship. Some parent ComponentA would render child ComponentB. As a result, we could pass props between ComponentA and ComponentB, allowing them to share data.

But this is not true any more.

These two components are *sibling* components. They are not parent and child.

![Siblings](https://media1.tenor.com/images/15988f7e6947af867cfdc038b9a9afe9/tenor.gif?itemid=4425255)

So how do we pass data from `<AddPlace>` to `<PlaceMap>`?

Well, the way we need to do it is to actually store that data in the parent of both of these components.

So who is the parent of both of these components?

That would be `<TabNavigator>`.

### Going back to the parent

Let's go back to the `App.js` file.

Because we're using `react-navigation`'s `<TabNavigator>` component, there's a slightly different way we pass props to this component.

Normally we would do something like this:

```jsx
render() {
    return <TabNav
              prop1={...}
              prop2={...}
              ...
            />
}

```

But that doesn't quite work here because `<TabNav>` doesn't actually render `<PlaceMap>` or `<AddPlace>`. 

At least, not directly.

We used the `TabNavigation()` function that we imported to create the tab.

So how do we pass props?

Well, it's actually still pretty simple.

When `TabNavigation()` created our `<TabNav>` component, there is actually a predefined prop called `screenProps` that we can pass our data through.

For example, we can do something like this:

```jsx
render() {
    return <TabNav
              screenProps={{
                prop1: ...,
                prop2: ...
                prop3: ...
                ...
              
              }}

            />
}

```

And as a result, all of the screens in our app will be able to receive this prop through simply accessing `this.props.screenProps.prop1` or `this.props.screenProps.prop2`or the like.

As a result `<AddPlace>` and `<PlaceMap>` can get access to the data that is passed from `<TabNav>`.

So let's make sure that `<TabNav>` is the parent component that holds all the data that its children need.

Okay, so let's put it all together. How do we allow for a user to input a marker and for that marker to update on `<PlaceMap>`?

That's an exercise for you to complete. Here are the steps I would suggest.

### Exercises For You To Complete

> **NOTE:** There are a total of 4 exercises to work on here that will help you finish up this app. 
> 
> I have a few hints for each exercise that you can scroll down to see. But try to get it working on your own before looking at the hints.

In order to get the data from `<AddPlace>` to appear in `<PlaceMap>`, you need to do the following:

#### Exercise 1: Storing `<Marker>`s
Set up `App.js` so that it manages a list of markers in the `this.state` of `App.js`.

Pass the list of `this.state.markers` to the prop `screenProp` of `<TabNav>`.

#### Exercise 2: Updating `<Marker>`s
Define a function called `updateMarkers` that takes in one argument called `marker` and updates the state of `App.js` by putting it at the end of the list of markers in `this.state`.

Pass the `updateMarkers()` function you wrote as a `screenProp` to `<TabNav>`.

#### Exercise 3: Allowing `<AddPlace>` to update this list of `<Marker>`s in `App.js`

Now, go into `AddPlace.js` and write the necessary code that pushes data about a marker (e.g., `title`, `latitude`, `longitude`, `decription`) by calling the `this.props.screenProps.updateMarkers()` with the data that the user inputs.


#### Exercise 4: Render these markers in `<PlaceMap>`

Now you need to update `PlaceMap.js` to access `this.props.screenProps.markers` and render them in your `<MapView>` component.

### Exercise Hints

#### Exercise 1

> **HINT:** I suggest storing the markers as an array that looks something like:
> 
> ```javascript
> [ 
>   { latitude: ..., 
>     longitude: ...,
>     title: ...,
>     description: ... },
> 
>   { latitude: ..., 
>     longitude: ...,
>     title: ...,
>     description: ... },
> 
>   ...
> ]
> ```

#### Exercise 2

> **HINT:** To update an array with something, you call the `.push()` method with the data you want to push to the end of the array.

#### Exercise 3
> **HINT:** Make sure that the way you pass this data is how the `updateMarkers()` function receives it. E.g., does the `updateMarkers()` function expect an `Object`? Or an `Array`? Or something else? Regardless of what you choose, make sure its consistent.

#### Exercise 4
> **HINT:** I suggest making a function called `renderMarkers()` that simply loops over all of `this.props.screenProps.markers` and turns the data stored in there into `<Marker>` components.
> This function should return an array of `<Marker>` components.
> 
> **HINT:** Then you can call this function inside of the `render()` function. Take a look at your `Tic-Tac-Toe` code or `Calculator` to see an example.
> It should look something like:
> 
> ```jsx
> <MapView style=...>
>   {this.renderMarkers()}
> </MapView>
> ```

## Finishing Up

If you are able to finish all 4 of the above exercises, try to do the following additional add-ons:

### Additional Exercise 1: Moving the Map

Move the location of the map to wherever the new `<Marker>` is added to.

### Additional Exercise 2: Parse the `<TextInput>`

Write code that parses and cleans the input that a user types to make sure that it's valid (e.g., that it's not `null` or that `latitude` is a valid number).


## Conclusion

That's it! By the end of this you will have learned how to:

1. Create a tab on your app
2. Create and manipulate a map on your app
3. Pass data from two sibling components by going through a parent component.

Great work! You're a rockstar :)

![Rockstar](https://media1.tenor.com/images/561ee5e2216c5c7b7105e659855afbde/tenor.gif?itemid=6195901)
