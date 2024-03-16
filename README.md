# WATO ASSIGNMENT

This is a React Native application that has a GetStarted, SignUp and SignIn screen.

## Setup and Running the Application

1. Clone the repository:

git clone https://github.com/surya758/wato-project

2. Navigate to the project directory:

cd wato-project

3. Install dependencies

npm install

4. Start the development server:

npm start

5. Run the application on an emulator or physical device using the appropriate command from the Metro Bundler (e.g., `npm run android` or `npm run ios`).

## Implementation Decisions

1. **Separation of Concerns**: The application follows the principle of separation of concerns by separating the UI components and logic into separate modules (mostly).

2. **Reusable Components**: The application uses reusable components, such as `CustomTextInput`, `GradientCard`, `GreenButton`, and `CheckBox`, to improve code maintainability and consistency.

3. **Yup for Validation**: The application utilizes the Yup library for form validation, which offers a simple and expressive way to define validation rules and error messages.

4. **State Management with useState and useContext**: The application uses the `useState` hook for managing local component state and the `useContext` hook for sharing state across multiple components.

5. **Custom Styling**: The application uses custom styling with StyleSheet objects and utilizes linear gradients and background images to achieve the desired visual appearance.

6. **Responsive Design**: The application aims to provide a consistent user experience across different screen sizes and device orientations by using responsive design techniques.

7. **Navigation**: The application uses the `@react-navigation` library for handling navigation between screens, such as the sign-up and sign-in screens.

8. **Network Monitoring**: The application includes the `@react-native-community/netinfo` library for monitoring network connectivity and handling scenarios where the user has no internet connection.

## Dependencies

The following dependencies are used in this project:

- `@react-native-community/netinfo`: ^11.1.0
- `@react-navigation/native`: ^6.1.16
- `@react-navigation/native-stack`: ^6.9.25
- `@react-navigation/stack`: ^6.3.28
- `expo`: ~50.0.13
- `expo-font`: ~11.10.3
- `expo-image`: ~1.10.6
- `expo-linear-gradient`: ~12.7.2
- `expo-status-bar`: ~1.11.1
- `react`: 18.2.0
- `react-native`: 0.73.4
- `react-native-gesture-handler`: ~2.14.0
- `react-native-safe-area-context`: 4.8.2
- `yup`: ^1.4.0
