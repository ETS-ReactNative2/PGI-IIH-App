# PGI-IIH-App

Project Google Doc: [PGI-IIH Project](https://docs.google.com/document/d/1c0i7CWvFe74oSjB3lPAtZl99W_M7GasYaEsfCHuchIc/edit?usp=drivesdk)

The initial designs of the PGI-IIH mobile application can be viewed [here](https://www.figma.com/file/HkXxXZZiccxzgSRqaakuyG/PGI-project?node-id=1%3A2).

## Installation Instructions

- You should have [nodejs](https://nodejs.org/en/download/) installed on your system.

- Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase. Refer [Expo](https://docs.expo.dev/get-started/installation/) for installation steps.

- Clone the project repository.

```
git clone https://github.com/ankitgoyal0301/PGI-IIH-App.git
```
- Change directory to the project repository.

```
cd PGI-IIH-App
```
- Install project dependencies.

```javascript
npm install
```
- Launch the project.

```javascript
npm start
```

## FAQ

#### Q. How to use react-devtools in react native?

Ans. Refer [react-native-how-to-inspect-the-ui-elements](https://stackoverflow.com/questions/36638245/react-native-how-to-inspect-the-ui-elements)

#### Q. How to toggle inspect in IOS Simulator?

Ans. To toggle inspect on iOS simulator - CMD + Ctrl + Z -> Show Inspector

#### Q. How to use TouchableWithoutFeedback to avoid any issues in android?

Ans. You must put something into it to make it work, just put a <View> and wrap your JSX into the view is the first step, the next is making the view flex=1

```javascript
<TouchableWithoutFeedback>
    <View style={{flex:1}}>
         ... your actual JSX
    </View>
</TouchableWithoutFeedback>
```

for more info, refer [Github Issues](https://github.com/facebook/react-native/issues/10180)