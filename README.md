# Sapper-Template-Bulma

Is a [BulmaCSS](https://bulma.io/)-ready Svelte/Sapper template with as little boiler-plate code as one can have.

## Installing 

### Get `degit`  

`npm install -g degit`

### Get template 

- `npx degit "TheBeachmaster/sapper-template-bulma" myapp` 
- `cd my-app`

## Included files (can be removed)

- `Nav.svelte` : a nav component to show where components should reside
- `usage.svelte` : a dummy usage page showing how to use BulmaCSS inside your routes.
- `_layout.svelte` : another dummy page showing how one can setup layouts that will be injected into their pages.

## Important files

- `server.js` : contains the **Express** server app
- `static/style.scss`: declares Bulma styles to be used. Feel free to modify as needed. [More info](https://bulma.io/documentation/customize/with-node-sass/#6-add-your-own-bulma-styles) .

## Usage 

### Install dependencies

#### Yarn

- `yarn` 

#### npm 

- `npm install` 

### Create `global.css` 

- `yarn run build-css` or `npm run build-css`

### Up and running  

- `yarn run dev` or `npm run dev`  
- Navigate to [localhost:3000](http://localhost:3000) to see your app.

## Cleaning up 

- `yarn run clean-all` or `npm run clean-all` or delete the `__sappper__` directory

## Ports 

- You can set your app port to any value eg  
    `PORT=3099 yarn run dev` or `PORT=3089 npm run dev`