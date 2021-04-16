## Current Behavior

If a drawer-screen with stack navigator is nested inside a drawer navigator and then deeplinked to a screen within the stack navigator with a parameter, the parameter is still present when we navigate to the screen without passing the parameter.

## Expected Behavior

When we navigate to the screen without passing any parameter, the parameter has to be undefined.

## How to reproduce

### Setup

```
npm i --legacy-peer-deps
npx pod-install ios
npx react-native run-ios
```

### Open detail screen with deeplink with param 'id=123'

```
xcrun simctl openurl booted "mychat://detail?id=123"
```

**we should see `{ id: 123 }` being shown on the screen**

![image](https://user-images.githubusercontent.com/3846977/114960141-bbd3ba00-9e66-11eb-869a-70e7defc5919.png)

### Go back to Main screen

![image](https://user-images.githubusercontent.com/3846977/114960368-2dac0380-9e67-11eb-81af-fc2492710891.png)

### Tap the button `Go to Details with id '789'`

We should see `{ id: 789 }` being shown on the screen

![image](https://user-images.githubusercontent.com/3846977/114960413-44eaf100-9e67-11eb-9aab-0955e24c3b84.png)

### Go back to Main screen again. Now tap the button `Go to Details without id`

**We still see `{ id: 123 }` being shown on the screen. The expected behaviour here is that the id is undefined.**

### Expected behaviour is seen when deeplinking is not used.

- Now do a full reload. And tap the button `Go to Details with id '789'`. We should see `{ id: 789 }` being shown. Then if we tap the button `Go to Details without id`, we see that the id is undefined as expected. This is the same behaviour I expect after deeplinking too but instead `{ id: 123 }` param is being remembered.

**Note:** I tried it on v6 and was able to reproduce as well
