:tulip::rabbit::tulip:
# Pizza App

# Project information
This is a node.js/express/postgres app

## Setting up the project
1. mkdir your-project-folder
2. npm init
3. mkdir src
4. touch src/index.js src/App.js
5. npm install --save-dev webpack@3.3.0 babel-preset-react css-loader
extract-text-webpack-plugin@3.0.0
6. npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-es2015
7. touch webpack.config.js
8. touch index.html
9. touch .babelrc
10. touch .gitignore
11. echo "node_modules" >> .gitignore
12. touch build/styles.css
13. create your webpack.config.js file and specify the presets in your .babelrc file
14. npm run build
15. createdb your_database_name
16. mkdir -p db/migrations
17. get a timestamp from Chrome console by entering Date.now()
18. touch db/migrations/migration-1519047472324.sql
19. define your table
20. run this command psql -d your_database_name -f db/migrations/migration-1519047472324.sql
21. mkdir db/seeds
22. touch db/seeds/data.sql
23. after you have entered the insert statements, run the seed file
24. here is the command psql -d your_database_name -f db/seeds/data.sql
25. now you have a node/express//psql project up!

## Additional Libraries
Node

Express

Webpack

Postgres
