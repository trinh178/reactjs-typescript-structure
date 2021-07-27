# <center>REACTJS TYPESCRIPT STRUCTURE</center>
## Table of Content
  - [Table of Content](#table-of-content)
  - [1. Introduce](#1-introduce)
  - [2. Used libraries](#2-libraries)
  - [3. Folder struture](#3-folder-struture)
  - [4. Redux file flow](#4-redux-file-flow)
  - [5. Page file flow](#5-page-file-flow)
  - [6. Conclusion](#6-conclusion)
  - [7. Reference](#7-reference)

## 1. Introduce

## 2. Used Libraries
- [react](link) for ui
- [typescript](link) for can use TS for this project
- [react-router](link) for router/navigation
- [bootstrap](link) for layout/responsive
- [styled-components](link) for style
- [prop-types](link) for check types of react props at run-time
- [redux](link)/[redux-toolkit](link) for state management
- [axios](link) and [RTK query] for network and api
- [dotenv](link) for environment variable
- [webpack](link) for bundle
	- [HtmlWebpackPlugin](link) for creation of HTML files, specifically here is 'index.html' file.
	- [DefinePlugin](link) + [dotenv](link) for define environment variable
	- [ESLintPlugin](link) for coding formatter/convention when building/compile time
	- [babel-loader](link) for convert from latest version of JS to old version of JS to every browser can use
	- [ts-loader](link) for convert from TS to JS
	- [style-loader](link) + [css-loader](link) for CSS
- [eslint](link) for coding formatter/convention when coding time
	- [eslint-config-airbnb](link) use airbnb coding style

- other config
  - [babel](link)
	- [@babel/preset-env](link) to use latest JS
	- [@babel/preset-react](link) to use react JSX
	- [babel-plugin-styled-components](link) to use styled components
  - [eslint](link)
	- [typescript-eslint/eslint-plugin](link) for rules for TypeScript codebases
	- [typescript-eslint/parser](link)
	- [eslint-config-airbnb](link) use airbnb convention
	- [eslint-import-resolver-typescript](link) adds TypeScript support to eslint-plugin-import, slove “import/no-unresolved” error
	- [eslint-plugin-import](link) required for airbnb
	- [eslint-plugin-jsx-a11y](link) required for airbnb
	- [eslint-plugin-react](link) required for airbnb
	- [eslint-plugin-react-hooks](link) required for airbnb

## 3. Folder struture
```bash
├── app
│	├── env
│	│	├── development.env
│	│	└── production.env
│	├── network
│	│	└── api.ts
│	├── redux
│	│	├── store.ts
│   │   └──
│	├── router
│	
├── services
│	└── api
│	
├── modules
│	├── [module0]
│	│	├── config
│	│	│	└── reduxSlices.ts
│	│	├── components
│	│	└── containters
│   ├── [module1]
│
├── masterpages
│	├── [masterpage0]
│	│	├── layout
│	│	├── notfoundpage
│	│	└── pages
│	│		├── [page0]
│	│		│	├── components
│	│		│	└── containters
│   │       ├── [page1]
│   │
│   ├── [masterpage1]
│
├── assets
│   ├──
│
├── utilities
│   ├──
│
├── package.json
├── tsconfig.json
├── balel.config.json
├── webpack.config.dev.js
├── webpack.config.prod.js
├── eslintrc.json
```

## 4. Redux file flow

## 5. Page file flow
### Router tree
```bash
├── RootRoute - MasterpagesRoutes
│   ├── MasterpageRoute1
│   │   ├── PageRoute1
│   │   ├── PageRoute2
│   │
│   ├── MasterpageRoute2
│   │   ├── PageRoute1
│   │   ├── PageRoute2
│   │
```


## 6. Conclusion

## 7. Reference
- https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba
