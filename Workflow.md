# How to run work

## Environment

For the working on the project, use the tools from **Node.js** and **npm**. All necessary modifications have been made. All that is required of you is that **Node.js** is installed on your working computer, and after in the terminal go to the directory with the project and _once_ application:

```bash
npm i
```

This command will start the process of installing project dependencies from **npm**.

Once the dependencies are successfully installed, you will be able to use the development tools like **ESLint** and **Browsersync** that come with the project. To do this, the following scripts are provided in the `package.json` file...

### `npm start`

Starts a local server using **Browsersync**. Once launched, the site will be viewable in a browser at `http://localhost:3001`.

When you save changes to any js file in the `/js` directory, the page will automatically reload in the browser. Thus, you can follow the development of the project in real time.

> Please note that after starting **Browsersync** will continue to work until you stop it yourself by pressing the `Ctrl` + `C` key combination in the terminal.

### `npm run test`

Runs **ESLint** to lint js files in the `/js` directory according to the rules and requirements for JavaScript code.

## Структура проекта

### `css/`, `img/`

Directories with static project files: styles, images, etc.

### `js/`

Directories with js files.

### `index.html`

Main page.
