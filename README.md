# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Create project

Run

```sh
npm create vite@latest footballfan-react -- --template react-ts
cd footballfan-react
npm install
npm run dev
```

### EsLint

<https://eslint.org/docs/latest/use/getting-started>

```sh
npm init @eslint/config
```

```sh
                                                                  // Anwers⤵
✔ How would you like to use ESLint? · problems                    // To check syntax and find problems   
✔ What type of modules does your project use? · esm               // JavaScript modules (import/export)
✔ Which framework does your project use? · react                  // React
✔ Does your project use TypeScript? · No / Yes                    // Yes
✔ Where does your code run? · browser                             // Browser
✔ What format do you want your config file to be in? · JavaScript // JavaScript
✔ Would you like to install them now? » No / Yes                  // Yes
✔ Which package manager do you want to use? · npm                 // npm
```

Airbnb JavaScript Style Guide

<https://airbnb.io/javascript/react/>

```sh
npx install-peerdeps -D eslint-config-airbnb
```

open .eslintrc.cjs file and add the following:

```sh
...   
 "extends": [
        "eslint:recommended",  // Remove the default eslint recommendations
        "airbnb",              // Add this line
        "airbnb/hooks",        // Add this line
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
 ],
...
```

Eslint TypeScript Support

```sh
npm add -D eslint-config-airbnb-typescript
```

open .eslintrc.cjs file and add the following:

```sh
{
  ...,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript', // Add this line
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ...,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Add this line as well
  },
  ...
}
```

open tsconfig.json file and add the following:

```sh
{
  "include": [
    "src",
    ".eslintrc.cjs",  // add this line
  ],
}
```

### Prettier

<https://prettier.io/>

```sh
npm add -D prettier eslint-config-prettier eslint-plugin-prettier 
```

Add a new file .prettierrc.cjs to the root of the application with the following content:

```sh
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```

create a .prettierignore file at the root of the application and put your configs:

```sh
# Ignore artifacts:
build
coverage
node_modules*

# Ignore all HTML files:
*.html
```

add bellow script in package.json to do formatting for all files at once

```sh
{
  ...
   "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "prettier": "prettier --write ."  // add this script
    },
  ...
}
```

### vitest

<https://vitest.dev/>

refer to:

<https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib>

```sh
npm install -D vitest
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/jest-dom
```

vite.config.ts

```sh
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },
});
```

tsconfig.json

```sh
{
  "compilerOptions": {

    "jsx": "react-jsx",
    "types": ["vitest/globals"]
  },
  "include": ["./src"]
}
```

create the setupTests.ts in the src directory with the following content:

```sh
import '@testing-library/jest-dom'
```

create a test demo App.test.tsx with the content:

```sh
/* eslint-disable linebreak-style */
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render hello world', () => {
    // Arrange
    render(<App />);
    const heading = 'Hello world!';
    // Act
    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(heading);
  });
});
```

### React-Router-Dom

```sh
npm install -D react-router-dom
```

### Tailwind CSS

<https://tailwindcss.com/docs/guides/vite>

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This command generates tailwind.config.cjs andpostcss.config.cjs configuration files.

### NextUI

<https://nextui.org/docs/frameworks/vite>

```sh
npm i @nextui-org/react framer-motion
```