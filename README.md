# MyApp

A React Native application demonstrating various animation techniques using custom components.

## Features
- **GestureAnimation**: Interactive gesture-based animations.
- **FreeFall**: Simulates free-fall animation.
- **RenderAnimation**: Demonstrates render-based animation techniques.
- **Animation1 & Animation2**: Additional animation examples.

## Project Structure
```
MyApp/
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── package.json
├── assets/
│   └── images/
└── src/
    └── components/
        ├── Animation1.jsx
        ├── Animation2.jsx
        ├── FreeFall.jsx
        ├── GestureAnimation.jsx
        └── RenderAnimation.jsx
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (if using Expo)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd MyApp
   ```
2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

### Running the App
- For Expo:
  ```sh
  npx expo start
  ```
- For React Native CLI:
  ```sh
  npx react-native run-android
  # or
  npx react-native run-ios
  ```

## Usage
- The main entry point is `App.js`, which currently renders the `GestureAnimation` component. You can switch to other animation components by editing `App.js`.

## License
This project is licensed under the MIT License.
