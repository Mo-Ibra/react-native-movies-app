# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



Goal: Setting up Appwrite SDK in the project depending on if a project already exists or not.

Following are the project details:

```

    const client = new Client()
        .setProject("692a2d32001830519b22")
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
    
```

Follow the steps depending on if a project already exists on user's working directory or not:

## If a project already exists:

Install the Appwrite React Native SDK using the following command, respect user's package manager of choice and use the one being used in the codebase:

```
npx expo install react-native-appwrite react-native-url-polyfill
```

From a suitable lib directory, export the Appwrite client as a global variable, hardcode the project details too:

```
const client = new Client()
    .setProject("692a2d32001830519b22")
    .setEndpoint("https://fra.cloud.appwrite.io/v1");
```

From the entrypoint of the app, make it so that the following function is automatically called which will ping the Appwrite backend server to verify the setup. Let the user know about this function being added

```
client.ping();
```
    