# WhatsApp Web clone

A clone of WhatsApp Web using pure JavaScript + Firebase and Auth - HCode course.
The project includes:

- Auth with Google accounts
- Notifications
- Real-time (Firebase)
- Audio
- Documents
- Access computers camera
- Messages status

## Chat with other users

![Chat](examples/InitialChat.gif)

## Send documents
![Chat](examples/Document.gif)

## Like real WhatsApp :)
![Chat](examples/Emotion.gif)

## Getting Started

Add your Firebase config in Firebase.js constructor, with Firebase bucket path as well.

```jsx
...
constructor() {
    this._config = {
        //Your Firebase config here :)
    };

    this.init();
}
...
```
Run the follow commands and the project will open on port 8080.

```sh
$ npm install && npm run start
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
