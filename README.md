# Buy Buddy Javascript Client

Lead maintainer: [Buğra Ekuklu (Chatatata)](https://github.com/Chatatata).

**If you're searching for our licensed web application, go to [BuyBuddyWeb](https://github.com/heybuybuddy/BuyBuddyWeb).**

## Abstract
The Buy Buddy Javascript Software Development Kit makes your web and Node.js applications integrate easily with Buy Buddy platform to create astonishing shopping experience.
This library provides a generic abstraction layer to access Buy Buddy platform in a modular way.

### Features
- **Platform management**: A Javascript-friendly approach to the underlying RESTful API. Every single entity found in our platform can be managed with this library.
- **Simplified payments**: You might use your own payment system, or you can use existing ones found in APIs.
- **Impressive platform support**: You can use this software development kit in web browsers (Chrome, Safari, Firefox etc.), Node.js/io.js and React Native.
- **Built with ES7**: We implemented this software development kit using latest Javascript technologies, including ES7, Karma and promises. Don't worry about backwards compatibility, polyfills are included.

## Installation
You can install our software development kit with various installation methods.

### Node.js/io.js

If you're using *npm*, it is available as a package.

```bash
$ npm install buy-buddy-javascript-client --save
```

You can also use *yarn*.

```bash
$ yarn add buy-buddy-javascript-client
```

### Supported Platforms
Currently, we run our integration tests in those platforms:
- Chrome
- Firefox
- Safari
- PhantomJS
- Node.js (>= 8.9.2)

### Running Unit Tests
1. Clone the repository to your local: `git clone https://github.com/heybuybuddy/buy-buddy-javascript-client`.
2. Install *gulp* if it is not available globally: `npm install -g gulp`.
3. Run `gulp test:unit` for unit tests, `gulp test:integration` for integration tests. Note that integration tests needs to be run on **all** supported browsers, which needs to be installed on your computer.

## License
MIT