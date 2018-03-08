# Favorite Places Tutorial: Part 2
By Carl Shan of [The Nueva School](www.nuevaschool.org)

## Description

If you have not finished Part 1 of this tutorial, please go back and finish it.

In Part 2 of the tutorial, we will learn how to pass data from the `AddPlace.js` screen to the `PlaceMap.js` screen.

As a result, we will enable our app to add markers to our map.

### Allow for user input in `AddPlace.js`

We're going to add some `<TextInput>`s and a `<Button>` to `AddPlace.js`.

So let's import `<TextInput>` and `<Button>`:

```
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

image testing user input gif

### Exercise: Save what users enter into `this.state`

Modify `AddPlace.js` to save the `latitude`, `longitude`, `title` and `description` into `this.state`.

> **HINT 1:** You'll have to create `this.state` in a `constructor()`
> **HINT 2:** You also need to have some simple functions that saves the state. I suggest using the `onChangeText` in the `<TextInput>` component.
 