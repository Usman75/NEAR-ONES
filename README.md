
# NEAR-ONES[Alpha]
NEAR-ONES is a Decentralized App for students and teachers to shear their ideas and problems in one place without any censorship.
the main purpose is to amplify the voice of students on every platform.

---
## Demo
[Try Now](https://gitpod.io/#https://github.com/Usman75/NEAR-ONES)

---
![Alt Text](https://github.com/Usman75/NEAR-ONES/blob/master/near.gif)
---
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Usman75/NEAR-ONES)

---
### Thought Process and idea building
It’s my first experience of developing with the NEAR protocol. After reading the Challange description and then doing brainstorming finally I decided to build a NEAR-ONES App “A platform to come to near as one place using NEAR Protocol and blockchain”.
To create a basic playground for playing with near I use a create near app template.
```
npx create-near-app your-project-name
```

# Features
Here's the things that you can do with NEAR-ONES
## Content
Post stories, Shear ideas, ask questions and help others on their problems. Appreciate the post because you think it is cool not because everyone said so.Observe, post independently, create your own interpretation without bounded to public consensus.
## Identicon
   To easily and uniquely identifying every user has a unique avatar.

## Further 

Currently, this application provides a simple user interface that increases its interactivity and usability in terms of UX.
The user simply adds the title and content of the post to shear something. the post is stored on decentralized storage with the randomly generated unique id and also with the reference owner of that content.

In the future, we decided to build other modules like tipping a post that ultimately leads users to focus on the quality of content instead of quantity.
the other modules like a multimedia integration using IPFS that’s interactivity of the NEAR-ONES.

## Create and Shear
NEAR-ONES gives everyone to a equal power and without any central control or administration. So feel free to shear your ideas with others and contribute to making a Censorship free world.

<p>
<img src="https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311" width="240">
</p>

<br />
<br />

## Template for NEAR dapps
### Requirements
##### IMPORTANT: Make sure you have the latest version of NEAR Shell and Node Version > 10.x 
**Note**: if using Node version 13 please be advised that you will need version >= 13.7.0

1. [Node.js](https://nodejs.org/en/download/package-manager/)
2. (optional) near-shell

```
npm i -g near-shell
```
3. (optional) yarn
```
npm i -g yarn
```
### To run on NEAR testnet

```bash
npm install && npm run dev
```

with yarn:

```bash
yarn && yarn dev
```

The server that starts is for static assets and by default serves them to http://localhost:1234. Navigate there in your browser to see the app running!

NOTE: Both contract and client-side code will auto-reload once you change source files.

### To run tests

```bash
npm test
```

with yarn:

```bash
yarn test
```

### Deploy

#### Step 1: Create account for the contract

You'll now want to authorize NEAR shell on your NEAR account, which will allow NEAR Shell to deploy contracts on your NEAR account's behalf \(and spend your NEAR account balance to do so\).

Type the command `near login` which opens a webpage at NEAR Wallet. Follow the instructions there and it will create a key for you, stored in the `/neardev` directory.

#### Step 2:

Modify `src/config.js` line that sets the account name of the contract. Set it to the account id from step 1.

NOTE: When you use [create-near-app](https://github.com/nearprotocol/create-near-app) to create the project it'll infer and pre-populate name of contract based on project folder name.

```javascript
const CONTRACT_NAME = 'react-template'; /* TODO: Change this to your contract's name! */
const DEFAULT_ENV = 'development';
...
```

#### Step 3:

Check the scripts in the package.json, for frontend and backend both, run the command:

```bash
npm run deploy
```

with yarn:

```bash
yarn deploy
```

NOTE: This uses [gh-pages](https://github.com/tschaub/gh-pages) to publish resulting website on GitHub pages. It'll only work if project already has repository set up on GitHub. Feel free to modify `deploy:pages` script in `package.json` to deploy elsewhere.

### To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/index.js` for the JavaScript front-end code and how to integrate contracts
- `src/App.js` for the main React component
- `src/main.test.js` for the JavaScript integration tests of smart contract
- `src/App.test.js` for the main React component tests

### Troubleshooting

On Windows, if you're seeing an error containing `EPERM` it may be related to spaces in your path. Please see [this issue](https://github.com/zkat/npx/issues/209) for more details.
