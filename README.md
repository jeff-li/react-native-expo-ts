<h1 align="center">React Native Expo TypeScript</h1>
<div align="center">

Build universal native apps with TypeScript. A template included in [Airstrip](https://github.com/jeff-li/airstrip) generator

[![Node Unit Tests](https://github.com/jeff-li/react-native-expo-ts/actions/workflows/unit_test.yml/badge.svg)](https://github.com/jeff-li/react-native-expo-ts/actions/workflows/unit_test.yml)
[![codecov](https://codecov.io/gh/jeff-li/react-native-expo-ts/branch/main/graph/badge.svg?token=rvBW1ASae6)](https://codecov.io/gh/jeff-li/react-native-expo-ts)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)

</div>

## Features
✅ TypeScript  
✅ [Jest](https://jestjs.io/docs/tutorial-react-native) with [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) and additional Jest matcher [@testing-library/jest-native](https://github.com/testing-library/jest-native)

✅ Github Actions CI  
✅ Codecov  
✅ ESLint  
✅ [React Navigation 6](https://reactnavigation.org/) Stack Navigator and Bottom Tab Navigator  
⬜️ Login Page


This project was bootstrapped with [Expo Cli](https://docs.expo.dev/).

`ts-jest` is limited to 26.5.6 right now because React Native is using @jest/create-cache-key-function 26.5.0 and it is incompatible with jest 27

## Available Scripts

In the project directory, you can run:

### `expo export`
Export the static files of the app for hosting it on a web server

### `expo init`
Create a new Expo project

###  `expo install`
Install a module or other package to a project

### `expo run:android`
Run the Android app binary locally

### `expo run:ios`
Run the iOS app binary locally

### `expo send`
Share the project's URL to an email address

### `expo start`
Start a local dev server for the app

### `expo start:web`
Start a Webpack dev server for the web app
