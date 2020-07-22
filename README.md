## What is this thing?

This repo is a super scaled down version of our production app. Using a Vue front end and an node.js backend using express and Sequelize. To make things simple we'll be using sqlite, a little file-based database.

## Getting started

Install the main app dependencies

```
yarn
```

Set up the db

```
sequelize init
```

```
yarn add mysql2
```

```
npx sequelize-cli db:migrate
```

Install nodemon globally (if you don't already have it) - we'll be using nodemon to run + restart our node.js app

```
npm install -g nodemon
```

You can then start the backend app (from the root of this repo) with

```
nodemon app.js
```

Install the deependencies for the frontend app

```
cd apps/dashboardApp
yarn
```

And start the frontend with

```
yarn run serve
```


## Gotchas

This was thrown together stupidly quickly so there are some little gotchas (feel free to add more to this list if you find them):

- the sqlite database is fine but you can't have it open in a db browser while using it (which makes sense as it's a file) - theres probs a fix but I couldn't find it quickly (as an aside if you do want to peek inside your sqlite db I recommend [sqlitebrowser](https://sqlitebrowser.org/))

- The email template editing thing is a bit jank, it loads data from the component into the store badly (not an issue in prod where we use modals for editing) but it means you need to access that page from the root. Refreshing or loading it directly messes it up. 