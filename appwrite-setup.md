Goal: Setting up Appwrite SDK in the project depending on if a project already exists or not.

Following are the project details:

```js
    const client = new Client()
        .setProject("PROJECT_ID")
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
```

Follow the steps depending on if a project already exists on user's working directory or not:

## If a project already exists:

Install the Appwrite React Native SDK using the following command, respect user's package manager of choice and use the one being used in the codebase:

```
npx expo install react-native-appwrite react-native-url-polyfill
```

From a suitable lib directory, export the Appwrite client as a global variable, hardcode the project details too:

```js
const client = new Client()
    .setProject("PROJECT_ID")
    .setEndpoint("https://fra.cloud.appwrite.io/v1");
```

From the entrypoint of the app, make it so that the following function is automatically called which will ping the Appwrite backend server to verify the setup. Let the user know about this function being added

```
client.ping();
```

## If a project does not exist:

1. Clone the starter kit using the terminal or VSCode. Make sure to clone in the current working directory so that the cloned files are directly available in the working directory.

```bash
git clone https://github.com/appwrite/starter-for-react-native
cd starter-for-react-native .
```

2. Replace all occurrences of the environment variables described in the project details section with their corresponding values. This effectively hardcodes the project details wherever those environment variables are used. Use grep (or an equivalent search) to find and update all occurrences.
3. After replacing and hardcoding project details, run the app on a connected device or simulator using `npm install` followed by `npm run ios` or `npm run android`, then click the `Send a ping` button to verify the setup. Ask the user if the AI agent should run the command to run the app for them. Provide the full command while you ask for permission.
